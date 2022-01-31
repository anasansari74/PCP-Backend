const { addOneThought } = require("../src/resources/thought/controller");
const Thought = require("../src/models/thought");
const db = require("./db")

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

describe("Thoughts created when", () => {
  it("First thought", async (done) => {
    const body = {
      "categoryTitle": "uplifting",
      "thought": "I dwell in possibility.",
    }
    const { thoughtId } = await addOneThought(body);

    // find the thought from the db
    const thought = await Thought.findById(thoughtId)

    // check the thought and category of the thought found
    expect(thought.thought).toEqual("I dwell in possibility.")
    expect(thought.categoryTitle).toEqual("uplifting")
    done()


  });

});
