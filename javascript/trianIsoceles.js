class TriangleIsoceles extends Geometry {
    constructor(base, height, sides) {
        super();
        this.base = parseFloat(base);
        this.height = parseFloat(height);
        this.sides = parseFloat(sides);
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }

    calculatePerimeter() {
        return this.base + this.sides * 2;
    }
}

function validateTriangleIsosceles(base, height, sides) {
    return base > 0 && height > 0 && sides > 0 &&
        2 * sides > base && 
        sides + base > sides;
}
