function mostrarTarjeta(tarjeta, tamaño) {
    // 1. Obtenemos todos los elementos de golpe en un array
    const problemas = Array.from({ length: tamaño }, (_, i) => document.getElementById(`problema${i + 1}`));
    
    // 2. El elemento que queremos activar (convertimos 'tarjetas' a índice restando 1)
    const objetivo = problemas[tarjeta - 1];

    // Si ya está activo, no hacemos nada (mantiene tu lógica de optimización)
    if (!objetivo.classList.contains('activa')) {
        
        // Ocultamos y reseteamos todos los elementos de la lista de golpe
        problemas.forEach(p => {
            p.classList.remove("activa", "transicion");
            p.classList.add("oculto");
        });

        // Mostramos el seleccionado con tu misma animación
        objetivo.classList.remove("oculto");
        objetivo.classList.add("transicion");
        
        setTimeout(() => {
            objetivo.classList.add("activa");
        }, 5);
    }
}

function menuLogin() {
    const menu = document.getElementById("menuLogin");

    if (!menu.classList.contains('activo')){
        menu.classList.add("activo", "transicion");

        setTimeout(() => {
            menu.classList.add("activa");
        }, 5);
    } else {
        menu.classList.remove("activa");

        setTimeout(() => {
            menu.classList.remove("activo", "transicion");
        }, 1000);
    }
}

function mostrarSubmenu() {
    const links = document.getElementById("submenu");
    const pLinks = document.getElementById("textoSubmenu");
    
    menuLogin();

    if (!links.classList.contains('activa')) {
        links.classList.add("transicion");
        pLinks.classList.add("transicion", "activa");
        
        setTimeout(() => {
            pLinks.classList.remove("activa");
        }, 5);

        setTimeout(() => {
            pLinks.classList.add("oculto");
            pLinks.classList.remove("transicion");
            links.classList.remove("oculto");

            setTimeout(() => {
                links.classList.add("activa");
            }, 5);
        }, 1000);
    }
}
