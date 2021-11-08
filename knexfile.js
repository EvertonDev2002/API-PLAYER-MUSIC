module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "ExPlayerMusic",
      user: "postgres",
      password: "123",
    },
  },

/*   staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  }, */

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
