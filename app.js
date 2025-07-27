var listaAmigos = [];
let mostrarListaAmigo = document.getElementById("listaAmigos");

function adicionarAmigo() {
  let nome = document.querySelector("input");
  if (nome.value == "") {
    alert("Nome inválido");
  } else {
    listaAmigos.push(nome.value);
  }
  mostrarListaAmigo.innerHTML = listaAmigos;
}

function sortearAmigo() {
  let numeroSorteado = parseInt(Math.random() * listaAmigos.length);
  let resultado = document.getElementById("resultado");
  resultado.innerHTML =
    "O amigo secreto sorteado é: " + listaAmigos[numeroSorteado];
}
