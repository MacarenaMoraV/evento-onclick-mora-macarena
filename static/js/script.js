
// Función para cambiar el estado de la sesión (Iniciar/Cerrar)
function cambiarSesion() {
    const btnSesion = document.getElementById('btn-sesion');
    
    if (btnSesion.innerText === 'Iniciar sesión') { // Verifica el texto actual del botón
        btnSesion.innerText = 'Cerrar sesión';
    } else {
        btnSesion.innerText = 'Iniciar sesión';
    }
}

// Función para ocultar el botón (Agregar Observación)
function ocultarBoton() {
    const btnAgregar = document.getElementById('btn-agregar');
    
    btnAgregar.style.display = 'none'; // Oculta el botón usando la propiedad display
}

// Función para dar "Me gusta" a un ave
function darLike(titulo) {
    alert(`¡Gracias por tu "Me gusta"! Nuestra ${titulo} ahora tiene un nuevo fan.`); // Muestra la alarma con el nombre (titulo) del ave correspondiente
    
    let contadorSpan; // Aumentar el conteo de likes
    
    if (titulo === 'Golondrina') {
        contadorSpan = document.getElementById('likeContadorGolondrina');
    } else {
        contadorSpan = document.getElementById('likeContadorLoica');
    }
    
    let conteoActual = parseInt(contadorSpan.innerText); // Obtiene el valor actual del contador
    
    conteoActual++; // Incrementa el contador en 1

    contadorSpan.innerText = conteoActual; // Actualiza el número del contador después del like
}