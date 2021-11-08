const knexfile = require("../../knexfile");
const knex = require("knex")(knexfile.production || knexfile.development);

module.exports = knex;
