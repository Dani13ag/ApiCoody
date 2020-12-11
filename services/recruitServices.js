const recruit = require('../models/recruit')
const repositoryRecruit = require('../models/recruit')
module.exports.update = async ({ recruitid, notification, statusapplicant, processapplicant}) => {
    const recruit = {
        notification: notification,
        statusapplicant: statusapplicant,
        processapplicant: processapplicant,
    }
    await repositoryRecruit.findByIdAndUpdate(recruitid, recruit)
}
module.exports.create = async ({ notification, statusapplicant, processapplicant }) => {
    const recruit = {
        notification: notification,
        statusapplicant: statusapplicant,
        processapplicant: processapplicant,
    }
    await repositoryRecruit.create(recruit)
}