function probarArreglo(opcion) {
    let paises = ["México", "España", "Argentina", "Colombia", "Japón", "Canadá", "Brasil", "Francia", "Italia", "Alemania"];
    let res = "Lista inicial: " + paises.join(", ") + "<br>";

    switch (opcion) {
        case 1: // length
            res += "<br>Cantidad de elementos (length): " + paises.length;
            break;

        case 2: // push
            paises.push("Australia");
            res += "<br>Se agregó 'Australia' al final con push.<br>Nueva lista: " + paises.join(", ");
            break;

        case 3: // pop
            let eliminadoPop = paises.pop();
            res += "<br>Pais Eliminado (pop): " + eliminadoPop + "<br>Lista restante: " + paises.join(", ");
            break;

        case 4: // unshift
            paises.unshift("Chile");
            res += "<br>Se agregó 'Chile' al inicio con unshift.<br>Nueva lista: " + paises.join(", ");
            break;

        case 5: // shift
            let eliminadoShift = paises.shift();
            res += "<br>Pais Eliminado del inicio (shift): " + eliminadoShift + "<br>Lista restante: " + paises.join(", ");
            break;

        case 6: // splice
            let removidos = paises.splice(2, 1, "Perú");
            res += "<br>Usando splice (en la pos 2 se borró 1 y se puso 'Perú'):<br>País quitado: " + removidos + "<br>Nueva lista: " + paises.join(", ");
            break;

        case 7: // delete
            delete paises[1];
            res += "<br>Usando delete en la posición 1:<br>Elemento en pos 1 ahora es: " + paises[1] + "<br>Lista completa: " + paises.join(", ");
            break;

        case 8: // reverse
            paises.reverse();
            res += "<br>Lista invertida con reverse:<br>" + paises.join(", ");
            break;

        case 9: // sort
            paises.sort();
            res += "<br>Lista ordenada alfabéticamente con sort:<br>" + paises.join(", ");
            break;

        case 10: // concat
            let otrosPaises = ["Corea", "China"];
            let combinados = paises.concat(otrosPaises);
            res += "<br>Lista unida con concat ([Corea, China]):<br>" + combinados.join(", ");
            break;

        case 11: // join
            let texto = paises.join(" | ");
            res += "<br>Arreglo convertido a texto con join(' | '):<br>" + texto;
            break;

        default:
    }

    document.getElementById("resultado-arreglo").innerHTML = "Resultado<br>"+res;
}
