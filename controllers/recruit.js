const RecruitModel = require('../models/recruit');
const recruitService = require('../services/recruitServices')
const recruit = require('../models/recruit')
module.exports.create = async (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const recruit = {
        notification: req.body.notification,
        statusapplicant: req.body.statusapplicant,
        processapplicant: req.body.processapplicant
    }
    try {
        await recruitService.create(recruit)
        res.send(dataRecruit)
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
    const recruit = {
        notification: req.body.notification,
        statusapplicant: req.body.statusapplicant,
        processapplicant: req.body.processapplicant
    }
    try {
        await recruitService.update(recruit)
        res.send(recruitUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
