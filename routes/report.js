var express = require('express');
var router = express.Router();
var database = require('../firebase/firebase');

router.get('/', async (req, res) => {
    console.log(req.query.data)

    return res.json({ message: "report page" });
});

router.get('/old', async (req, res) => {
    console.log('받았음!!')
    console.log(req.query.message)
    try {
        database.collection('OldFacilityReport').doc('report').update({ column: 'test message2' })
            .then(res => {
                console.log(res);
            })
        // const docRef = db.collection('OldFacilityReport').doc('report');

        // await docRef.set({
        //     index: 1,
        //     message: 'test1'
        // });
        return res.json({ message: "성공" });
    } catch (err) {

        return res.json({ message: "db update error" });
    }

});

router.get('/new', async (req, res) => {

    try {
        database.collection('NewFacility').add({ column: 'test message23' })
            .then(res => {
                console.log(res);
            })
        return res.json({ message: "성공" });
    } catch (err) {

        return res.json({ message: "db update error" });
    }

});

module.exports = router;