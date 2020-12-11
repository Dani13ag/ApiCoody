const creOffersModel=require('../models/createOffers');
const createoffersservices= require('../services/offersService');
module.exports.create=async (req, res) => {
    if (Object.entries(req.body).length==0){
        return res.status(400).send({
            message:'Los datos son obligatorios.'
        })
    }
    const createOffers=new creOffersModel({
        title: req.body.title,
        description: req.body.description,
        position: req.body.position,
        salary: req.body.salary,
        location: req.body.Location,
        termTime: req.body.termTime
    })
    createOffers.save().then((datingoffer) => {
        res.send(datingoffer)
    }).catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}
module.exports.update =async(req, res)=>{
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const createOffers={
        title: req.body.title,
        description: req.body.description,
        position: req.body.position,
        salary: req.body.salary,
        location: req.body.Location,
        termTime: req.body.termTime
    }
    creOffersModel.findByIdAndUpdate(req.params.id, createOffers)
        .then(
            (offersUpdate)=>{
                res.send(offersUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
module.exports.getAll=async(req, res)=>{
    creOffersModel.find()
        .then((offers)=>{
            res.send(offers)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
module.exports.getOne=async(req, res)=>{
    creOffersModel.findById(req.params.id)
        .then((offers)=>{
            res.send(offers)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
module.exports.deleteOne=async(req, res)=>{
    creOffersModel.findByIdAndRemove(req.params.id)
        .then((offersdelete) => {
            res.send(offersdelete)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}