//função para comparar os valores do array
function ordenarNotas(a, b) {
  return b - a;
}

//Função para pegar os valores
function pegarValores() {
  var values = [];
  var inputs = document.getElementsByClassName('nota')

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    values.push(Number(input.value));
  }

  return values;
}

//Ordenação das notas e retorno na página htlm
function notasAlunos() {
  var values = pegarValores();

  var colocacao = values.sort(ordenarNotas);

  document.getElementById('primeiroColocado').innerHTML = colocacao[0];
  document.getElementById('segundoColocado').innerHTML = colocacao[1];
  document.getElementById('terceiroColocado').innerHTML = colocacao[2];
}

// event.preventDefault();

// console.log()
// var notas = [];

// notas.push(Number(document.getElementById('nota1').value));
// notas.push(Number(document.getElementById('nota2').value));
// notas.push(Number(document.getElementById('nota3').value));
// notas.push(Number(document.getElementById('nota4').value));
// notas.push(Number(document.getElementById('nota5').value));

// notas.sort(ordenarNotas);

// console.log(notas)