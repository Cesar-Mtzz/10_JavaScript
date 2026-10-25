function datosCiudad() {
    var ciudad = document.getElementById("ciudad").value;
    
    if ( ciudad != "" ){
        document.getElementById("resultado-ciudad").innerHTML = "Resultado<br>Ciudad seleccionada: "+ciudad;
    }
}

let acumulado = 0;
let lock = false
function sumarNumeros(s){
    const input = document.getElementById("numero").value;
    const n = Number(input);

    if (n <= 0){
        lock = true;
        document.getElementById("resultado-suma").innerHTML = "Suma Finalizada:<br>"+acumulado;
        acumulado = 0;
    }

    if (s) {
        if (!lock) {
            acumulado += n;
            document.getElementById("resultado-suma").innerHTML = "Suma:<br>"+acumulado;
        } else {
            alert("Para continuar debe precionar reiniciar");
        }
    } else {
        document.getElementById("resultado-suma").innerHTML = "Suma:";
        acumulado = 0;
        lock = false;
    }

}

function ordenarNumeros() {
    const a = Number(document.getElementById("numero1").value);
    const b = Number(document.getElementById("numero2").value);
    const c = Number(document.getElementById("numero3").value);
    var res = "";

    if ( a <= b && a <= c ){
        if ( b <= c ){
            res = a+" < "+b+" < "+c;
        } else {
            res = a+" < "+c+" < "+b;
        }
    } else if ( b <= a && b <= c ){
        if ( a <= c ){
            res = b+" < "+a+" < "+c;
        } else {
            res = b+" < "+c+" < "+a;
        }
    } else {
        if ( a <= b ){
            res = c+" < "+a+" < "+b;
        } else {
            res = c+" < "+b+" < "+a;
        }
    }

    document.getElementById("resultado-numeros").innerHTML = "Resultado:<br>"+res;
}

function calcularNeto() {
    const bruto = Number(document.getElementById("nBruto").value);
    var impuesto = 0.0;
    var res = "";

    if (bruto >= 0) {
        res = "Costo bruto: " + bruto + "<br>";

        // CORRECCIÓN: Evaluamos 'bruto' en lugar de 'neto' (que aún no existía)
        if (bruto > 15000) {
            impuesto = bruto * 0.16;
            res += "Impuestos 16%: " + impuesto + "<br>";
        } else {
            impuesto = bruto * 0.10;
            res += "Impuestos 10%: " + impuesto + "<br>";
        }

        var neto = bruto + impuesto;
        res += "Costo neto: " + neto;
    } else {
        res = "Ingrese un numero valido <br>numero ingresado: " + bruto;
    }

    document.getElementById("resultado-neto").innerHTML = "Resultado:<br>" + res;
}

function calcularSueldo(){
    const x = Number(document.getElementById("nAnios").value);
    var aumento = 0;
    var res = "";

    if (x > 0) {
        if (x < 3){
            aumento = 40000 * .03;
        } else if ( x < 5 && x >= 3 ) {
            aumento = 40000 * .05;
        } else if ( x < 10 && x >= 5 ) {
            aumento = 40000 * .07;
        } else {
            aumento = 40000 * .1;
        }
    
        aumento = Math.round(aumento * 100) / 100;

        res = "Años ingresados: "+x+"<br>Se aumentara: "+aumento+"<br>Sueldo final: "+(40000+aumento);
    } else {
        res = "Ingrese una cantidad de años valido <br>ingresado: " + x;
    }

    document.getElementById("resultado-sueldo").innerHTML = "Resultado:<br>" + res;
}
