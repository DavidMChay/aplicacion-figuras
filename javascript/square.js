class Square extends Geometry {
    constructor(side) {
        super();
        this.side = parseFloat(side);
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    calculatePerimeter() {
        return 4 * this.side;
    }
}

function validateSquare(side) {
    return side > 0;
}
