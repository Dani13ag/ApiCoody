const company = require('../models/company')
const repositoryCompany = require('../models/company')
module.exports.update = async ({ companyid, nameCompany, nitCompany, phoneCompany, email, password, role, tipo }) => {
    const company = {
        nameCompany: nameCompany,
        nitCompany: nitCompany,
        phoneCompany: phoneCompany,
        email: email,
        password: password,
        role: role,
        tipo: tipo
    }
    await repositoryCompany.findByIdAndUpdate(companyid, company)
}
module.exports.create = async ({ nameCompany, nitCompany, phoneCompany, email, password, role, tipo }) => {
    const company = {
        nameCompany: nameCompany,
        nitCompany: nitCompany,
        phoneCompany: phoneCompany,
        email: email,
        password: password,
        role: role,
        tipo: tipo
    }
    await repositoryCompany.create(company)
}
module.exports.getAll = async ({ }) => {
    await repositoryCompany.find(company)
}

module.exports.getOne=async({companyid})=>{
    await repositoryCompany.findById(companyid, company)
}

module.exports.deleteOne=async({companyid})=>{
    await repositoryCompany.findOneAndRemove(companyid, company)
}