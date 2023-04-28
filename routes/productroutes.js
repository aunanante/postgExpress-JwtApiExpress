const { ProductController } = require("../controllers/ProductController")
const { productValidator } = require("../validators/productValidator")

const router = require("express").Router()


router.post("/", productValidator, ProductController.create)
router.get("/", ProductController.getAllProducts)
router.get("/search", ProductController.searchProduct)
// router.get("/by_team/:team_id", ProductController.getProjectsByTeam)
router.put("/:id", ProductController.update)
router.delete("/:id", ProductController.delete)
router.get("/:id", ProductController.getProductById)

module.exports = router