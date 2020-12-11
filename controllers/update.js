/*const comanyServices = require('../services/CompanyServices')

exports.update = (req, res) => {
    //validacion de que todos los campos que se van a actualizar esten llenos 
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
        tipo: req.body.tipo
    }
    //findByIdAndUpdate= metodo de mongoose que permite buscar por id y actualizar
    try {
        await comanyServices.update(company)
        res.send(companyUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}*/ 