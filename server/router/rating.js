const express = require('express')
const ratingHandler = require('../modules/rating')

const ratingRouter = new express.Router()

ratingRouter.get('/', ratingHandler.findMany)

ratingRouter.post('/', ratingHandler.create)

module.exports = ratingRouter