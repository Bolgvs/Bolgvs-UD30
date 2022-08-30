var values = [true, 5, false, "hola","adios",2];

var num = [];
var string = [];
var boolean = [];
for (let index = 0; index < values.length; index++) {

    const element = values[index];

    if(element == true || element == false){
        boolean.push(element);
    }
    else if(element / 1 == element){
        num.push(element);
    }
    else {
        string.push(element);
    }
}

var maxText = "";
for (let index = 0; index < string.length; index++) {
    const element = string[index];
   
    if(element.length > maxText.length ){
        maxText = element;
    }  
}

console.log(maxText + " Es el texto mas grande" );

console.log(boolean);

console.log(num[0] + num[1]);
console.log(num[0] - num[1]);
console.log(num[0] * num[1]);
console.log(num[0] / num[1]);
console.log(num[0] % num[1]);