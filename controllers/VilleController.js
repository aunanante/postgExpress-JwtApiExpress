const { Op } = require("sequelize");
const { objectCleaner } = require("../helpers/objectHelper");
const { Ville } = require("../models/Ville");

exports.VilleController = {
  async create(req, res) {
    const ville = await Ville.create({
      villeName: req.body.villeName, 
    });

    res.send(ville);
  },

  async update(req, res) {
    const body = objectCleaner(req.body);

    const ville = await Ville.update(body, {
      where: {
        id: req.params.id,
      },
    });

    res.send({ message: "Ville info updated successfully" });
  },

  async delete(req, res) {
    const ville = await Ville.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.send({ message: "Ville deleted successfully" });
  },

  async getVilleById(req, res) {
    const ville = await Ville.findByPk(req.params.id);
    res.send(ville);
  },

  /* async getVillesByTeam(req, res) {
    const villes = await Ville.findAll({
      where: {
        teamId: req.params.team_id,
      },
    });
    res.send(villes);
  }, */

  async getAllVilles(req, res)
  {
        res.send(await Ville.findAll())
  },

  async searchVille(req, res) {
    // const villes = await Ville.findAll({
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

    const villes = await Ville.findAll({
      where: {
        name: {
            [Op.like]: `%${req.query.name}%`,
          },
      },
    });
    
    res.send(villes);
  },
};
