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