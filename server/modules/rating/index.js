
const ratingModel = require('./module')

const handlers = {
    async findMany(req, res, next) {
        try {
            let items = await ratingModel.find({})
            res.json(items)
        } catch (err) {
            next(err);
        }
    },
    async create(req, res, next) {
        try {
            let data = req.body 
            let dbRating = await ratingModel.create(data)
            res.json(dbRating)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = handlers