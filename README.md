
# 生成环境打包
$ npm run build
$ npm start

# 打包需要部署的静态页面
$ npm run generate



这里关于项目初始化，我是直接使用的 `Nuxt` 官网提供的 starter 模板

```shell
# 安装 vue-cli
npm install -g vue-cli
# 初始化项目
vue init nuxt-community/starter-template nuxt-ssr-demo
# 安装依赖
cd nuxt-ssr-demo
npm install # Or yarn install
# 启动本地服务
npm run dev
```


```shell
├── assets						css，图片等资源都在这
├── components                  组件相关
├── layouts                     路由布局
├── middleware                  中间件
├── pages                  		路由页面
├── static                  	静态资源
├── pages                  		路由页面
├── store              	      	vuex 相关
├── nuxt.config.js              nuxt 相关配置
├── package.json              	依赖相关
├── README.md              	    项目介绍
```

接触过 `vue` 的小伙伴，看着这个目前可能会有点小疑问，为什么没有 router 路由相关的文件？莫慌，`Nuxt` 会帮你将 pages 下面的文件自动解析成路由。所以在接下来的开发中，记得别瞎在 pages 下面新增文件，pages 下面的每一个 vue 文件就是一个路由。

### 2、引入 axios

#### i. 安装依赖

```shell
npm i axios -S
```

#### ii. 封装 axios

为了项目之后更加方便的开发，我们有必要对 axios 进行一层封装，我们要时刻养成这样一种好习惯。

首先在根目录下面新建 `service` 目录，在其下面建立 `config.js` 和 `index.js` 两个文件，下面的代码仅供参考，如果你的项目还需要做额外的一些配置，可自行进行拓展

在 `config.js` 中写入：

```javascript
import http from 'http'
import https from 'https'

export default {
  // 自定义的请求头
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    'X-Requested-With': 'XMLHttpRequest'
  },
  // 超时设置
  timeout: 10000,
  // 跨域是否带Token
  withCredentials: true,
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  responseType: 'json',
  // 用于node.js
  httpAgent: new http.Agent({
    keepAlive: true
  }),
  httpsAgent: new https.Agent({
    keepAlive: true
  })
}
```

在 `index.js` 中写入：

```javascript
import axios from 'axios'
import qs from 'qs'
import config from './config'

const service = axios.create(config)

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回结果处理
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
```

#### iii. 跨域处理

使用过 `vue` 的同学，肯定知道对于项目中的跨域，`vue-cli` 对 `webpack` 中的 `proxy` 选项进行了一层封装。它暴露出来的是一个叫 `proxyTable` 的选项，是对 `webpack` 中的 `proxy` 和其三方插件 `http-proxy-middleware` 的一个整合。

不幸的 `Nuxt` 中没有 `proxyTable` 这么一个配置项来进行跨域的配置。当然幸运的是，在 `Nuxt` 中你可以直接通过配置 `http-proxy-middleware`  来处理跨域。更幸运的是 `Nuxt` 官方提供了两个包来处理 `axios` 跨域问题。

- [@nuxtjs/axios](https://www.npmjs.com/package/@nuxtjs/axios)
- [@nuxtjs/proxy](https://www.npmjs.com/package/@nuxtjs/proxy)

首先，进行安装

```shell
npm i @nuxtjs/axios @nuxtjs/proxy -D
```

然后在 `nuxt.config.js` 文件里进行配置

```javascript
modules: [
  '@nuxtjs/axios'
],
axios: {
  proxy: true
},
proxy: {
  '/api': {
    target: 'xxx.target.com',
    pathRewrite: { '^/api': '' }
  }
}
```

这里需要注意，因为是服务器端渲染，我们得时刻明确当前地址是属于路由跳转还是属于 axios 请求。所以我们需要在 `service/index.js` 写入以下判断


if (process.server) {
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}


### 3、管理 vuex

先看下我们 store 目录下需要的一些文件

```shell
├── actions.js                  axios 请求相关
├── index.js					主入口文件
├── mutations.js                同步状态操作相关
├── state.js                  	初始状态相关
```

接下来我们以此看看每个文件的内容

#### i. actions.js

```javascript
import request from '~/service'

const api = '/api'

export const banner = async (store, params) => {
  return await request.get(`${api}/v1/get_banner`, params)
}
```

#### ii. state.js

```javascript
export default {
  counter: 1,
  isPhone: false
}
```

#### iii. mutations.js

```javascript
export function INCREMENT (state) {
  state.counter++
}

export function PCORPHONE (state, bool) {
  state.isPhone = bool
}
```

#### iv. index.js

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
```

然后你就可以在页面中进行使用了

```html
<template>
  <div class="page">
    <button @click="handleClick">{{ counter }}</button>
    <p>{{ banner.name }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  async asyncData ({ store, error }) {
    // 对 axios 进行批量处理
    let [ res ] = await Promise.all([
      store.dispatch('banner')
    ]).catch((e) => {
      error({ statusCode: 404, message: 'Post not found' })
    })
    return {
      banner: res.banner
    }
  },
  computed: {
    ...mapState({
      counter: state => state.counter
    })
  },
  methods: {
    ...mapMutations([
      'INCREMENT'
    ]),
    handleClick () {
      this.INCREMENT()
    }
  }
}
</script>
```

### 4、全局组件管理

将组件引入的相关配置写入到 plugins 目录下即可

比如，我需要引入三方组件库 [element-ui](https://github.com/ElemeFE/element) ，我们只需在 plugins 目录下新建一个 `element-ui.js` 文件，并写入

```javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
```

然后在 `nuxt.config.js` 文件中引入

```javascript
plugins: [
  '~/plugins/element-ui'
]


当然，你想配置自己本地的全局组件，也是一样的做法。先在 plugins 目录下新建一个 js 文件，然后引入你的文件，最后再在 `nuxt.config.js` 文件中引入即可。

### 5、全局样式管理

和组件管理同理，不同的就是，css 需要存放在 assets 目录下。比如，现在我需要有一个 `main.css` 文件对路由跳转进行动态切换。

首选，你得在 `assets/main.css` 中写入重置样式吧

```css
.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}

.page-enter, .page-leave-active {
  opacity: 0;
}
```

然后，你只要在 `nuxt.config.js` 进入引入即可

```
css: [
  '~/assets/stylus/main.styl'
]
```


## 三、项目部署

到这一步的同学，你得先确保你拥有一个自己的服务器。如果没有的话，感觉去买一个，现在阿里云和腾讯云都在搞活动，巨便宜哦 ~

OK，文章继续。在进行部署讲解前，我们先看一下 `Nuxt` 提供的几个命令

| 命令            | 描述                                       |
| ------------- | ---------------------------------------- |
| nuxt          | 启动一个热加载的 Web 服务器（开发模式） [localhost:3000](http://localhost:3000/) |
| nuxt build    | 利用 webpack 编译应用，压缩 JS 和 CSS 资源（发布用）      |
| nuxt start    | 以生成模式启动一个 Web 服务器 (`nuxt build` 会先被执行)   |
| nuxt generate | 编译应用，并依据路由配置生成对应的 HTML 文件 (用于静态站点的部署)    |

### 1、静态化页面部署

我们从官网给出的文档可以看出，部署静态化页面需要用到的命令是 `nuxt generate` ，执行的时候会在根目录下面生成 dist 目录，里面的文件都是静态化页面需要的打包好的文件。

**这里需要特别注意的一点是，如果你的项目中存在 axios 请求的话，记得在你本地开启一个本地服务哦 ~ 不然打包的时候执行到 axios 请求的时候会报错。因为前面我们通过使用 node 的 process 对运行环境进行了是跳转还是请求的判定，而打包进行请求的时候是不依赖 node 环境的**

#### i. 使用 gh-pages

这里，我先假设小伙伴们都可以正常执行 `nuxt generate` 并生成对应的 dist 目录。

为了项目的并行开发，我们一般会在 `.gitignore` 文件里面将打包文件给忽略掉，但我们静态化页面的部署有需要用到 dist 目录下的所有打包文件。所以这里我们将使用 [gh-pages](https://www.npmjs.com/package/gh-pages) 将打包文件发布到我们的 git 仓库

```shell
# 安装 gh-pages
npm i gh-pages -D
```

然后在 `package.json` 写入配置（当然你也可以新建文件执行发布）

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

执行 `npm run deploy` ，然后你的 dist 目录就会发到你们仓库的 gh-pages 分支了

#### ii. 开始部署

打包文件上传好之后，你需要做的第一件事就是连接好你的服务器。然后在 cd 到服务器根目录下面，在 `data/www` 目录下面将你的项目 `git clone` 下来。然后切换到 `gh-pages` 分支

接下来，开始配置你的 nginx （还没下载 nginx 的同学请自行解决）

```nginx
 server {
  # 端口，默认是 80
  listen 81;
  # 服务名(写域名或者 ip 地址都可以)
  server_name 123.12.123.12;
  # server 根目录
  root  /data/www/nuxt-ssr-demo;
  # 主入口文件
  index  index.html;
  # 反向代理
  location /api/ {
    proxy_pass https://xxx.target.com/;
  }
}
```

然后重启 nginx

```shell
sudo service nginx restart
```

然后你就能在 http://123.12.123.12:81 访问到你部署好的静态化页面了

#### i. 进行服务代理

第一步，将之前 clone 下面的 git 项目切换到主开发分支，然后为了之后的方便修改一下你的 ` package.json` 

```json
"scripts": {
  "build": "npm run lint && nuxt build && npm start",
  "start": "nuxt start"
}
```

第二步，启动服务

```shell
npm run build
```

第三步，配置你的 nginx 文件

```nginx
# 通过 upstream nodejs 可以配置多台 nodejs 节点，做负载均衡
# keepalive 设置存活时间。如果不设置可能会产生大量的 timewait
# proxy_pass 反向代理转发 http://nodejs

upstream nodenuxt {
    server 127.0.0.1:3000; # nuxt 项目监听端口
    keepalive 64;
}
server {
  listen 80;
  server_name www.qiangdada.cn;
  
  location / {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Nginx-Proxy true;
    proxy_cache_bypass $http_upgrade;
    proxy_pass http://nodenuxt; # 反向代理
  }
}
```

最后，重新启动 nginx 服务

```shell
sudo service nginx restart
```

#### ii. 使用 pm2 做进程守护

如果我们按照上面的步骤进行部署的话，服务器会经常断掉连接，那我们的服务也就断了。所以为了守护好我们的 nodejs 进程，这里我将使用 pm2 对进程进行守护

首先全局安装 pm2

```shell
npm i pm2 -g
```

然后进入到项目目录，执行

```shell
pm2 start npm --name "nuxt-ssr-demo" -- run build
```


对于 pm2 用法，请小伙伴们输入 `pm2 --help` 然后自行查阅



对于 `Nuxt`，在使用层面，是比较简单、好上手的。相对 vue-ssr 来说，它大大的简化了开发的配置，让开发人员可以只需思考业务的开发，而不用太去担心文件的配置。其中 `Nuxt` 通过监听 pages 目录文件变更并自动生成路由更是直接省去了我们平常对于路由的配置。