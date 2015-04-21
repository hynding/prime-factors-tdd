var PrimeFactors = require("../prime-factors");

describe("Prime Factors", function() {
  it("has no factors for '1'", function() {
    expect(PrimeFactors.generate(1)).to.equal([]);
  });
});
