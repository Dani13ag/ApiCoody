const createOffers = require('../models/createOffers')
const repositoryOffers = require('../models/createOffers')
module.exports.update = async ({createOffersid, title, description, position, salary, location, termTime}) => {
    const createOffers = {
        title: req.body.title,
        description: req.body.description,
        position: req.body.position,
        salary: req.body.salary,
        location: req.body.Location,
        termTime: req.body.termTime
    }
    await repositorycreateOffers.findByIdAndUpdate(createOffersid, createOffers)
}
module.exports.create = async ({title, description, position, salary, location, termTime}) => {
    const createOffers = {
        title: req.body.title,
        description: req.body.description,
        position: req.body.position,
        salary: req.body.salary,
        location: req.body.Location,
        termTime: req.body.termTime
    }
    await repositoryOffers.create(createOffers)
}
module.exports.getAll = async ({ }) => {
    await repositoryOffers.find(createOffers)
}

module.exports.getOne=async({createOffersid})=>{
    await repositoryOffers.findById(createOffersid, createOffers)
}

module.exports.deleteOne=async({createOffersid})=>{
    await repositoryOffers.findOneAndRemove(createOffersid, createOffers)
}