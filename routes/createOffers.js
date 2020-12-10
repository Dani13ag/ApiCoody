module.exports = (app) =>{
    const createOffers =require('../controllers/createOffers')
    app.post('/createOffers/create',createOffers.create)
    app.put('/createOffers/update/:id',createOffers.update)
    app.get('/createOffers/getAll', createOffers.getAll)
    app.get('/createOffers/getOne/:id', createOffers.getOne)
    app.delete('/createOffers/deleteOne/:id',createOffers.deleteOne)
}