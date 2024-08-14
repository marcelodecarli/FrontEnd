function criarParagrafo() {

    if (document.getElementById('nome').value == " " || document.getElementById('nome').value == "" || document.getElementById('nome').value == null) {
        document.getElementById('texto').innerHTML = "Por favor, insira um texto."
    } else {
        document.getElementById('texto').innerHTML = document.getElementById('nome').value}

}

document.getElementById("meuBotao").addEventListener("click", criarParagrafo);


document.getElementById("green").addEventListener('click', () => document.getElementById("tittle").style.color = "green")
document.getElementById("blue").addEventListener('click', () => document.getElementById("tittle").style.color = "blue")
document.getElementById("black").addEventListener('click', () => document.getElementById("tittle").style.color = "black")



document.getElementById("changeColor").addEventListener("mousemove", () => document.getElementById("changeColor").style.background = "black")
document.getElementById("changeColor").addEventListener("mouseout", () => document.getElementById("changeColor").style.background = "gray")


document.getElementById("nome").addEventListener('input', () => {document.getElementById('campoTexto').innerHTML = document.getElementById("nome").value.length})

