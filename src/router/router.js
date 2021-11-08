const express = require("express");
const router = express.Router();

const musicController = require("../controller/musicController");

/* Rotas Para Song */
router
  .get("/list_song", musicController.index)
  .get("/genre/:genre", musicController.search)
  .get("/artist/:artist", musicController.search)
  .get("/title_album/:title_album", musicController.search)
  .post("/create", musicController.create)
  .put(
    "/update/:id_song/:id_album/:id_artist/:id_genre",
    musicController.update
  )
  .delete("/delete/:id_song", musicController.delete);

module.exports = router;
