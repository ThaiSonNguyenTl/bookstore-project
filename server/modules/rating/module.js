const mongoose = require('mongoose')
const ratingSchema = require('./schema.js')

const MODEL_NAME = 'ratings' 
const COLLECTION_NAME = 'ratings'

const ratingModel = mongoose.model(MODEL_NAME, ratingSchema, COLLECTION_NAME) 

module.exports = ratingModel