let asked_string = prompt('Introduce una cadena de texto: ');

function palindrome(string) {

    var low_no_spacing = string.toLowerCase().replace(/[\W ]/g, '');

    var reversed = low_no_spacing.split('').reverse().join(''); 


    if (low_no_spacing == reversed) {
        text.innerHTML = `Frase Palíndroma: ${asked_string}`;
    }else{
        text.innerHTML = `No es frase Palíndroma: ${asked_string}`;
    }

}

let text = document.getElementById('string');

palindrome(asked_string);