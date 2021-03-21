import request from "supertest";
import app from "../app";
import { Connection, createConnection } from "typeorm";

describe("Categories", () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
    await request(app).get(`/seed/clear`);
    await request(app).get(`/seed/insert`);
  });

  afterAll(async () => {
    await connection.close();
  });

  const shouldReturn404CategoryNotFound = async (url: string, method: "get" | "post" | "put") => {
    test("should return 404 CategoryNotFound", () => {
      return request(app)[method](url).expect("Content-Type", /json/).expect(404);
    });
  };

  describe("GET /api/categories/search", () => {
    it("should return 200 OK", () => {
      return request(app)
        .get(`/api/categories/search`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          const categories = response.body;
          expect(categories.length).toEqual(6);
        });
    });
  });

  describe("GET /api/categories/201", () => {
    it("should return 200 OK", () => {
      return request(app)
        .get(`/api/categories/201`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          const category = response.body;
          expect(category).toEqual({
            id: "201",
            name: "Plumbing",
            parentCategoryId: null,
          });
        });
    });

    shouldReturn404CategoryNotFound("/api/categories/unknown-id", "get");
  });
});
