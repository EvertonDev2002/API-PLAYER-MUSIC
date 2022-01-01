const knex = require("../database");
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const results = await knex("tb_genre")
      .select("id_genre", "genre")
      .limit(5)
      .offset((page - 1) * 5);
    const [count] = await knex("tb_genre").count();
    return res.json([results, count]);
  },
  async create(req, res, next) {
    try {
      const { genre } = req.body;

      await knex("tb_genre").insert({ genre });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async search(req, res, next) {
    try {
      const { genre } = req.params;
      const value = genre.toLowerCase();

      const results = await knex("tb_genre").whereRaw(`LOWER(genre) LIKE ?`, [
        `%${value}%`,
      ]);

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id_genre } = req.params;

      const { genre } = req.body;

      await knex("tb_genre").update({ genre }).where({ id_genre });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id_genre } = req.params;

      await knex("tb_genre").where({ id_genre }).del();
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
};
