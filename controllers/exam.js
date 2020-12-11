const ExamModel = require('../models/exam')
const examServices = require('../services/examService')
const exam = require('../models/exam')
module.exports.create = async (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        } )
    }
    const ExamModel = {
        examTittle: req.body.tituloExamen,
        examDescription: req.body.descripcionExamen,
        examLanguage: req.body.lenguajeExamen,
        examLink: req.body.linkExamen,
        position: req.body.cargo,
        salary: req.body.salario,
        company: req.body.company
    }
    try {
        await examServices.update(ExamModel)
        res.send(dataExam)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.update = async (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const exam = {
        examTittle: req.body.tituloExamen,
        examDescription: req.body.descripcionExamen,
        examLanguage: req.body.lenguajeExamen,
        examLink: req.body.linkExamen,
        position: req.body.cargo,
        salary: req.body.salario,
        company: req.body.company
    }
    try {
        await examServices.update(exam)
        res.send(examUpdate)

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.getAll = async (req, res) => {
    try {
        await examServices.getAll(exam)
        res.send(exams)
    } catch (error) {
        res.status(500).send({
            message: error.nessage
        })
    }
}
module.exports.getOne = async (req, res) => {
    ExamModel.findById(req.params.id)
    try {
        await examServices.getOne(exam)
        res.send(exam)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.deleteOne = async (req, res) => {
    try {
        await examServices.deleteOne(exam)
        res.send(exam)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}