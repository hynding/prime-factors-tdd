var PrimeFactors = require("../prime-factors"),
	chai = require("chai"),
	expect = chai.expect;

describe("Prime Factors", function() {
  it("has no factors for '1'", function() {
    expect(PrimeFactors.generate(1)).to.deep.equal([]);
  });
  it("returns 1 number, '2' for 4", function() {
    expect(PrimeFactors.generate(4)).to.deep.equal([2]);
  });
});
