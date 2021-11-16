const knex = require("../database");
module.exports = {
  async index(req, res) {
    const results = await knex("tb_song")
      .join("tb_album", "tb_album.id_album", "tb_song.fk_album")
      .join("tb_artist", "tb_artist.id_artist", "tb_song.fk_artist")
      .join("tb_genre", "tb_genre.id_genre", "tb_song.fk_genre")
      .select(
        "id_song",
        "fk_album",
        "fk_artist",
        "fk_genre",
        "title_album",
        "albumcover",
        "artist",
        "genre",
        "lyrics",
        "file",
        "title_song",
        "duration"
      );
    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const {
        title_album,
        albumcover,
        artist,
        genre,
        lyrics,
        file,
        title_song,
        duration,
      } = req.body;

      await knex("tb_album").insert({ title_album, albumcover });

      const [{ id_album }] = await knex("tb_album")
        .select("id_album")
        .orderBy("id_album", "desc")
        .limit(1);

      await knex("tb_artist").insert({ artist });

      const [{ id_artist }] = await knex("tb_artist")
        .select("id_artist")
        .orderBy("id_artist", "desc")
        .limit(1);

      await knex("tb_genre").insert({ genre });

      const [{ id_genre }] = await knex("tb_genre")
        .select("id_genre")
        .orderBy("id_genre", "desc")
        .limit(1);

      const fk_album = id_album;
      const fk_artist = id_artist;
      const fk_genre = id_genre;

      await knex("tb_song").insert({
        fk_album,
        fk_artist,
        fk_genre,
        lyrics,
        file,
        title_song,
        duration,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async search(req, res, next) {
    try {
      const { genre } = req.params;
      const { artist } = req.params;
      const { title_album } = req.params;

      if (genre) {
        const results = await knex("tb_song")
          .join("tb_genre", "tb_genre.id_genre", "tb_song.fk_genre")
          .where({ genre });
        return res.json(results);
      } else if (artist) {
        const results = await knex("tb_song")
          .join("tb_artist", "tb_artist.id_artist", "tb_song.fk_artist")
          .where({ artist });
        return res.json(results);
      } else if (title_album) {
        const results = await knex("tb_song")
          .join("tb_album", "tb_album.id_album", "tb_song.fk_album")
          .where({ title_album });
        return res.json(results);
      }
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id_song, id_artist, id_genre, id_album } = req.params;
      const {
        title_album,
        albumcover,
        artist,
        genre,
        lyrics,
        file,
        title_song,
        duration,
      } = req.body;

      await knex("tb_genre").update({ genre }).where({ id_genre });
      await knex("tb_album")
        .update({ albumcover, title_album })
        .where({ id_album });
      await knex("tb_artist").update({ artist }).where({ id_artist });
      await knex("tb_song")
        .update({ title_song, lyrics, duration, file })
        .where({ id_song });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id_song } = req.params;

      await knex("tb_song").where({ id_song }).del();
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
};
