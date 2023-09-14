const express = require('express');
const router = express.Router();
const User = require('../model/person');

const mongoose = require('mongoose');

//Geting all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 })
        res.status(200).json(users)
    } catch (error) {
        res.json(400).json({ error: error.message })

    }

})
// Getting one
router.get('/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({ error: 'No such user' })
    }

    res.status(200).json(user)


})
//Creating one
router.post('/', async (req, res) => {
    const { name } = req.body

    //add doc to db
    try {
        const user = await User.create({ name })
        res.status(200).json(user)
    } catch (error) {
        res.json(400).json({ error: error.message })
    }

})
//updating one
router.patch('/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }
    //add delete to db
    try {
        const user = await User.findOneAndUpdate({ _id: id }, {
            ...req.body
        })

        if (!user) {
            return res.status(404).json({ error: 'No such user' })
        }

        res.status(200).json(user)
    } catch (error) {
        res.json(400).json({ error: error.message })
    }

})
//Deleting one
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user id' })
    }
    try {
        const user = await User.findOneAndDelete({ _id: id })

        if (!user) {
            return res.status(404).json({ error: 'No such user' })
        }

        res.status(200).json(user)
    } catch (error) {
        res.json(400).json({ error: error.message })
    }
})
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router