const Postulation=require('../models/postulation')
const postulationService=require('../services/postulation')


module.exports.create = async (req, res) => {
    if (Object.entries(req.body).length==0) {

        return res.status(400).send({
            message: 'los datos son obligatorios'
        });
    }
    const Postulation ={
        titlePostulation:req.body.titlePostulation,
        description:req.body.description,
        cargo:req.body.cargo,
        salary:req.body.salary,
        languaje:req.body.languaje,
        status:req.body.status
    };
    Postulation.save()
    try {
        await postulationService.create(Postulation)
        res.send(Postulation)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
    module.exports.update = async (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'
        })
    }
    const postulation = {
        titlePostulation:req.body.titlePostulation,
        description:req.body.description,
        cargo:req.body.cargo,
        salary:req.body.salary,
        languaje:req.body.languaje,
        status:req.body.status
    }
    try {
        await postulationService.update(postulation)
        res.send(postulation)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.getAll=async (req, res) => {
    try {
        await postulationService.getAll(postulation)
        res.send(postulation)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports.getOne = async (req, res) => {
    try {
        await postulationService.getOne(postulation)
        res.send(postulation)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
}