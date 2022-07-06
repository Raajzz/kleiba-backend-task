const express = require("express")
const router = express.Router();

const {
  searchToysByName,
  getToyById,
  addToy,
  editToy,
  deleteToy
} = require("../controllers/toyControllers")

router.route("/search/:name").get(searchToysByName)
router.route("/:toyId").get(getToyById).patch(editToy).delete(deleteToy)
router.route("/add").post(addToy)

module.exports = router;