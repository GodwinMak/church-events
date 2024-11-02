const {create, login} = require('../controller/user')

const route = require("express").Router();


route.post("/", create);
route.post("/login", login);


module.exports = route;