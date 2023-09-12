const express = require('express');
const router = express.Router();
const person = require('../model/person')

//Geting all users
router.get('/', function (req, res) {
    res.send('hello world')
})
// Getting one
router.get('/:id', function (req, res) {
    res.send(req.params.id)
})
//Creating one
router.post('/', function (req, res) {
    res.send('hello world')

})
//updating one
router.patch('/', function (req, res) {
    res.send('hello world')

})
//Deleting one
router.delete('/', function (req, res) {
    res.send('hello world')

})

module.exports = router