const { Op } = require("sequelize");
const { objectCleaner } = require("../helpers/objectHelper");
const { ProductCategory } = require("../models/ProductCategory");

exports.ProductCategoryController = {
  async create(req, res) {
    const productCategory = await ProductCategory.create({
      categoryName: req.body.categoryName, 
      commerce_id: req.body.commerce_id
    });

    res.send(productCategory);
  },

  async update(req, res) {
    const body = objectCleaner(req.body);

    const productCategory = await ProductCategory.update(body, {
      where: {
        id: req.params.id,
      },
    });

    res.send({ message: "ProductCategory info updated successfully" });
  },

  async delete(req, res) {
    const productCategory = await ProductCategory.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.send({ message: "ProductCategory deleted successfully" });
  },

  async getProductCategoryById(req, res) {
    const productCategory = await ProductCategory.findByPk(req.params.id);
    res.send(productCategory);
  },

  /* async getProductCategorysByTeam(req, res) {
    const productCategorys = await ProductCategory.findAll({
      where: {
        teamId: req.params.team_id,
      },
    });
    res.send(productCategorys);
  }, */

  async getAllProductCategorys(req, res)
  {
        res.send(await ProductCategory.findAll())
  },

  async searchProductCategory(req, res) {
    // const productCategorys = await ProductCategory.findAll({
    //   where: {
    //     [Op.and]: [
    //       {
    //         teamId: req.params.team_id,
    //         name: {
    //           [Op.like]: `%${req.query.search}%`,
    //         },
    //       },
    //     ],
    //   },
    // });

    const productCategorys = await ProductCategory.findAll({
      where: {
        name: {
            [Op.like]: `%${req.query.name}%`,
          },
      },
    });
    
    res.send(productCategorys);
  },
};
