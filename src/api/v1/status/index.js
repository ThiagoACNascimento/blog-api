import database from "../../../database/database.js";

export default async function statusRoutes(fastify, options) {
  fastify.get("/status", async (request, reply) => {
    const updatedAt = new Date().toISOString();

    const databaseVersionResult = await database.query("SHOW server_version;");
    const databaseVersionValue = databaseVersionResult.rows[0].server_version;

    const databaseMaxConnectionsResult = await database.query(
      "SHOW max_connections;",
    );
    const databaseMaxConnectionsValue =
      databaseMaxConnectionsResult.rows[0].max_connections;

    const databaseName = process.env.POSTGRES_DB;
    const databaseOpenedConnectionResults = await database.query({
      text: `
        SELECT
          count(*)::int
        FROM
          pg_stat_activity
        WHERE
          datname = $1
      ;`,
      values: [databaseName],
    });

    const databaseOpenedConnectionValue =
      databaseOpenedConnectionResults.rows[0].count;

    const statusObject = {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: databaseVersionValue,
          max_connections: parseInt(databaseMaxConnectionsValue),
          opened_connections: databaseOpenedConnectionValue,
        },
      },
    };

    return reply.status(200).send(statusObject);
  });
}
