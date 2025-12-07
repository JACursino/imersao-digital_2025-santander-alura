function sortear(){ /* Função principal para sortear os números */
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  //  VALIDAÇÃO 1: Verifica se os campos estão preenchidos
  if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
    alert('Por favor, preencha todos os campos!');
    return; // Para a execução da função
  }

  //-VALIDAÇÃO 2: Verifica se "De" é menor que "Até"
  if (de >= ate) {
    alert('O campo "Do número" deve ser menor que "Até o número"!');
    return;
  }

  // VALIDAÇÃO 3: Verifica se a quantidade é possível
  if (quantidade > (ate - de + 1)) {
    alert('A quantidade de números solicitada é maior que o intervalo disponível!');
    return;
  }

  // VALIDAÇÃO 4: Verifica se a quantidade é positiva
  if (quantidade <= 0) {
    alert('A quantidade deve ser maior que zero!');
    return;
  }


  let sorteados = []; /* Array para armazenar os números sorteados */
  let numero;

  for (let i = 0; i < quantidade; i++) { /* Loop para sortear a quantidade desejada de números */
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) { /* Verifica se o número já foi sorteado retornando falso ou verdadeiro */
      numero = obterNumeroAleatorio(de, ate); /* Sorteia um novo número */
    }
    sorteados.push(numero); /* Adiciona o número sorteado ao array */

  }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`; /* Exibe os números sorteados */
  alterarStatusBotao(); /* Chama a função para alterar o status do botão de reiniciar */

}
function obterNumeroAleatorio(min, max) { /* Função para obter um número aleatório entre min e max */
  return Math.floor(Math.random() * (max - min + 1)) + min; /* Gera o número aleatório */
}

function alterarStatusBotao() { /* Função para alterar o status do botão de reiniciar */
  let botao = document.getElementById('btn-reiniciar');
  console.log('Botao encontrado:', botao); /* Verifica se o botão foi encontrado */
  console.log('Classes atuais do botão:', botao.classList); /* Verifica as classes atuais do botão */

  if (botao.classList.contains('container__botao-desabilitado')) {

    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
    botao.removeAttribute('disabled'); /* Remove o atributo 'disabled' para habilitar botão */
   } else {
    botao.classList.remove('container_botao');
    botao.classList.add('container__botao-desabilitado');
    botao.setAttribute('disabled', 'true'); /* Adiciona o atributo 'disabled' para desabilitar botão */
   }
}

function reiniciar(){ /* Função para reiniciar os campos e o resultado */
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}

