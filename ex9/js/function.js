let text = prompt("Introduce texto");

controllerText(text);

function controllerText(text){
    let mayus = false;
    let minus = false;
    for (let index = 0; index < text.length; index++) {
        const element = text.charAt(index);

        if(element == element.toUpperCase()){
            mayus = true;
        }if(element == element.toLowerCase()){
            minus = true;
        }

    }
    if(mayus){
        console.log("Tiene mayus");
    }
    if(minus){
        console.log("Tiene minus");
    }
}