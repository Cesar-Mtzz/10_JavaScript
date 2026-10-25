function sumarNumerosImpares() {
    var suma = 0;

    for (var i = 0; i <= 100; i++) {
        if (i % 2 !== 0) { 
            suma += i;
        }
    }

    document.getElementById("resultado-sumaImpares").innerHTML = "Suma:<br> " + suma;
}

function imprimirAsteriscos() {
    const imput = document.getElementById("numeroAsteriscos").value;
    var x = parseInt(imput);
    var res = "Resultado:<br>" ;
    
    if ( x > 0 ) {
        for (var i = 0; i < x; i++) {
            res += "*"
        }

    } else {
        res = " Ingrese un numero valido mayor a 0"
    }

    document.getElementById("resultado-asteriscos").innerHTML = res;
}

function tablasMultiplicar(){
    var res = "";

    for (var i = 1; i <= 10; i++) {
        var tabla = "";

        for (var x = 1; x <= 10; x++) {
                tabla += i+" X "+x+" = "+(x*i)+"<br>";
        }
        
        res += "<p class=\"resultados\">"+tabla+"</p>";
    }
        
    document.getElementById("resultado-tablas").innerHTML = res;
}
