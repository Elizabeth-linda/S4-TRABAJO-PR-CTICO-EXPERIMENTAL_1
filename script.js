document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();

  //Validación Nombre
  if (nombre === "") {
    alert("El nombre no puede estar vacío.");
    return;
  }
  if (nombre.length < 5) {
    alert("El nombre debe tener al menos 5 caracteres.");
    return;
  }
  const regexNombre = /^[a-zA-ZÀ-ÿ\s]+$/; // Solo letras y espacios
  if (!regexNombre.test(nombre)) {
    alert("El nombre solo debe contener letras y espacios.");
    return;
  }

  // Validación Correo
  if (correo === "") {
    alert("El correo no puede estar vacío.");
    return;
  }
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    alert("Ingresa un correo válido, por ejemplo: usuario@dominio.com.");
    return;
  }

  // Validación Contraseña
  if (password === "") {
    alert("La contraseña no puede estar vacía.");
    return;
  }
  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }
  const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.]).+$/;
  if (!regexPassword.test(password)) {
    alert("La contraseña debe incluir al menos una letra mayúscula, un número y un símbolo especial.");
    return;
  }


  alert("Registro exitoso. Bienvenido al Aquelarre del Señor Oscuro.");
});
