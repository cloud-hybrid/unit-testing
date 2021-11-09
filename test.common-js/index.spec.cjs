const assert = require("assert");
const add = require("./../src/add.js");

describe("Babel usage suite", () => {
    it("should add numbers correctly", () => {
        assert.equal(add(2, 3), 5);
    });
});
