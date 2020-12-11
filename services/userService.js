const repositoryUser = require('../models/user')

module.exports.getAll = async (User) => {
    await repositoryUser.find(User)
}