  function alterarStatus(numero){ /* Recebe o número do jogo como parâmetro */
      // Montar o ID completo
    let id = 'game-' + numero;  // Se passar 1, vira "game-1"
    let jogo = document.getElementById(id); /* Seleciona o elemento do jogo pelo ID */

    //Lembrar de incluir o ponto (.) antes da classe para querySelector
    let imagem = jogo.querySelector(".dashboard__item__img"); /* Seleciona a imagem dentro do jogo (*/
    let botao = jogo.querySelector(".dashboard__item__button"); /* Seleciona o botão dentro do jogo */

    if (botao.textContent == 'Alugar') { /* Verifica o texto do botão */
        // ALUGAR
        botao.textContent = 'Devolver'; /* Altera o texto do botão */

        // Diferente do tratamento do querySelector, no classList não precisa do ponto (.), pois não é um seletor
        imagem.classList.add('dashboard__item__img--rented'); /* Adiciona a classe de imagem alugada */
        botao.classList.add('dashboard__item__button--return'); /* Adiciona a classe de devolução */

    } else {
        // DEVOLVER
        botao.textContent = 'Alugar'; /* Altera o texto do botão */
        imagem.classList.remove('dashboard__item__img--rented'); /* Remove a classe de imagem alugada */
        botao.classList.remove('dashboard__item__button--return'); /* Remove a classe de devolução */
    }

  }
