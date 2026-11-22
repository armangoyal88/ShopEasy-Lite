const request = require("supertest");
const app = require("./app");

describe("ShopEasy Lite API", () => {
  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Welcome to ShopEasy Lite");
  });

  test("GET /products should return product list", async () => {
    const response = await request(app).get("/products");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(3);
  });

  test("GET /products/1 should return product", async () => {
    const response = await request(app).get("/products/1");
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("Laptop");
  });

  test("GET /products/99 should return 404", async () => {
    const response = await request(app).get("/products/99");
    expect(response.statusCode).toBe(404);
  });
});