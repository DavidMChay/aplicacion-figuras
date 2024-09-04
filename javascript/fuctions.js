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
            case 'trianScalene':
                $('#figureImage').html('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-triangle-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/></svg>');
                $('#inputFields').append(`
                    <div class="mb-3">
                        <label for="base" class="form-label">Base/Lado A:</label>
                        <input type="number" class="form-control" id="base" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="height" class="form-label">Altura:</label>
                        <input type="number" class="form-control" id="height" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="side1" class="form-label">Lado B:</label>
                        <input type="number" class="form-control" id="side1" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="side2" class="form-label">Lado C:</label>
                        <input type="number" class="form-control" id="side2" step="0.01" required>
                    </div>
                `);
                break;
            case 'trianEquilateral':
                $('#figureImage').html('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-triangle-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/></svg>');
                $('#inputFields').append(`
                    <div class="mb-3">
                        <label for="base" class="form-label">Base/Lados:</label>
                        <input type="number" class="form-control" id="base" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="height" class="form-label">Altura:</label>
                        <input type="number" class="form-control" id="height" step="0.01" required>
                    </div>
                `);
            case 'trianIsosceles':
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
                        <label for="sides" class="form-label">Lados A y B:</label>
                        <input type="number" class="form-control" id="sides" step="0.01" required>
                    </div>
                `);
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
                    if (!validateRectangle(width, height)) {
                        alert('Dimensiones inválidas para un rectángulo. Introduce solo valores númericos positivos.');
                        return;
                    }
                    geometry = new Rectangle(width, height);
                    break;
                case 'circle':
                    const radius = $('#radius').val();
                    if (!validateCircle(radius)) {
                        alert('Radio inválido para un círculo. Introduce solo valores númericos positivos.');
                        return;
                    }
                    geometry = new Circle(radius);
                    break;
                case 'square':
                    const side = $('#side').val();
                    if (!validateSquare(side)) {
                        alert('Lado inválido para un cuadrado. Introduce solo valores númericos positivos.');
                        return;
                    }
                    geometry = new Square(side);
                    break;
                case 'trianScalene':
                    const base = $('#base').val();
                    const heightTri = $('#height').val();
                    const side1 = $('#side1').val();
                    const side2 = $('#side2').val();
                    if (!validateTriangle(base, heightTri, side1, side2)) {
                        alert('Dimensiones inválidas para un triángulo. Introduce solo valores númericos positivos.');
                        return;
                    }
                    geometry = new TriangleScalene(base, heightTri, side1, side2);
                    break;
                case 'trianEquilateral':
                    const baseEq = $('#base').val();
                    const heightTriEq = $('#height').val();
                    if (!validateTriangle(baseEq, heightTriEq, baseEq, baseEq)) {
                        alert('Dimensiones inválidas para un triángulo. Introduce solo valores númericos positivos.');
                        return;
                    }
                    geometry = new TriangleEquilateral(baseEq, heightTriEq);
                    break;
                case 'trianIsosceles':
                    const baseIso = $('#base').val();
                    const heightTriIso = $('#height').val();
                    const sides = $('#sides').val();
                    if (!validateTriangle(baseIso, heightTriIso, sides, sides)) {
                        alert('Dimensiones inválidas para un triángulo. Introduce solo valores númericos positivos.');
                        return;
                    }
                    geometry = new TriangleIsoceles(baseIso, heightTriIso, sides);
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