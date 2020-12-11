const repositoryExam = require('../models/exam')
module.exports.update = async ({ examid, tituloExamen, descripcionExamen, lenguajeExamen, linkExamen, salario, company }) => {
    const exam = {
        tituloExamen: tituloExamen,
        descripcionExamen: descripcionExamen,
        lenguajeExamen: lenguajeExamen,
        linkExamen: linkExamen,
        cargo: cargo,
        salario: salario,
        company: company
    }
    await repositoryExam.findByIdAndUpdate(examid, exam)
}
module.exports.create = async ({ tituloExamen, descripcionExamen, lenguajeExamen, linkExamen, salario, company }) => {
    const exam = {
        tituloExamen: tituloExamen,
        descripcionExamen: descripcionExamen,
        lenguajeExamen: lenguajeExamen,
        linkExamen: linkExamen,
        cargo: cargo,
        salario: salario,
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


