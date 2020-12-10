const RecruitModel = require('../models/recruit');
/**
 * Method for storing a new user 
 */
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const recruit = new RecruitModel({
        notification: req.body.notification,
        statusapplicant: req.body.statusapplicant,
        processapplicant: req.body.processapplicant
    })
    recruit.save().then((dataRecruit) => {
        res.send(dataRecruit)
    }).catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}
/**
 * Method for updating the user 
 */
exports.update = (req, res) => {
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
    RecruitModel.findByIdAndUpdate(req.params.id, recruit)
        .then(
            (recruitUpdate) => {
                res.send(recruitUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
