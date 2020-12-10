const PostulationModel = require('../models/postulation')

//Create

exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'
        });
    }
    const postulation = new PostulationModel({
        titlePostulation: req.body.titlePostulation,
        description: req.body.description,
        cargo: req.body.cargo,
        salary: req.body.salary,
        languaje: req.body.languaje,
        status: req.body.status
    });

    postulation.save()
        .then((dataPostulation) => { res.send(dataPostulation) })
        .catch((error) => {
            res.status(500) - send({
                message: error.message
            })
        });
}

//Update 

exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'
        })
    }

    const postulation = {
        titlePostulation: req.body.titlePostulation,
        description: req.body.description,
        cargo: req.body.cargo,
        salary: req.body.salary,
        languaje: req.body.languaje,
        status: req.body.status
    }

    PostulationModel.findByIdAndUpdate(req.params.id, postulation)
        .then(
            (postulationUpdate) => {
                res.send(postulationUpdate);
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                });
            }
        );
}

//Get All

exports.getAll = (req, res) => {
    PostulationModel.find()
        .then((postulation) => {
            res.send(postulation);
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            });
        });
}

//Get One

exports.getOne = (req, res) => {
    PostulationModel.findById(req.params.id)
        .then((postulation) => {
            res.send(postulation);
        })
        .catch((error) => {
            res.status(500).send({ message: error.message });
        });
}