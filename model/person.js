const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    // id: {
    // },
    name: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
        // default: Date.now()
    }
})
module.exports = mongoose.model('person', personSchema)