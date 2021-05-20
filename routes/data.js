var express = require('express');
var router = express.Router();

var fs = require('fs').promises;
var parse = require('csv-parse/lib/sync');

const csv = require('csvtojson')

router.get('/', async(req, res) => {
    //console.log(req.query.data)
    const jsonData = {};

    // const airpumpFile = await fs.readFile(__dirname+'/data/airpump.csv');
    // const parkFile = await fs.readFile(__dirname+'/data/park.csv');
    // const repairFile = await fs.readFile(__dirname+'/data/repair.csv');
    // const rentalFile = await fs.readFile(__dirname+'/data/rental.csv');

    jsonData.airpump = await csv().fromFile(__dirname+'/data/airpump.csv');
    jsonData.park = await csv().fromFile(__dirname+'/data/park.csv');
    jsonData.repair = await csv().fromFile(__dirname+'/data/repair.csv');
    jsonData.rental = await csv().fromFile(__dirname+'/data/rental.csv');

    // jsonData.airpump = parse(airpumpFile, {columns: true});
    // jsonData.park = parse(parkFile, {columns: true});
    // jsonData.repair = parse(repairFile, {columns: true});
    // jsonData.rental = parse(rentalFile, {columns: true});

    res.send(jsonData)
    return res.json(jsonData);
});  

// router.get('/airpump', async(req, res) => {
//     console.log(req.query.data)

//     const fileContent = await fs.readFile(__dirname+'/data/airpump.csv');
//     const records = parse(fileContent, {columns: true});

//     res.send(records)
// }); 

// router.get('/park', async(req, res) => {
//     console.log(req.query.data)

//     const fileContent = await fs.readFile(__dirname+'/data/park.csv');
//     const records = parse(fileContent, {columns: true});

//     res.send(records)
// }); 

// router.get('/rental', async(req, res) => {
//     console.log(req.query.data)

//     const fileContent = await fs.readFile(__dirname+'/data/rental.csv');
//     const records = parse(fileContent, {columns: true});

//     res.send(records)
// });  


// router.get('/repair', async(req, res) => {
//     console.log(req.query.data)

//     //const fileContent = await fs.readFile(__dirname+'/data/repair.csv');
//     //const records = parse(fileContent, {columns: true});

//     csv().fromFile(__dirname+'/data/repair.csv')
//     .then((jsonObj)=>{
//         res.send(jsonObj)
//         return res.json(jsonObj);
//     })

//     //res.send(records)
//     //return res.json(records);
// }); 

module.exports = router;