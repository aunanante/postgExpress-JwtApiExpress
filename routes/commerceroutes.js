const { CommerceController } = require("../controllers/CommerceController")
const { commerceValidator } = require("../validators/commerceValidator")

const router = require("express").Router()


router.post("/", commerceValidator, CommerceController.create)
router.get("/", CommerceController.getAllCommerces)
router.get("/search", CommerceController.searchCommerce)
// router.get("/by_team/:team_id", CommerceController.getProjectsByTeam)
router.put("/:id", CommerceController.update)
router.delete("/:id", CommerceController.delete)
router.get("/:id", CommerceController.getCommerceById)

module.exports = router