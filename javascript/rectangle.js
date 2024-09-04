class Rectangle extends Geometry {
    constructor(width, height) {
        super();
        this.width = parseFloat(width);
        this.height = parseFloat(height);
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

function validateRectangle(width, height) {
    return width > 0 && height > 0;
}