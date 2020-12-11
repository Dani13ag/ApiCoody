const Postulation = require('../models/postulation')
const repositoryPostulation = require('../models/postulation')

module.exports.update = async ({ postulationId, titlePostulation, description, cargo, salary, languaje, status}) => {
    const Postulation ={
        titlePostulation:titlePostulation,
        description:description,
        cargo:cargo,
        salary:salary,
        languaje:languaje,
        status:status
    };
    await repositoryPostulation.findByIdAndUpdate(postulationId, Postulation)
}
module.exports.create = async ({ titlePostulation, description, cargo, salary, languaje, status }) => {
    const Postulation ={
        titlePostulation:titlePostulation,
        description:description,
        cargo:cargo,
        salary:salary,
        languaje:languaje,
        status:status
    };
    await repositoryPostulation.create(Postulation)
}
module.exports.getAll = async ({ }) => {
    await repositoryPostulation.find(Postulation)
}

module.exports.getOne=async({postulationId})=>{
    await repositoryPostulation.findById(postulationId, Postulation)
}