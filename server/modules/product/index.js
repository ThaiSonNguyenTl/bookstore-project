const productModel = require('./module')

const handlers = {
    async findMany(req, res, next) {
        try {
            let { category, name, sortBy, sort } = req.query
            let conditions = {}
            if (category) {
                conditions.category = new RegExp(category, 'i')
            }
            if (name) {
                conditions.name = new RegExp(name, 'i')
            }
            let sortInfo = `${sort === 'Highest to Lowest' ? '-' : ''}${sortBy}`
            console.log(sortInfo)
            let items = await productModel.find(conditions).sort(sortInfo)
            res.json(items)
        } catch (err) {
            next(err)
        }
    },
    async findOne(req, res, next) {
        try {
            let id = req.params.id
            let item = await productModel.findById(id)
            console.log(item)
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async create(req, res, next) {
        try {
            let data = req.body // {title: '123',des: '123'}
            let item = await productModel.create(data) // {_id:'',title:'123',des:'123'}
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async update(req, res, next) {
        try {
            let data = req.body
            let id = req.body._id

            if (!id) {
                throw new Error(`Require 'id' to update`)
            }

            let item = await productModel.findByIdAndUpdate(
                id,
                data,
                { new: true }
            )

            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async delete(req, res, next) {
        try {
            let id = req.params.id
            let item = await productModel.findByIdAndDelete(id)
            res.json(item)
        } catch (err) {
            next(err)
        }
    },

}

module.exports = handlers