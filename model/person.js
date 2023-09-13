const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    }
},
    { timestamps: true }

)
module.exports = mongoose.model('person', personSchema)