var PrimeFactors = {
	generate: function(nInteger) {
		var factors = [], currentFactor = Math.floor(nInteger/2);
		
		while (currentFactor > 1) {
			if (nInteger % currentFactor === 0) {
				factors.push(currentFactor);
			}
			currentFactor--;
		}
		
		return factors;
	}
};

module.exports = PrimeFactors;