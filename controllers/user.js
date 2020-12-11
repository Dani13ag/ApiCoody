const UserModel = require('../models/user');
const service = require('../utilsSegurity/index');
const userServices = require('../services/userService');
const User = require('../models/user')

module.exports.create = async (req, res) => {
    if (Object.entries(req.body).length == 0) {

        return res.status(400).send({
            message: 'los datos son obligatorios'
        })
    }
    const User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        role: req.body.role,
        tipo: req.body.tipo
    }
    User.save()
    try {
        await userServices.create(User)
        res.send(dataUser)
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
        });
    }
    const User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        tipo: req.body.tipo
    }
    try {
        await userServices.update(User)
        res.send(userUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.getAll = async (req, res) => {
    UserModel.find()
    try {
        res.status(200).send({
            message: await userServices.getAll(user)
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.getOne = async (req, res) => {
    try {
        await userServices.getOne(User)
        res.send(User)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.deleteOne = async (req, res) => {
    try {
        await userServices.deleteOne(User)
        res.send(User)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.login = (req, res) => {
    UserModel.findOne({ email: req.body.email }, (error, dataUser) => {
        if (dataUser != null) {
            if (dataUser.password == req.body.password) {
                res.send({ token: service.createToken(dataUser) });
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