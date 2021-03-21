import request from "supertest";
import app from "../app";
import { Connection, createConnection } from "typeorm";

describe("Suburbs", () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
    await request(app).get(`/seed/clear`);
    await request(app).get(`/seed/insert`);
  });

  afterAll(async () => {
    await connection.close();
  });

  const shouldReturn404SuburbNotFound = async (url: string, method: "get" | "post" | "put") => {
    test("should return 404 SuburbNotFound", () => {
      return request(app)[method](url).expect("Content-Type", /json/).expect(404);
    });
  };

  describe("GET /api/suburbs/search", () => {
    it("should return 200 OK", () => {
      return request(app)
        .get(`/api/suburbs/search`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          const suburbs = response.body;
          expect(suburbs.length).toEqual(5);
        });
    });
  });

  describe("GET /api/suburbs/101", () => {
    it("should return 200 OK", () => {
      return request(app)
        .get(`/api/suburbs/101`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          const suburb = response.body;
          expect(suburb).toEqual({
            id: "101",
            name: "Sydney",
            postcode: "2000",
          });
        });
    });

    shouldReturn404SuburbNotFound("/api/suburbs/unknown-id", "get");
  });
});
