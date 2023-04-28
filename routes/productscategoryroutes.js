const { ProductCategoryController } = require("../controllers/ProductCategoryController")
const { productCategoryValidator } = require("../validators/productCategoryValidator")

const router = require("express").Router()


router.post("/", productCategoryValidator, ProductCategoryController.create)
router.get("/", ProductCategoryController.getAllProductCategorys)
router.get("/search", ProductCategoryController.searchProductCategory)
// router.get("/by_team/:team_id", ProductCategoryController.getProjectsByTeam)
router.put("/:id", ProductCategoryController.update)
router.delete("/:id", ProductCategoryController.delete)
router.get("/:id", ProductCategoryController.getProductCategoryById)

module.exports = router