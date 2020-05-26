import Vue from 'vue';
let globalPriceFilter = {
    priceFilter:function(val){
         let formatRes = '';
            let parseRes = JSON.parse(val);
            let hanzo = Number(parseRes.valuationType);
            let price = parseRes.price[0];
            let varUnit = '';
            switch( hanzo ){
                case 1:
                    formatRes = `${price.countTime || '0'}元/小时`;
                    break;
                case 2:
                    switch(parseRes.unit){
                        case 4:
                            formatRes = `${price.countDun || '0'}元/吨`;
                            break;
                        case 1:
                            formatRes = `${price.countSettle || '0'}元/件`;
                            break;
                        case 2:
                            formatRes = `${price.countDai || '0'}元/袋`;
                            break;
                        case 3:
                            formatRes = `${price.countChe || '0'}元/车`;
                            break;                        
                    }
                    break;
                case 3:
                    switch(parseRes.unit){
                        case 4:
                            varUnit = `吨`;
                            break;
                        case 1:
                            varUnit = `件`;
                            break;
                        case 2:
                            varUnit = `袋`;
                            break;
                        case 3:
                            varUnit = `车`;
                            break;                        
                    }
                    formatRes += `${(price.ladderObj)[0].count}${varUnit}以下（含），${(price.ladderObj)[0].unit}元/${varUnit}`;
                    for (let i in price.ladderObj) {
                        if (i > 0 && i != (price.ladderObj.length - 1)) {
                            formatRes += `；${(Number((price.ladderObj)[i - 1].count)) + 1}至${(price.ladderObj)[i].count}${varUnit}（含），${(price.ladderObj)[i].unit}元/${varUnit}`
                        }
                    }  
                    formatRes += `；${(price.ladderObj)[price.ladderObj.length - 2].count}${varUnit}以上，${(price.ladderObj)[price.ladderObj.length - 1].overUnit}元/${varUnit}`;
                    break;
                case 4:
                    if (price.countSettle) {
                        formatRes += `${price.countSettle || '0'}元/件,`
                    } if (price.countDai) {
                        formatRes += `${price.countDai || '0'}元/袋,`
                    } if (price.countChe) {
                        formatRes += `${price.countChe || '0'}元/车,`
                    } if (price.countDun) {
                        formatRes += `${price.countDun || '0'}元/吨`
                    }
                    break;
                case 5:
                    formatRes += `${price.countTime || '0'}元/小时,`
                    if (parseRes.unit == 1) {
                        formatRes += `${price.countSettle || '0'}元/件`
                    } else if (parseRes.unit == 2) {
                        formatRes += `${price.countDai || '0'}元/袋`
                    } else if (parseRes.unit == 3) {
                        formatRes += `${price.countChe || '0'}元/车`
                    } else {
                        formatRes += `${price.countDun || '0'}元/吨`
                    }
                    break;
                case 6:
                    formatRes += `${price.countTime || '0'}元/小时,`;
                    switch(parseRes.unit){
                        case 4:
                            varUnit = `吨`;
                            break;
                        case 1:
                            varUnit = `件`;
                            break;
                        case 2:
                            varUnit = `袋`;
                            break;
                        case 3:
                            varUnit = `车`;
                            break;
                    }
                    formatRes += `${(price.ladderObj)[0].count}${varUnit}以下（含），${(price.ladderObj)[0].unit}元/${varUnit}`;
                    for (let i in price.ladderObj) {
                        if (i > 0 && i != (price.ladderObj.length - 1)) {
                            formatRes += `；${(Number((price.ladderObj)[i - 1].count)) + 1}至${(price.ladderObj)[i].count}${varUnit}（含），${(price.ladderObj)[i].unit}元/${varUnit}`

                        }
                    }
                    formatRes += `；${(price.ladderObj)[price.ladderObj.length - 2].count}${varUnit}以上，${(price.ladderObj)[price.ladderObj.length - 1].overUnit}元/${varUnit}`;
                    break;    
                case 7:
                    formatRes += `${price.countTime || '0'}元/小时,`;
                    if (price.countSettle) {
                        formatRes += `${price.countSettle || '0'}元/件,`;
                    } if (price.countDai) {
                        formatRes += `${price.countDai || '0'}元/袋,`;
                    } if (price.countChe) {
                        formatRes += `${price.countChe || '0'}元/车,`;
                    } if (price.countDun) {
                        formatRes += `${price.countDun || '0'}元/吨`;
                    }
                    break;
                case 8:
                    formatRes += `${price.countFixed}元/天`
                    break;  
            }            
            return formatRes;
    },
    pieceFilter:function(val){
        let formatRes = '';
        let valuationType = val.valuationType;
        let varUnit = '';
//        console.log( 'valuationType',valuationType );
        switch( valuationType ){                
            case '1':
                console.log('111',val);
                if( val.countDun !='' ){
                    formatRes = `${val.countDun || '0'}元/吨`;
                }
                if( val.countSettle !='' ){
                    formatRes = `${val.countSettle || '0'}元/件`;
                }
                if( val.countDai !='' ){
                    formatRes = `${val.countDai || '0'}元/袋`;
                }
                if( val.countChe !='' ){
                    formatRes = `${val.countChe || '0'}元/车`;
                }
                if( val.countTime != ''){
                    formatRes = `${val.countTime || '0'}元/小时`;
                }
                break;
                case '2':
                console.log( '222',val.unit );
                if( val.unit == '4' ){
                    formatRes = `${val.countDun || '0'}元/吨`;
                }else if( val.unit == '1' ){
                    formatRes = `${val.countSettle || '0'}元/件`;
                }else if( val.unit == '2' ){
                    formatRes = `${val.countDai || '0'}元/袋`;
                }else if( val.unit == '3' ){
                    formatRes = `${val.countChe || '0'}元/车`;
                }else{
                    console.log( '这里' );
                    if( price.countDun !='' ){
                        formatRes = `${price.countDun || '0'}元/吨`;
                    }
                    if( price.countSettle !='' ){
                        formatRes = `${price.countSettle || '0'}元/件`;
                    }
                    if( price.countDai !='' ){
                        formatRes = `${price.countDai || '0'}元/袋`;
                    }
                    if( price.countChe !='' ){
                        formatRes = `${price.countChe || '0'}元/车`;
                    }
                }
                break;
                case '3':                
                switch(val.unit){
                        case 4:
                            varUnit = `吨`;
                            break;
                        case 1:
                            varUnit = `件`;
                            break;
                        case 2:
                            varUnit = `袋`;
                            break;
                        case 3:
                            varUnit = `车`;
                            break;
                    }
                    formatRes += `${(val.ladderObj)[0].count}${varUnit}以下（含），${(val.ladderObj)[0].unit}元/${varUnit}`;
                    for (let i in val.ladderObj) {
                        if (i > 0 && i != (val.ladderObj.length - 1)) {
                            formatRes += `；${(Number((val.ladderObj)[i - 1].count)) + 1}至${(val.ladderObj)[i].count}${varUnit}（含），${(val.ladderObj)[i].unit}元/${varUnit}`
                        }
                    }  
                    formatRes += `；${(val.ladderObj)[val.ladderObj.length - 2].count}${varUnit}以上，${(val.ladderObj)[val.ladderObj.length - 1].overUnit}元/${varUnit}`;
                break;
                case 4:
                    if (val.countSettle) {
                        formatRes += `${val.countSettle || '0'}元/件,`
                    } if (val.countDai) {
                        formatRes += `${val.countDai || '0'}元/袋,`
                    } if (val.countChe) {
                        formatRes += `${val.countChe || '0'}元/车,`
                    } if (val.countDun) {
                        formatRes += `${val.countDun || '0'}元/吨`
                    }
                break;
                case 5:
                    formatRes += `${val.countTime || '0'}元/小时,`
                    if (val.unit == 1) {
                        formatRes += `${val.countSettle || '0'}元/件`
                    } else if (val.unit == 2) {
                        formatRes += `${val.countDai || '0'}元/袋`
                    } else if (val.unit == 3) {
                        formatRes += `${val.countChe || '0'}元/车`
                    } else {
                        formatRes += `${val.countDun || '0'}元/吨`
                    }
                break;
                case 6:
                    formatRes += `${val.countTime || '0'}元/小时,`;
                    switch(val.unit){
                        case 4:
                            varUnit = `吨`;
                            break;
                        case 1:
                            varUnit = `件`;
                            break;
                        case 2:
                            varUnit = `袋`;
                            break;
                        case 3:
                            varUnit = `车`;
                            break;
                    }
                    formatRes += `${(val.ladderObj)[0].count}${varUnit}以下（含），${(val.ladderObj)[0].unit}元/${varUnit}`;
                    for (let i in val.ladderObj) {
                        if (i > 0 && i != (val.ladderObj.length - 1)) {
                            formatRes += `；${(Number((val.ladderObj)[i - 1].count)) + 1}至${(val.ladderObj)[i].count}${varUnit}（含），${(val.ladderObj)[i].unit}元/${varUnit}`

                        }
                    }
                    formatRes += `；${(val.ladderObj)[val.ladderObj.length - 2].count}${varUnit}以上，${(val.ladderObj)[val.ladderObj.length - 1].overUnit}元/${varUnit}`;
                break;
                case 7:
                    formatRes += `${val.countTime || '0'}元/小时,`;
                    if (val.countSettle) {
                        formatRes += `${val.countSettle || '0'}元/件,`;
                    } if (val.countDai) {
                        formatRes += `${val.countDai || '0'}元/袋,`;
                    } if (val.countChe) {
                        formatRes += `${val.countChe || '0'}元/车,`;
                    } if (val.countDun) {
                        formatRes += `${val.countDun || '0'}元/吨`;
                    }
                break;
                case 8:
                formatRes += `${val.countFixed}元/天`
                break;
                
        }
        return formatRes;
    },
};
Vue.prototype.GlobalPriceFilter = globalPriceFilter;