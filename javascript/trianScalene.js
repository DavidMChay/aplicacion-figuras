class TriangleScalene extends Geometry {
    constructor(base, height, side1, side2) {
        super();
        this.base = parseFloat(base);
        this.height = parseFloat(height);
        this.side1 = parseFloat(side1);
        this.side2 = parseFloat(side2);
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }

    calculatePerimeter() {
        return this.base + this.side1 + this.side2;
    }
}

function validateTriangle(base, side1, side2) {
    return (
        base > 0 && side1 > 0 && side2 > 0 &&
        base + side1 > side2 &&
        base + side2 > side1 &&
        side1 + side2 > base
    );
}

function validateTriangleScalene(base, side1, side2) {
    return (
        base > 0 && side1 > 0 && side2 > 0 &&
        base + side1 > side2 &&
        base + side2 > side1 &&
        side1 + side2 > base
    );
}