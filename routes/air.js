var express = require('express');
var router = express.Router();
const request = require('request');

var parser = require('fast-xml-parser');
var he = require('he')

const airURL = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=%EB%8C%80%EA%B5%AC&pageNo=1&numOfRows=1&returnType=xml&serviceKey=g%2Fx5Ht7jOkI%2BkOenaaviQsW6YUd6EAiOuW1Z7310HY8h8qdIAx5HsbG7fhrja8uDypxUhz1ifQJrXd8qdUKWOg%3D%3D&ver=1.3'

var url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty';
var queryParams = '?' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('대구'); /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('g%2Fx5Ht7jOkI%2BkOenaaviQsW6YUd6EAiOuW1Z7310HY8h8qdIAx5HsbG7fhrja8uDypxUhz1ifQJrXd8qdUKWOg%3D%3D'); /* */
queryParams += '&' + encodeURIComponent('ver') + '=' + encodeURIComponent('1.3'); /* */

var options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
};

router.get('/', async function (req, res) {
    
    var state
    request({
        url: airURL,
        method: 'GET'
    }, function (err, response, body) {
        
        var tObj = parser.getTraversalObj(body,options);
        var jsonObj = parser.convertToJson(tObj,options);
        console.log(jsonObj.response.body.items.item.pm10Value)
        state = {
            '미세먼지':jsonObj.response.body.items.item.pm10Value,
            '초미세먼지':jsonObj.response.body.items.item.pm25Value,
            '관측날짜':jsonObj.response.body.items.item.dataTime
        }
        console.log(state)
        res.send(state)
    });
    

});


module.exports = router;
