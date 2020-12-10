const creOffersModel = require('../models/createOffers');
/**
 * Metodo para almacenal un nuevo usuario 
 * @param {*} req => todo lo que enviamos desde el dody (formulario)
 * @param {*} res => la respuesta que se devolvera 
 */
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message:'Los datos son obligatorios.'
        })}
    const createOffers = new creOffersModel({
        title:req.body.title,
        description:req.body.description,
        cargo:req.body.cargo,
        salary:req.body.salary,
        ubicacion:req.body.ubicacion,
        termTime:req.body.termTime })
    createOffers.save().then((datingoffer) => {
        res.send(datingoffer)
    }).catch((error) => {
        res.status(500).send({
            message: error.message})})}
/**
 * Metodo para actualizar el usuario 
 * @param {*} req =>todo lo que enviamos desde el dody (formulario)
 * @param {*} res =>la respuesta que se devolvera
 */
exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message:'Los datos son obligatorios.'
        })}
        const createOffers = {
        title:req.body.title,
        description:req.body.description,
        cargo:req.body.cargo,
        salary:req.body.salary,
        ubicacion:req.body.ubicacion,
        termTime:req.body.termTime }
    creOffersModel.findByIdAndUpdate(req.params.id, createOffers)
        .then(
            (ofertaUpdate) => {
                res.send(ofertaUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })})}
 /*** Metodo para listar ofertas  */
exports.getAll = (req, res) => {
    creOffersModel.find()
        .then((oferta) => {
            res.send(oferta)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })})}
 /*** Metodo para listar una oferta */
exports.getOne = (req, res) => {
    // console.log('aqui ta')
    creOffersModel.findById(req.params.id)
        .then((oferta) => {
            res.send(oferta)})
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })})}
/** Metodo para eliminar todas las ofertas */
exports.deleteOne=(req,res)=>{
    creOffersModel.findByIdAndRemove(req.params.id)
    .then(( ofertadelete) => {
        res.send( ofertadelete)})
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })})}



