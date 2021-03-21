import { Connection } from "typeorm";

export default async function clear(connection: Connection) {
  await connection.query(`DELETE FROM job`);
  await connection.query(`DELETE FROM contact`);
  await connection.query(`DELETE FROM category WHERE parentCategoryId IS NOT NULL`);
  await connection.query(`DELETE FROM category`);
  await connection.query(`DELETE FROM suburb`);
}
