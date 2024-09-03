function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;

    this.add = function(fraction) {
        const newNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
        const newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator);
    };

    this.subtract = function(fraction) {
        const newNumerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
        const newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator);
    };

    this.multiply = function(fraction) {
        const newNumerator = this.numerator * fraction.numerator;
        const newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator);
    };

    this.divide = function(fraction) {
        const newNumerator = this.numerator * fraction.denominator;
        const newDenominator = this.denominator * fraction.numerator;
        return new Fraction(newNumerator, newDenominator);
    };

    this.print = function() {
        console.log(`${this.numerator}/${this.denominator}`);
    };
}

exports.Fraction = Fraction;
