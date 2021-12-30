const knex = require("../database");
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const results = await knex("tb_artist")
      .select("id_artist", "artist")
      .limit(5)
      .offset((page - 1) * 5);
    const [count] = await knex("tb_artist").count();
    res.header("X-Total-Count", count["count"]);
    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const { artist } = req.body;

      await knex("tb_artist").insert({ artist });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async search(req, res, next) {
    try {
      const { artist } = req.params;
      const value = artist.toLowerCase();

      const results = await knex("tb_artist").whereRaw(`LOWER(artist) LIKE ?`, [
        `%${value}%`,
      ]);
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id_artist } = req.params;

      const { artist } = req.body;

      await knex("tb_artist").update({ artist }).where({ id_artist });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id_artist } = req.params;

      await knex("tb_artist").where({ id_artist }).del();
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
};
