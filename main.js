//Saludo a mi usuario
function saludarUsuario(){
    const nombre = prompt("Ingresa tu nombre: ");
    const apellido = prompt("Ingresa tu apellido: ");
    alert("Bienvenido "+nombre+" "+apellido+" como estas?");
}
saludarUsuario();

// Le pido al usuario que ingrese dos números
function calcularNumeroMayorOMenor(){

let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");

// Convierto los valores ingresados a números
let valor1 = parseFloat(numero1);
let valor2 = parseFloat(numero2);

// Verifico si los valores ingresados son números válidos
if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, ingresa un código válido.");
} else {
// Comparo los números y mostrar el resultado
if (valor1 > valor2) {
    alert("El primer número, " + valor1 + ", es el más grande.");
} else if (valor2 > valor1) {
    alert("El segundo número, " + valor2 + ", es el más grande.");
} else {
    alert("Ambos números son iguales.");
}
}
}
calcularNumeroMayorOMenor();

function sumaRestaMultiDivision(){
// Solicito al usuario que ingrese dos números y la operación deseada
alert("Ingrese dos numeros y despues elija la operacion");
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación (suma, resta, multiplica, division):");

// Realizar la operación y mostrar el resultado
let resultado;

switch(operacion){
    case "suma":
        resultado = numero1 + numero2
        alert("El resultado de la suma es de: "+resultado);
        break;
        case "resta":
            resultado = numero1 - numero2;
            alert("El resultado de la resta es: " + resultado);
            break;
            case "multiplica":
                resultado = numero1 * numero2;
                alert("El resultado de la multiplicacion es: "+resultado);
                break;
                case "division":
                    if (numero2 !== 0) {
                        resultado = numero1 / numero2;
                        alert("El resultado de la división es: " + resultado);
                        } else {
                            alert("No se puede dividir entre cero.");
                            }
                            break;
                            default:
                                alert("Operación no válida.");
}
}
sumaRestaMultiDivision();


