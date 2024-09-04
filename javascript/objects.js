class Geometry {
    calculateArea() {}
    calculatePerimeter() {}
}

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

class Triangle extends Geometry {
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

$(document).ready(function () {
    $('#figureSelect').change(function () {
        const figure = $(this).val();
        $('#inputFields').html('');
        $('#results').hide();
        $('#figureImage').html('');

        switch (figure) {
            case 'rectangle':
                $('#figureImage').html('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-square-half" viewBox="0 0 16 16"><path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"/></svg>');
                $('#inputFields').append(`
                    <div class="mb-3">
                        <label for="width" class="form-label">Ancho:</label>
                        <input type="number" class="form-control" id="width" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="height" class="form-label">Altura:</label>
                        <input type="number" class="form-control" id="height" step="0.01" required>
                    </div>
                `);
                break;
            case 'circle':
                $('#figureImage').html('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg>');
                $('#inputFields').append(`
                    <div class="mb-3">
                        <label for="radius" class="form-label">Radio:</label>
                        <input type="number" class="form-control" id="radius" step="0.01" required>
                    </div>
                `);
                break;
            case 'square':
                $('#figureImage').html('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/></svg>');
                $('#inputFields').append(`
                    <div class="mb-3">
                        <label for="side" class="form-label">Lado:</label>
                        <input type="number" class="form-control" id="side" step="0.01" required>
                    </div>
                `);
                break;
            case 'triangle':
                $('#figureImage').html('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-triangle-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/></svg>');
                $('#inputFields').append(`
                    <div class="mb-3">
                        <label for="base" class="form-label">Base:</label>
                        <input type="number" class="form-control" id="base" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="height" class="form-label">Altura:</label>
                        <input type="number" class="form-control" id="height" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="side1" class="form-label">Lado 1:</label>
                        <input type="number" class="form-control" id="side1" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="side2" class="form-label">Lado 2:</label>
                        <input type="number" class="form-control" id="side2" step="0.01" required>
                    </div>
                `);
                break;
        }

        $('#inputFields').show();
    });

    $('#btnCalculate').click(function () {
        const figure = $('#figureSelect').val();
        let geometry;
        let area, perimeter;

        try {
            switch (figure) {
                case 'rectangle':
                    const width = $('#width').val();
                    const height = $('#height').val();
                    geometry = new Rectangle(width, height);
                    break;
                case 'circle':
                    const radius = $('#radius').val();
                    geometry = new Circle(radius);
                    break;
                case 'square':
                    const side = $('#side').val();
                    geometry = new Square(side);
                    break;
                case 'triangle':
                    const base = $('#base').val();
                    const heightTri = $('#height').val();
                    const side1 = $('#side1').val();
                    const side2 = $('#side2').val();
                    geometry = new Triangle(base, heightTri, side1, side2);
                    break;
            }

            area = geometry.calculateArea();
            perimeter = geometry.calculatePerimeter();

            $('#perimeterResult').text(`Perímetro: ${perimeter.toFixed(2)}`);
            $('#areaResult').text(`Área: ${area.toFixed(2)}`);
            $('#results').show();
        } catch (error) {
            alert('Error en los cálculos. Por favor, verifique los datos ingresados.');
        }
    });
});
