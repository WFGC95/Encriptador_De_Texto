const textArea = document.querySelector(".Text_area");
const Mensaje_Encriptado = document.querySelector(".Mensaje_Encriptado");

// Función para encriptar el texto
function btnEncriptador() {
    const textoEncriptado = EnCrIpTaR(textArea.value);
    Mensaje_Encriptado.value = textoEncriptado;
    textArea.value = "";
    Mensaje_Encriptado.style.backgroundImage = "none"; // Oculta la imagen de fondo
}

// Función para desencriptar el texto
function btnDesencriptar() {
    const textoDesencriptado = dEsEnCrIpTaR(textArea.value);
    Mensaje_Encriptado.value = textoDesencriptado;
    textArea.value = "";

    // Restaura la imagen de fondo solo si el textarea está vacío
    if (Mensaje_Encriptado.value === "") {
        Mensaje_Encriptado.style.backgroundImage = "url('/Imagen/Muñeco.png')";
    } else {
        Mensaje_Encriptado.style.backgroundImage = "none";
    }
}

// Función para encriptar el texto
function EnCrIpTaR(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Función para desencriptar el texto
function dEsEnCrIpTaR(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    Mensaje_Encriptado.select(); // Selecciona el texto encriptado
    document.execCommand("copy"); // Copia el texto seleccionado al portapapeles
    Mensaje_Encriptado.value = ""; // Limpia el textarea del mensaje encriptado

    // Espera un poco antes de restaurar la imagen
    setTimeout(() => {
        Mensaje_Encriptado.style.backgroundImage = "url('/Imagen/Muñeco.png')"; // Restaura la imagen de fondo
    }, 100); // Ajusta el tiempo si es necesario
}
