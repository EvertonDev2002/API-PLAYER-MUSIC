module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "ExPlayerMusic",
      user: "postgres",
      password: "123",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
