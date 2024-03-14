const form = document.getElementById('form-lista');
let linhas = '';
let nome = [];
let telefone = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome');
    const inputTelefoneContato = document.getElementById('telefone');

    if (nome.includes(inputNomeContato.value)) {
        alert(`Este contato: ${inputNomeContato.value} já foi salvo`);
    } else {
    nome.push(inputNomeContato.value);
    telefone.push(parseFloat(inputTelefoneContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

