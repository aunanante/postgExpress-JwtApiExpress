const { Op } = require("sequelize");
const { objectCleaner } = require("../helpers/objectHelper");
const { Commerce } = require("../models/Commerce");

exports.CommerceController = {
  async create(req, res) {
    const commerce = await Commerce.create({
      commerceName: req.body.commerceName, 
      proprietaireName: req.body.proprietaireName, 
      adresse: req.body.adresse, 
      telephone: req.body.telephone, 
      email: req.body.email, 
      transfert: req.body.transfert, 
      date_transfert: req.body.date_transfert, 
      type_transfert: req.body.type_transfert, 
      payed: req.body.payed, 
      date_peremption: req.body.date_peremption, 
      presentation: req.body.presentation, 
      ville_id: req.body.ville_id,
    });

    res.send(commerce);
  },

  async update(req, res) {
    const body = objectCleaner(req.body);

    const commerce = await Commerce.update(body, {
      where: {
        id: req.params.id,
      },
    });

    res.send({ message: "Commerce info updated successfully" });
  },

  async delete(req, res) {
    const commerce = await Commerce.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.send({ message: "Commerce deleted successfully" });
  },

  async getCommerceById(req, res) {
    const commerce = await Commerce.findByPk(req.params.id);
    res.send(commerce);
  },

 /*  async getCommercesByTeam(req, res) {
    const commerces = await Commerce.findAll({
      where: {
        teamId: req.params.team_id,
      },
    });
    res.send(commerces);
  }, */

  async getAllCommerces(req, res)
  {
        res.send(await Commerce.findAll())
  },

  async searchCommerce(req, res) {
    // const commerces = await Commerce.findAll({
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

    const commerces = await Commerce.findAll({
      where: {
        name: {
            [Op.like]: `%${req.query.name}%`,
          },
      },
    });
    
    res.send(commerces);
  },
};
