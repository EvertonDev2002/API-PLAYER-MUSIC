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
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
