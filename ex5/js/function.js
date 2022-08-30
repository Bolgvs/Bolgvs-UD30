function showDNI() {

var  letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let DNI = window.prompt("Introduce tu Dni");
let letter_user_DNI = prompt('Introduce la letra del DNI: ');
let letterback = letters[DNI % 23];

if (DNI < 0 || DNI > 99999999) {
    window.alert("Numero no valido");
} else {
    console.log(letters[DNI % 23]);
    if (letterback == letter_user_DNI) {
        alert(DNI)
        document.getElementById('text').innerHTML = `DNI introducido es:  ${DNI} y la letra es: ${letter_user_DNI}`;
    } else {
        alert("DNI incorrecto");
    }
}
}