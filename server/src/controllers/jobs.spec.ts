import request from "supertest";
import app from "../app";
import { Connection, createConnection } from "typeorm";

describe("Jobs", () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
    await request(app).get(`/seed/clear`);
    await request(app).get(`/seed/insert`);
  });

  afterAll(async () => {
    await connection.close();
  });

  const shouldReturn404JobNotFound = async (url: string, method: "get" | "post" | "put") => {
    test("should return 404 JobNotFound", () => {
      return request(app)[method](url).expect("Content-Type", /json/).expect(404);
    });
  };

  describe("GET /api/jobs/search", () => {
    it("should return 200 OK", () => {
      return request(app)
        .get(`/api/jobs/search`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          const jobs = response.body;
          expect(jobs.length).toEqual(4);
        });
    });
  });

  describe("GET /api/jobs/401", () => {
    it("should return 200 OK", () => {
      return request(app)
        .get(`/api/jobs/401`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          const job = response.body;
          delete job.created;
          delete job.updated;
          expect(job).toEqual({
            id: "401",
            status: "new",
            categoryId: "201",
            contactId: "301",
            price: 60,
            suburbId: "101",
            description: "Need to paint 2 aluminium windows and sliding glass door",
          });
        });
    });

    shouldReturn404JobNotFound("/api/jobs/unknown-id", "get");
  });

  describe("PUT /api/jobs/401", () => {
    it("should return 200 OK when changing status from new to accepted", () => {
      return request(app)
        .put(`/api/jobs/401`)
        .send({ status: "accepted" })
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          const job = response.body;
          expect(job.status).toEqual("accepted");
        });
    });
  });
});
