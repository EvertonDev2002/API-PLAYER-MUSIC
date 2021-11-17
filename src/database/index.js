const knexfile = require("../../knexfile");

if (process.env.ENVIRONMENT == "production") {
  const knex = require("knex")(knexfile.production);
  module.exports = knex;
} else {
  const knex = require("knex")(knexfile.development);
  module.exports = knex;
}
