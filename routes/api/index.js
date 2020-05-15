const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/search", bookRoutes)