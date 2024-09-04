class Circle extends Geometry {
    constructor(radius) {
        super();
        this.radius = parseFloat(radius);
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

function validateCircle(radius) {
    return radius > 0;
}
