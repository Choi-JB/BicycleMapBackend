// var express = require('express');
// var router = express.Router();

// const convert = require('xml-js');
// const request = require('request');

// const rentBicycle = require('./rentBicycle');

// const 호선 = '1'
// const 역코드 = '117'
// const RentURL = 'http://www.dtro.or.kr/open_content_new/ko/OpenApi/bikelist.php?LINE_NUM=1&STD_CODE=117'
// //const RentURL = `http://www.dtro.or.kr/open_content_new/ko/OpenApi/bikelist.php?LINE_NUM=${호선}&STD_CODE=${역코드}`

// var queryParams = encodeURIComponent('LINE_NUM') + '=' + 호선
//     queryParams += '&' + encodeURIComponent('STD_CODE') + '=' + 역코드


// router.get('/', async function(req, res) {
//     //console.log(req.query.data)
//     var url = encodeURIComponent(RentURL)
//     let data
//     console.log(RentURL)
//     request.post(url, (err, res, body)=>{
//             if(err){
//                 console.log(`err=>${err}`)
//             }else{
//                 if(res.statusCode == 200){
//                     var result = body
//                     console.log(`body data => ${result}`)
//                     var xmlToJson = convert.xml2json(result,{compact:true, spaces:4});
                    
//                     console.log(xmlToJson)
//                     data = xmlToJson
//                     //res.send(`xml to json => ${xmlToJson}`);
                    
//                 }else{
//                     console.log(res.statusCode)
//                     console.log(res.statusMessage)
//                 }
                
//             }
//         }    
//     )
   
//    res.render('index',{title:'rental test',body:data})
// });

// module.exports = router;