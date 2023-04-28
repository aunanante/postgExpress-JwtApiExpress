const { VilleController } = require("../controllers/VilleController")
const { villeValidator } = require("../validators/villeValidator")

const router = require("express").Router()


router.post("/", villeValidator, VilleController.create)
router.get("/", VilleController.getAllVilles)
router.get("/search", VilleController.searchVille)
// router.get("/by_team/:team_id", VilleController.getProjectsByTeam)
router.put("/:id", VilleController.update)
router.delete("/:id", VilleController.delete)
router.get("/:id", VilleController.getVilleById)

module.exports = router