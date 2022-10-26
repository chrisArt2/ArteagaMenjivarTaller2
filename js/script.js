function obtenerDatos(){
    let valorA = parseFloat(document.getElementById('a').value);
    let valorB = parseFloat(document.getElementById('b').value);
    let valorC = parseFloat(document.getElementById('c').value);

    let formulaGeneral1 = -((-1*-valorB)+ (Math.sqrt((Math.pow(valorB,2)- (4*valorA*valorC)))))/(2*valorA);

    

    if(valorA!==0 && valorB !==0 && valorC !==0){
        alert("El resultado es: " + formulaGeneral1 + " Es una ecuación Real" );
        document.getElementById('datoAobtener').value = "2";
    }else{
        alert("Los valores no tienen que ser menores o iguales a 0 sino sería una solución compleja imaginaria, fuera de los números reales");
    }

    
}









































































































