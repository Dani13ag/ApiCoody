const service = require('../utilsSegurity/utils')
const companyServices = require('../services/CompanyServices')
const company = require('../models/company')

module.exports.create = async (req, res) => {
    if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'los datos son obligatorios'
        })
    }
    const company = {
        nameCompany: req.body.nameCompany,
        nitCompany: req.body.nitCompany,
        phoneCompany: req.body.phoneCompany,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        Type: req.body.Type
    }
    company.save()
    try {
        await companyServices.create(company)
        res.send(dataCompany)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.update = async (req, res) => {
    if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'los datos son obligatorios'
        })
    }
    const company = {
        nameCompany: req.body.nameCompany,
        nitCompany: req.body.nitCompany,
        phoneCompany: req.body.phoneCompany,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        Type: req.body.Type
    }
    try {
        await companyServices.update(company)
        res.send(companyUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.getAll = async (req, res) => {
    try {
        await companyServices.getAll(company)
        res.send(company)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.getOne = async (req, res) => {
    try {
        await companyServices.getOne(company)
        res.send(company)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.deleteOne = async (req, res) => {
    try {
        await companyServices.deleteOne(company)
        res.send(company)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.loginCompany = (req, res) => {
    CompanyModel.findOne({ email: req.body.email }, (error, dataCompany) => {
        if (dataCompany != null) {
            if (dataCompany.password == req.body.password) {
                res.send({ token: service.createToken(dataCompany) })
            } else {
                res.status(400).send({
                    message: 'Los datos no coinciden'
                })
            }
        } else {
            res.status(400).send({
                message: 'Los datos no coinciden'
            })
        }
    })
}