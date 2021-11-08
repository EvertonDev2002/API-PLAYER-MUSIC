const knexfile = require("../../knexfile");
/* Production */
const knex = require("knex")(knexfile.production);
/* LocalHost */
/* const knex = require("knex")(knexfile.development); */

module.exports = knex;
