const router = require("express").Router();
const apiRoutes = require("../controllers");

router.route("/")
.get(booksController.findAll)
.post(booksController.create)

router.route("/:id")
.get(booksController.findByID)
.put(booksController.update)
.delete(booksController.remove)

module.exports = router;