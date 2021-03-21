import os from "os";
import { stripIndents } from "common-tags";
import { createConnection, Connection } from "typeorm";
import app from "./app";
import clearSeed from "./seed/clear";
import insertSeed from "./seed/insert";

const EXPRESS_CONFIG = {
  port: parseInt(process.env.PORT) || 8080,
  hostname: os.hostname(),
};

(async function start() {
  try {
    const connection = (await createConnection()) as Connection;

    if (process.env.SEED) {
      await clearSeed(connection);
      await insertSeed(connection);
      console.log(stripIndents`DB SEED complete`);
    }

    const { hostname, port } = EXPRESS_CONFIG;

    await app.listen(port, () => {
      console.log(
        stripIndents`-----------------------------------
        Started Express Server
        Port: ${port}
        Hostname: ${hostname}
        -----------------------------------`
      );
    });
  } catch (error) {
    console.error("FATAL BOOT ERROR", error);
    process.exit(1);
  }
})();
