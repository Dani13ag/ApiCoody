const creOffersModel=require('../models/createOffers');
exports.create=(req, res) => {
    if (Object.entries(req.body).length==0){
        return res.status(400).send({
            message:'Los datos son obligatorios.'
        })
    }
    const createOffers=new creOffersModel({
        title: req.body.title,
        description: req.body.description,
        cargo: req.body.cargo,
        salary: req.body.salary,
        ubicacion: req.body.ubicacion,
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
exports.update=(req, res)=>{
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const createOffers={
        title: req.body.title,
        description: req.body.description,
        cargo: req.body.cargo,
        salary: req.body.salary,
        ubicacion: req.body.ubicacion,
        termTime: req.body.termTime
    }
    creOffersModel.findByIdAndUpdate(req.params.id, createOffers)
        .then(
            (ofertaUpdate)=>{
                res.send(ofertaUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
exports.getAll=(req, res)=>{
    creOffersModel.find()
        .then((oferta)=>{
            res.send(oferta)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
exports.getOne=(req, res)=>{
    creOffersModel.findById(req.params.id)
        .then((oferta)=>{
            res.send(oferta)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
exports.deleteOne=(req, res)=>{
    creOffersModel.findByIdAndRemove(req.params.id)
        .then((ofertadelete) => {
            res.send(ofertadelete)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}