import { equal } from "assert";
import { default as add } from "../src/add.js";

describe('Babel usage suite', () => {
  it('should add numbers correctly', () => {
    equal(add(2, 3), 5);
  });
});
