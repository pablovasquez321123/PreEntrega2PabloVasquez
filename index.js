function registrarUsuario() {
    alert("Bienvenido a _Start la tienda gamer N1 del país! \n Ingrese sus datos.");

    let usuario = {};

    usuario.nombre = prompt("Nombre:");
    usuario.apellido = prompt("Apellido:");
    usuario.edad = Number(prompt("edad"));
    usuario.email = prompt("Ingrese su correo para recibir las mejores ofertas!");

    alert("Estos son tus datos:\n \n" +
        "Nombre: " + usuario.nombre + "\n" +
        "Apellido: " + usuario.apellido + "\n" +
        "Edad: " + usuario.edad + "\n" +
        "Correo electrónico: " + usuario.email);
    confirm ("es correcto? \n Acepta si es correcto de lo contrario cancela y vuelve a registrarte.")
}

registrarUsuario();

