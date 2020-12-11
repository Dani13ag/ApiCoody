const repositoryExam = require('../models/exam')
module.exports.update = async ({ examid, examTittle, examDescription, examLanguage, examLink, position, salary, company }) => {
    const exam = {
        examTittle: examTittle,
        examDescription: examDescription,
        examLanguage: examLanguage,
        examLink: examLink,
        position: position,
        salary: salary,
        company: company
    }
    await repositoryExam.findByIdAndUpdate(examid, exam)
}
module.exports.create = async ({ examDescription, examLanguage, examLink, position, salary, company }) => {
    const exam = {
        examTittle: examTittle,
        examDescription: examDescription,
        examLanguage: examLanguage,
        examLink: examLink,
        position: position,
        salary: salary,
        company: company
    }
    await repositoryExam.create(exam)
}
module.exports.getAll = async ({ }) => {
    await repositoryExam.find(exam)
}
module.exports.getOne = async ({ examid }) => {
    await repositoryExam.findById(examid, exam)
}
module.exports.deleteOne = async ({ examid }) => {
    await repositoryExam.findOneAndRemove(examid, exam)
}


