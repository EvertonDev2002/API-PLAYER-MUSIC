const knex = require("../database");
module.exports = {
  async index(req, res) {
    const { id } = req.query;
    if (id) {
      results = await knex("tb_song")
        .where("id_song", "=", id)
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
      if (results.length != 0) {
        const { fk_album } = results[0];
        const [count] = await knex("tb_song")
          .where("fk_album", "=", fk_album)
          .join("tb_album", "tb_album.id_album", "tb_song.fk_album")
          .join("tb_artist", "tb_artist.id_artist", "tb_song.fk_artist")
          .join("tb_genre", "tb_genre.id_genre", "tb_song.fk_genre")
          .count();

          return res.json([results, count]);
      } else {
        return res.json("Nenhum dado encontrado!");
      }
    } else {
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
    }
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

      const FloatDuration = parseFloat(duration);
      const genreToLowerCase = genre.toLowerCase();
      const artistToLowerCase = artist.toLowerCase();
      const titleAlbumToLowerCase = title_album.toLowerCase();

      const id_album = await knex("tb_album")
        .select("id_album")
        .whereRaw(`LOWER(title_album) LIKE ?`, [`%${titleAlbumToLowerCase}%`])
        .orderBy("id_album", "desc")
        .limit(1);

      const id_artist = await knex("tb_artist")
        .select("id_artist")
        .whereRaw(`LOWER(artist) LIKE ?`, [`%${artistToLowerCase}%`])
        .orderBy("id_artist", "desc")
        .limit(1);

      const id_genre = await knex("tb_genre")
        .select("id_genre")
        .whereRaw(`LOWER(genre) LIKE ?`, [`%${genreToLowerCase}%`])
        .orderBy("id_genre", "desc")
        .limit(1);

      if (
        id_album.length === 0 &&
        id_artist.length === 0 &&
        id_genre.length === 0
      ) {
        await knex("tb_album").insert({ title_album, albumcover });
        await knex("tb_artist").insert({ artist });
        await knex("tb_genre").insert({ genre });

        const [{ id_album }] = await knex("tb_album")
          .select("id_album")
          .orderBy("id_album", "desc")
          .limit(1);

        const [{ id_artist }] = await knex("tb_artist")
          .select("id_artist")
          .orderBy("id_artist", "desc")
          .limit(1);

        const [{ id_genre }] = await knex("tb_genre")
          .select("id_genre")
          .orderBy("id_genre", "desc")
          .limit(1);

        await knex("tb_song").insert({
          fk_album: id_album,
          fk_artist: id_artist,
          fk_genre: id_genre,
          lyrics,
          file,
          title_song,
          duration: FloatDuration,
        });

        return res.status(201).send();
      } else if (id_album.length === 0) {
        await knex("tb_album").insert({ title_album, albumcover });

        const [{ id_album }] = await knex("tb_album")
          .select("id_album")
          .orderBy("id_album", "desc")
          .limit(1);

        const [{ id_artist }] = await knex("tb_artist")
          .select("id_artist")
          .orderBy("id_artist", "desc")
          .limit(1);

        const [{ id_genre }] = await knex("tb_genre")
          .select("id_genre")
          .orderBy("id_genre", "desc")
          .limit(1);

        await knex("tb_song").insert({
          fk_album: id_album,
          fk_artist: id_artist,
          fk_genre: id_genre,
          lyrics,
          file,
          title_song,
          duration: FloatDuration,
        });

        return res.status(201).send();
      } else if (id_artist.length === 0) {
        await knex("tb_artist").insert({ artist });

        const [{ id_album }] = await knex("tb_album")
          .select("id_album")
          .orderBy("id_album", "desc")
          .limit(1);

        const [{ id_artist }] = await knex("tb_artist")
          .select("id_artist")
          .orderBy("id_artist", "desc")
          .limit(1);

        const [{ id_genre }] = await knex("tb_genre")
          .select("id_genre")
          .orderBy("id_genre", "desc")
          .limit(1);

        await knex("tb_song").insert({
          fk_album: id_album,
          fk_artist: id_artist,
          fk_genre: id_genre,
          lyrics,
          file,
          title_song,
          duration: FloatDuration,
        });
        return res.status(201).send();
      } else if (id_genre.length === 0) {
        await knex("tb_genre").insert({ genre });

        const [{ id_album }] = await knex("tb_album")
          .select("id_album")
          .orderBy("id_album", "desc")
          .limit(1);

        const [{ id_artist }] = await knex("tb_artist")
          .select("id_artist")
          .orderBy("id_artist", "desc")
          .limit(1);

        const [{ id_genre }] = await knex("tb_genre")
          .select("id_genre")
          .orderBy("id_genre", "desc")
          .limit(1);

        await knex("tb_song").insert({
          fk_album: id_album,
          fk_artist: id_artist,
          fk_genre: id_genre,
          lyrics,
          file,
          title_song,
          duration: FloatDuration,
        });
        return res.status(201).send();
      } else {
        await knex("tb_song").insert({
          fk_album: parseInt(Object.values(id_album[0])),
          fk_artist: parseInt(Object.values(id_artist[0])),
          fk_genre: parseInt(Object.values(id_genre[0])),
          lyrics,
          file,
          title_song,
          duration: FloatDuration,
        });
        return res.status(201).send();
      }
    } catch (error) {
      next(error);
    }
  },
  async search(req, res, next) {
    try {
      const { search } = req.params;

      if (search) {
        let value = search.toLowerCase();
        let results = await knex("tb_song")
          .join("tb_genre", "tb_genre.id_genre", "tb_song.fk_genre")
          .whereRaw(`LOWER(genre) LIKE ?`, [`%${value}%`])
          .join("tb_album", "tb_album.id_album", "tb_song.fk_album")
          .join("tb_artist", "tb_artist.id_artist", "tb_song.fk_artist")
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

        if (results.length != 0) {
          return res.json(results);
        } else {
          value = search.toLowerCase();
          results = await knex("tb_song")
            .join("tb_artist", "tb_artist.id_artist", "tb_song.fk_artist")
            .whereRaw(`LOWER(artist) LIKE ?`, [`%${value}%`])
            .join("tb_genre", "tb_genre.id_genre", "tb_song.fk_genre")
            .join("tb_album", "tb_album.id_album", "tb_song.fk_album")
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

          if (results.length != 0) {
            return res.json(results);
          } else {
            value = search.toLowerCase();
            results = await knex("tb_song")
              .join("tb_album", "tb_album.id_album", "tb_song.fk_album")
              .whereRaw(`LOWER(title_album) LIKE ?`, [`%${value}%`])
              .join("tb_genre", "tb_genre.id_genre", "tb_song.fk_genre")
              .join("tb_artist", "tb_artist.id_artist", "tb_song.fk_artist")
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

            if (results.length != 0) {
              return res.json(results);
            } else {
              value = search.toLowerCase();
              results = await knex("tb_song")
                .whereRaw(`LOWER(title_song) LIKE ?`, [`%${value}%`])
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

              if (results.length != 0) {
                return res.json(results);
              } else {
                return res.json("Nenhum dado encontrado!");
              }
            }
          }
        }
      }
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id_song } = req.params;

      const { lyrics, file, title_song, duration } = req.body;

      if (lyrics) {
        await knex("tb_song").update({ lyrics }).where({ id_song });
      } else if (file) {
        await knex("tb_song").update({ file }).where({ id_song });
      } else if (title_song) {
        await knex("tb_song").update({ title_song }).where({ id_song });
      } else if (duration) {
        await knex("tb_song").update({ duration }).where({ id_song });
      }

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async updateAll(req, res, next) {
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
