
const express =require('express')
const routes=express.Router();
const menu = require('./controllers/menu')

routes.get('/menu',menu.connectMenu)

module.exports=routes;