const express = require('express');
const router = express.Router();
const Person = require('../model/person')

//Geting all users
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.json(people)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
// Getting one
router.get('/:id', function (req, res) {
    res.send(req.params.id)
})
//Creating one
router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name
    })
    try {
        const newPerson = await person.save()
        res.status(201).json(newPerson)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

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