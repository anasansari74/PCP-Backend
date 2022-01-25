require("dotenv").config();
const mongoose = require("mongoose");
const ThoughtService = require("../src/routes/thoughts");

describe("Connection", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
  });

  test("Retrieve article by Id", async () => {
    const id = "61eaeca2b14993400d3991fa";
    const thought =  await ThoughtService.thoughtbyId(id);
    expect(thought).toBe("Say something positive and you will see something positive");
  });

  afterAll(async done => {
    mongoose.disconnect();
    done();
});

});