const convert = require('xml-js');
const request = require('request');

const 호선명 = '1'
const 역코드 = '117'
var url = 'http://www.dtro.or.kr/open_content_new/ko/OpenApi/bikelist.php?LINE_NUM=1&STD_CODE=117'

const rentBicycle = (callback) => {
    var url = 'http://www.dtro.or.kr/open_content_new/ko/OpenApi/bikelist.php?LINE_NUM=1&STD_CODE=117'

    console.log('rent Test')
    request(
        {
            url: url,
            method: 'GET'
        },function(err, res, body){
            var result = body
            console.log(`body data=>${result}`)
            var xmlToJson = convert.xml2json(result,{compact:true, spaces:4});
            console.log(xmlToJson)
            //res.send(`xml to json => ${xmlToJson}`);

            callback(undefined,{
                data: xmlToJson
            })
        }

    )
}

module.exports = rentBicycle