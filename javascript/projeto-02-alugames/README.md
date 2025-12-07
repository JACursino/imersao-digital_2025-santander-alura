# AlugaGames - Sistema de Aluguel de Jogos de Tabuleiro

Projeto desenvolvido durante imersão em JavaScript para praticar lógica de programação e manipulação do DOM.

## Descrição

Sistema web que simula o aluguel de jogos de tabuleiro. Permite ao usuário visualizar jogos disponíveis, alugar e devolver jogos através de uma interface interativa.

## Funcionalidades

- Visualização de catálogo de jogos de tabuleiro
- Aluguel de jogos disponíveis
- Devolução de jogos alugados
- Indicação visual do status do jogo (disponível/alugado)
- Alteração dinâmica da interface conforme o estado do jogo

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Como Usar

1. Abra o arquivo `index.html` em um navegador
2. Clique no botão "Alugar" para alugar um jogo
3. O botão mudará para "Devolver" e a imagem ficará levemente escurecida
4. Clique em "Devolver" para devolver o jogo
5. O botão voltará para "Alugar" e a imagem retornará ao estado normal

## Conceitos Aplicados

- Manipulação do DOM
- Eventos de clique
- Condicionais (if/else)
- Seleção de elementos (getElementById, querySelector)
- Manipulação de classes CSS
- Alteração de conteúdo de elementos

## Função Principal

A função `alterarStatus()` é responsável por:
- Identificar qual jogo foi clicado
- Verificar o estado atual do jogo
- Alternar entre os estados "disponível" e "alugado"
- Atualizar a interface visual (texto do botão e aparência da imagem)

## Autor

Desenvolvido como exercício prático de JavaScript.

## Licença

Projeto educacional - livre para uso e modificação.
