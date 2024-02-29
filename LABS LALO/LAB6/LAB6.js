document.getElementById("password").addEventListener("input", validarPassword);
document.getElementById("confirmPassword").addEventListener("input", validarPassword);

function validarPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");
    var help = document.getElementById("help");

    if (password === "" || confirmPassword === "") {
        message.textContent = "";
    } else if (password !== confirmPassword) {
        message.textContent = "Las contraseñas no coinciden.";
        message.style.color = "red";
    } else if (!validarCriterios(password)) {
        message.textContent = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.";
        message.style.color = "orange";
    } else {
        message.textContent = "¡Contraseña segura y coincidente!";
        message.style.color = "green";
    }
}

function validarCriterios(password) {
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return strongRegex.test(password);
}

function resetearFormulario() {
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("password").focus();
}
