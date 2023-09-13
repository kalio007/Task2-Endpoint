const express = require('express');
const router = express.Router();
const Person = require('../model/person');

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
router.get('/:id', getPerson, (req, res) => {
    res.send(res.person.name)
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
        res.status(400).json({ message: error.message }) //400 something is wrong with user input
    }

})
//updating one
router.patch('/:id', getPerson, async (req, res) => {
    if (req.body.name != null) {
        res.person.name = req.body.name
    }

    try {
        const updatedPerson = await res.person.save()
        res.json(updatedPerson)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }

})
//Deleting one
router.delete('/:id', getPerson, async (req, res) => {
    try {
        await res.person.remove()
        res.status(200).json({ message: "user deleted" })
    } catch (error) {
        res.status(500).json({ message: err.message })
    }
})

//creating a middleware to handle the request frist before attending to the request
async function getPerson(req, res, next) {
    try {
        person = await Person.findById(req.params.id)
        if (person === null) {
            return res.status(404).json({ message: "no such user" })
        }
    } catch (error) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = router