function verify() {
    const eps = 1e-9;

    console.log("X, Y, Z");
    let X = parseFloat(document.getElementById('X').value);
    let Y = parseFloat(document.getElementById('Y').value);
    let Z = parseFloat(document.getElementById('Z').value);
    console.log(X, Y, Z);

    let resultText = ""

    if (X + Y > Z && X + Z > Y && Y + Z > X) {
        const isRight =
            Math.abs(X * X + Y * Y - Z * Z) < eps ||
            Math.abs(X * X + Z * Z - Y * Y) < eps ||
            Math.abs(Y * Y + Z * Z - X * X) < eps;

        if (isRight) {
            resultText = "Треугольник существует и он прямоугольный";
        } else {
            resultText = "Треугольник существует, но он не прямоугольный";
        }
    } else {
        resultText = "Треугольника с такими сторонами не существует";
    }

    document.getElementById("result").value = resultText;
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);