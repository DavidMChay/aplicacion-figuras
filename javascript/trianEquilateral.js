class TriangleEquilateral extends Geometry {
    constructor(base, height) {
        super();
        this.base = parseFloat(base);
        this.height = parseFloat(height);
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }

    calculatePerimeter() {
        return this.base * 3;
    }
}