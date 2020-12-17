const repositoryNotification = require('../models/notification')
module.exports.update = async ({ notificationid, statusNotification, messageNotification}) => {
    const notification = {
        statusNotification: statusNotification,
        messageNotification: messageNotification
    }
    await repositoryNotification.findByIdAndUpdate(notificationid, notification)
}
module.exports.create = async ({statusNotification, messageNotification}) => {
    const notification = {
        statusNotification: statusNotification,
        messageNotification: messageNotification
    }
    await repositoryNotification.create(notification)
}
module.exports.deleteOne=async({notificationid})=>{
    await repositoryNotification.findOneAndRemove(notificationid, notification)
}