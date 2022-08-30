let num = prompt("Pasa un numero");
EvenOrOdd(num);


function EvenOrOdd(num){
    if (num % 2 == 0 ) {
        console.log("Es par")
    } else {
        console.log("Es impar")
    }
}