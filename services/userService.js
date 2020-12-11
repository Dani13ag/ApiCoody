const repositoryUser = require('../models/user')
const User= require('../models/user')

module.exports.update = async ({ userid, firstName, lastName, email, password, phone, role, tipo }) => {
    const User = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        phone:phone,
        role:role,
        tipo:tipo
    }
    await repositoryCompany.findByIdAndUpdate(userid, User )
}

module.exports.getAll = async (User) => {
    await repositoryUser.find(User)
}

module.exports.create = async ({ firstName, lastName, email, password, phone, role, tipo}) => {
    const User = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        phone:phone,
        role:role,
        tipo:tipo
    }
    await repositoryCompany.create(User)
}

module.exports.getOne=async({userid})=>{
    await repositoryUser.findById(userid, User)
}

module.exports.deleteOne=async({userid})=>{
    await repositoryUser.findOneAndRemove(userid, User)
}