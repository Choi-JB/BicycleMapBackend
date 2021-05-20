var express = require('express');
var router = express.Router();

const convert = require('xml-js');
const request = require('request');

const RentURL = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=%EB%8C%80%EA%B5%AC&pageNo=1&numOfRows=10&returnType=xml&serviceKey=g%2Fx5Ht7jOkI%2BkOenaaviQsW6YUd6EAiOuW1Z7310HY8h8qdIAx5HsbG7fhrja8uDypxUhz1ifQJrXd8qdUKWOg%3D%3D&ver=1.0'

router.get('/', async function(req, res) {
    console.log(req.query.data)
    var url = `${RentURL}`
    let data

    request.get(url, (err, res, body)=>{
            if(err){
                console.log(`err=>${err}`)
            }else{
                if(res.statusCode == 200){
                    var result = body
                    console.log(`body data => ${result}`)
                    var xmlToJson = convert.xml2json(result,{compact:true, spaces:4});
                    
                    console.log(xmlToJson)
                    data = xmlToJson
                    //res.send(`xml to json => ${xmlToJson}`);
                    
                }else{
                    console.log(res.statusCode)
                    console.log(res.statusMessage)
                }
                
            }
        }    
    )
   
   res.render('index',{title:'air test',body:data})
});

module.exports = router;