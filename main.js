document.getElementById("formAB").addEventListener("submit", function(event) {
    event.preventDefault();

    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
        document.getElementById("mensagem").innerHTML = "Valores válidos!";
        document.getElementById("mensagem").style.color = "green";
    } else {
        document.getElementById("mensagem").innerHTML = "Valores inválidos";
        document.getElementById("mensagem").style.color = "red";
    }
        });
