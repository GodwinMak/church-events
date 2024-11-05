const route = require("express").Router();

const {create, getAll, getById, update} = require("../controller/churchmass");


route.post("/", create);
route.get("/", getAll);
route.get("/:id", getById);
route.put("/", update)


module.exports = route;