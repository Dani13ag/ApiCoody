module.exports = (app) => { //Exportar una funcion //recibimos el parametro app
    const postulation = require('../controllers/postulation')
    app.post('/postulation/create', postulation.create);
    app.put('/postulation/update/:id', postulation.update);
    app.get('/postulation/getAll', postulation.getAll);
    app.get('/postulation/getOne/:id', postulation.getOne);
}