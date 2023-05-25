function encriptar() {
    var input = document.querySelector("#input").value.toLowerCase();
    var text_encripted = "";

    if (input.trim().length != 0) {
        for (x = 0; x < input.length; x++) {
            if (input[x] == 'e') {
                text_encripted += "enter";
            }
            else if (input[x] == 'i') {
                text_encripted += "imes";
            }
            else if (input[x] == 'a') {
                text_encripted += "ai";
            }
            else if (input[x] == 'o') {
                text_encripted += "ober";
            }
            else if (input[x] == 'u') {
                text_encripted += "ufat";
            } else {
                text_encripted += input[x];
            }
        }
        document.getElementById("desencriptar-empty").style.display = "none";
        document.getElementById("desencriptar-result").style.display = "block";
        document.querySelector("#output").value = text_encripted;
    } else {
        alert("Entre com um texto válido");
    }

}
function desencriptar() {
    var input = document.querySelector("#input").value.toLowerCase();
    var text_desencripted = "";


    if (input.trim().length != 0) {
        text_desencripted = input.replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("imes", "i").replaceAll("enter", "e").replaceAll("ufat", "u");
        document.getElementById("desencriptar-empty").style.display = "none";
        document.getElementById("desencriptar-result").style.display = "block";
        document.querySelector("#output").value = text_desencripted;

    } else {
        alert("Entre com um texto válido");
    }
}

function copy() {
    var output = document.querySelector("#output");
    var message = document.querySelector("#message");
    output.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    message.innerHTML = "Texto Copiado";
    setTimeout(() => message.innerHTML = " ", 1000)
}
var btn_encriptar = document.querySelector("#encriptar-btn");
var btn_desencriptar = document.querySelector("#desencriptar-btn");
var btn_copy = document.querySelector("#copy");
btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;
btn_copy.onclick = copy;