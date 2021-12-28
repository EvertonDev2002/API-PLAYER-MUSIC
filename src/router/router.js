const express = require("express");
const router = express.Router();

const songController = require("../controller/songController");
const albumController = require("../controller/albumController");
const artistController = require("../controller/artistController");
const genreController = require("../controller/genreController");

/* Rotas Para Song */
router
  .get("/list/song", songController.index)
  .get("/search/song/:search", songController.search)
  .post("/create/song", songController.create)
  .put("/update/song/:id_song", songController.update)
  .put(
    "/update/all/song/:id_song/:id_album/:id_artist/:id_genre",
    songController.updateAll
  )
  .delete("/delete/song/:id_song", songController.delete);

/* Rotas Para Album */
router
  .get("/list/album", albumController.index)
  .get("/title/album/:title_album", albumController.search)
  .post("/create/album", albumController.create)
  .put("/update/album/:id_album", albumController.update)
  .put("/update/all/album/:id_album", albumController.updateAll)
  .delete("/delete/album/:id_album", albumController.delete);

/* Rotas Para Artist */
router
  .get("/list/artist", artistController.index)
  .get("/artist/artist/:artist", artistController.search)
  .post("/create/artist", artistController.create)
  .put("/update/artist/:id_artist", artistController.update)
  .delete("/delete/artist/:id_artist", artistController.delete);

/* Rotas Para Genre */
router
  .get("/list/genre", genreController.index)
  .get("/genre/genre/:genre", genreController.search)
  .post("/create/genre", genreController.create)
  .put("/update/genre/:id_genre", genreController.update)
  .delete("/delete/genre/:id_genre", genreController.delete);

module.exports = router;
