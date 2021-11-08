const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Alo mundo!", (done) => {
        request(app).get("/").expect("Alo mundo!", done);
    })
});
