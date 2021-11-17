const { Router } = require("express");
const express = require("express");
const router = express.Router();

const musicController = require("../controller/musicController");
const albumController = require("../controller/albumController");

/* Rotas Para Song */
router
  .get("/list/song", musicController.index)
  .get("/genre/song:genre", musicController.search)
  .get("/artist/song:artist", musicController.search)
  .get("/title_album/song:title_album", musicController.search)
  .post("/create/song", musicController.create)
  .put(
    "/update/song:id_song/:id_album/:id_artist/:id_genre",
    musicController.update
  )
  .delete("/delete/song:id_song", musicController.delete);

/* Rotas Para Album */
router
  .get("/list/album", albumController.index)
  .get("/title_album/album:title_album", albumController.search)
  .post("/create/album", albumController.create)
  .put("update/album:id_album", albumController.update)
  .delete("/delete/album:id_album", albumController.delete);

/* Rotas Para Artist */
  router
  .get("/list/album", albumController.index)
  .get("/title_album/album:title_album", albumController.search)
  .post("/create/album", albumController.create)
  .put("update/album:id_album", albumController.update)
  .delete("/delete/album:id_album", albumController.delete);

module.exports = router;
