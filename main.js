const form = document.getElementById("form-contatos");
const nome = [];
const telefone = [];
const email = [];

let contador = 0;
let contatos = "";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    adicionarNomes();
    atualizaContato();
})


function adicionarNomes() {
    const inputNomeContato = document.getElementById("nome-contato");
    const inputTelefoneContato = document.getElementById("telefone-contato");
    const inputEmailContato = document.getElementById("email-contato");

    nome.push(inputNomeContato.value);
    telefone.push(inputTelefoneContato.value);
    email.push(inputEmailContato.value);

    contador++;

    let contato = `<tr>`;
    contato += `<td>${inputNomeContato.value}</td>`;
    contato += `<td>${inputTelefoneContato.value}</td>`;
    contato += `<td>${inputEmailContato.value}</td>`;
    contato += `</tr>`;

    contatos += contato;

    inputNomeContato.value = "";
    inputTelefoneContato.value = "";
    inputEmailContato.value = "";

}

function atualizaContato() {
    let listaNomes = "";
    let listaTelefones = "";
    let listaEmails = "";

    // Constrói as listas formatadas
    for (let i = 0; i < nome.length; i++) {
        listaNomes += `<li>${nome[i]}</li>`;
        listaTelefones += `<li>${telefone[i]}</li>`;
        listaEmails += `<li>${email[i]}</li>`;
    }

    document.getElementById("agenda-nome").innerHTML = `<ul>${listaNomes}</ul>`;
    document.getElementById("agenda-telefone").innerHTML = `<ul>${listaTelefones}</ul>`;
    document.getElementById("agenda-email").innerHTML = `<ul>${listaEmails}</ul>`;
    document.getElementById("contador").innerHTML = contador;
}
