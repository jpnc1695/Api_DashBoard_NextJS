import express from 'express';
import router from './UsersRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Requisição fetia'})
    })

    app.use(
        express.json(),
        router
    )
}

export default routes