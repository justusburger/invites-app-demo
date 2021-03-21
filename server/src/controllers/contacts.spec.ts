import request from "supertest";
import app from "../app";
import { Connection, createConnection } from "typeorm";

describe("Contacts", () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
    await request(app).get(`/seed/clear`);
    await request(app).get(`/seed/insert`);
  });

  afterAll(async () => {
    await connection.close();
  });

  const shouldReturn404ContactNotFound = async (url: string, method: "get" | "post" | "put") => {
    test("should return 404 ContactNotFound", () => {
      return request(app)[method](url).expect("Content-Type", /json/).expect(404);
    });
  };

  describe("GET /api/contacts/301", () => {
    it("should return 200 OK", () => {
      return request(app)
        .get(`/api/contacts/301`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          const contact = response.body;
          expect(contact).toEqual({
            id: "301",
            firstName: "Luke",
            lastName: "Skywalker",
            phone: "0412345678",
            email: "luke@mailinator.com",
          });
        });
    });

    shouldReturn404ContactNotFound("/api/contacts/unknown-id", "get");
  });
});
