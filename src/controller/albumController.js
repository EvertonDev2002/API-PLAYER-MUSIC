const knex = require("../database");
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const results = await knex("tb_album")
      .select("id_album", "title_album", "albumcover")
      .limit(5)
      .offset((page - 1) * 5);
    const [count] = await knex("tb_album").count();
    res.header("X-Total-Count", count["count"]);
    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const { title_album, albumcover } = req.body;

      await knex("tb_album").insert({ title_album, albumcover });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async search(req, res, next) {
    try {
      const { title_album } = req.params;
      const value = title_album.toLowerCase();

      const results = await knex("tb_album").whereRaw(
        `LOWER(title_album) LIKE ?`,
        [`%${value}%`]
      );
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id_album } = req.params;

      const { title_album, albumcover } = req.body;

      if (title_album) {
        await knex("tb_album").update({ title_album }).where({ id_album });
      } else if (albumcover) {
        await knex("tb_album").update({ albumcover }).where({ id_album });
      }

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async updateAll(req, res, next) {
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
