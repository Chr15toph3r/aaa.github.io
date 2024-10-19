function cambiarTextoBoton() {
    const boton = document.getElementById("btn_final");
    if (window.innerWidth <= 590) {
        boton.textContent = "Get a free quote";
    } else {
        boton.textContent = "¡Obténla ya!";
    }
}

cambiarTextoBoton();

window.addEventListener("resize", cambiarTextoBoton);