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
  it("has no factors for '5'", function() {
    expect(PrimeFactors.generate(5)).to.deep.equal([]);
  });
  it("returns 2 numbers, '3,2' for 6", function() {
    expect(PrimeFactors.generate(6)).to.deep.equal([3,2]);
  });
  it("has no factors for '7'", function() {
    expect(PrimeFactors.generate(7)).to.deep.equal([]);
  });
  it("returns 1 number, '3' for 9", function() {
    expect(PrimeFactors.generate(4)).to.deep.equal([2]);
  });
  it("returns numbers '30,20,15,12,10,6,5,4,3,2' for 60", function(){
	  expect(PrimeFactors.generate(60)).to.deep.equal([30,20,15,12,10,6,5,4,3,2]);
  });
  it("has no factors for '83'", function() {
    expect(PrimeFactors.generate(83)).to.deep.equal([]);
  });
  it("has no factors for '43'", function() {
    expect(PrimeFactors.generate(43)).to.deep.equal([]);
  });
  it("returns numbers '83,43' for 3569", function(){
	  expect(PrimeFactors.generate(3569)).to.deep.equal([83,43]);
  });
});;
