require("dotenv").config();
const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");
const History = require("../models/History");

const request = supertest(app);
const Online = process.env.MONGODB_URL;
// expect(res.body.msg).toEqual("this task does not exist");
// expect(res.body).toHaveProperty("task");
//
describe("Test History Endpoint", () => {
  beforeAll(async () => {
    await mongoose.connect(Online);
    console.log("0: test database connected");
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
    console.log("1: test database disconnected");
  });

  test("check test is working.", () => {
    expect(true).toBe(true);
  });

  describe("GET /history", () => {
    test("should Get all save calculation history", async () => {
      const res = await request.get("/history");
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe("POST /history", () => {
    let historyId;

    afterEach(async () => {
      history = await History.deleteOne({ _id: historyId });
    });

    test("should Save a calculation expression", async () => {
      const res = await request.post("/history").send({
        expression: "1007+2",
        result: 1009,
      });
      historyId = res.body._id;
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("expression");
      expect(res.body).toHaveProperty("result");
    });

    // with wrong payload
    test("should return 400 if the history payload is incorrect", async () => {
      const historyId = "639c80ef98284bfdf111ad09";
      const res = await request.put(`/history/${history.id}`).send({
        exp: "1007-2",
        result: 1005,
      });
      expect(res.status).toBe(400);
      expect(res.body.msg).toEqual(
        "send all required fields: expression, result"
      );
    });
  });

  describe("GET /history/:id", () => {
    let history;
    beforeEach(async () => {
      history = await History.create({
        expression: "2211-1",
        result: 2210,
      });
    });

    afterEach(async () => {
      history = await History.deleteOne({ _id: history.id });
    });

    test("should return a Saved calculation expression successfully", async () => {
      const res = await request.get(`/history/${history.id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("expression");
      expect(res.body).toHaveProperty("result");
    });

    test("should return 404 if the task with the id doesnt exist", async () => {
      const historyId = "639c80ef98284bfdf111ad09";
      const res = await request.get(`/history/${historyId}`);
      expect(res.status).toBe(404);
      expect(res.body.msg).toEqual("this history does not exist");
    });
  });

  describe("PUT /history/:id", () => {
    let history;
    beforeEach(async () => {
      history = await History.create({
        expression: "2211-1",
        result: 2210,
      });
    });

    afterEach(async () => {
      history = await History.deleteOne({ _id: history.id });
    });

    test("should Update calculation expression successfully", async () => {
      const res = await request.put(`/history/${history.id}`).send({
        expression: "1007-2",
        result: 1005,
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.msg).toEqual("history updated successfully");
    });

    // with wrong id
    test("should return 404 if the history with the id doesnt exist", async () => {
      const historyId = "639c80ef98284bfdf111ad09";
      const res = await request.put(`/history/${historyId}`).send({
        expression: "1007-2",
        result: 1005,
      });
      expect(res.status).toBe(404);
      expect(res.body.msg).toEqual("this history does not exist");
    });

    // with wrong payload
    test("should return 400 if the history payload is incorrect", async () => {
      const historyId = "639c80ef98284bfdf111ad09";
      const res = await request.put(`/history/${history.id}`).send({
        exp: "1007-2",
        result: 1005,
      });
      expect(res.status).toBe(400);
      expect(res.body.msg).toEqual(
        "send all required fields: expression, result"
      );
    });
  });

  describe("DELETE /history/:id", () => {
    let history;
    beforeEach(async () => {
      history = await History.create({
        expression: "2211-1",
        result: 2210,
      });
    });

    afterEach(async () => {
      history = await History.deleteOne({ _id: history.id });
    });

    test("should Delete calculation expression successfully", async () => {
      const res = await request.delete(`/history/${history.id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.msg).toEqual("history deleted successfully");
    });

    test("should return 404 if the history with the id doesnt exist", async () => {
      const historyId = "639c80ef98284bfdf111ad09";
      const res = await request.delete(`/history/${historyId}`);
      expect(res.status).toBe(404);
      expect(res.body.msg).toEqual("this history does not exist");
    });
  });
});
