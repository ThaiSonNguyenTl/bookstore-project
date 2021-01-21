const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerRating = new Schema({
 
    comment: {
        type: String
    },
    productOrdered: {
        type: Array,
        required: true
    }
})

module.exports = customerRating