import supertest from "supertest";
import { server } from "../index.js";
import test from 'ava';
const request = supertest(server);

test("GET /api/v1/orders", async (t) => {
  const response = await request.get("/api/v1/orders");
    t.is(response.status, 200);
    t.is(response.type, "application/json");
    t.is(response.body.message, "Successfully got orders");
    
});

test("POST /api/v1/orders", async (t) => {
  const response = await request.post("/api/v1/orders");
    t.is(response.status, 500);
    t.is(response.type, "application/json");
    const responseWithData = await request.post("/api/v1/orders").send(
        {
          "providerName": "exmaple",
          "orderNumber": 1,
          "user_id": 1,
          "observation": " example",
          "totalValue":12,
          "status":1
        }
    );
    t.is(responseWithData.status, 201);
});

