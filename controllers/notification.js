const notification = require('../models/notification')
const notificationServices = require('../services/notificationServices')
module.exports.create = async (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'
        })
    }
    const notification = {
        statusNotification: req.body.statusNotification,
        messageNotification: req.body.messageNotification
    }
    try {
        await notificationServices.create(notification)
        res.send(datanotification)
    } catch (error) {
        res.status(500) - send({
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
    const notification = {
        statusNotification: req.body.statusNotification,
        messageNotification: req.body.messageNotification
    }
    try {
        await notificationServices.update(notification)
        res.send(notificationUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.deleteOne = async (req, res) => {
    try {
        await notificationServices.deleteOne(notification)
        res.send(deletenotificacion)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}