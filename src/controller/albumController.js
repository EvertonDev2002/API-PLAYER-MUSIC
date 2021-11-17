const knex = require("../database");
module.exports = {
  async index(req, res) {
    const results = await knex("tb_album").select(
      "id_album",
      "title_album",
      "albumcover"
    );
    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const { title_album, albumcover } = req.body;

      await knex("tb_song").insert({ title_album, albumcover });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async search(req, res, next) {
    try {
      const { title_album } = req.params;

      const results = await knex("tb_album").where({ title_album });
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id_album } = req.params;
      const { title_album, albumcover } = req.body;

      await knex("tb_album")
        .update({ albumcover, title_album })
        .where({ id_album });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id_album } = req.params;

      await knex("tb_album").where({ id_album }).del();
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
};