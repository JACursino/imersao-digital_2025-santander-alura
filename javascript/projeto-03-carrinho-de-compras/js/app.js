/* Sempre que a pagina for iniciada, os valores serão zerados, iniciando assim um novo procedimento, por este motivo alguns comandos devem estar ficar por fora da funcao.*/
let totalGeral; /* Variavel global para armazenar o valor total do carrinho */
limparCarrinho(); /* Chama a funcao limparCampos para zerar os campos ao iniciar a pagina */

function adicionarProduto() {
  //recuperar valores dos inputs= nomes, valores e quantidades
  let produto = document.getElementById('produto').value; /*recupera o valor do select */
  let nomeProduto = produto.split('-')[0].trim(); /*a função do split é separar o nome do valor */
  let valorUnitario = parseFloat(produto.split('R$')[1]); /* separa o nome do valor */
  let quantidade = parseInt(document.getElementById('quantidade').value);

  // Validação básica para inciar o processo de compra
  if (!quantidade || quantidade <= 0) {
    alert('Por favor, insira uma quantidade válida!');
    return;
  }

  // Verificar se o produto já existe no carrinho
  let carrinho = document.getElementById('lista-produtos');
  let produtosExistentes = carrinho.getElementsByClassName('carrinho__produtos__produto');
  let produtoEncontrado = false;

  // Percorrer os produtos existentes no carrinho
  for (let i = 0; i < produtosExistentes.length; i++) {
    let textoProduto = produtosExistentes[i].textContent;

    // Verificar se o nome do produto está no texto
    if (textoProduto.includes(nomeProduto)) {
      produtoEncontrado = true;

      // Extrair a quantidade atual
      let quantidadeAtual = parseInt(textoProduto.split('x')[0]);

      // Calcular nova quantidade
      let novaQuantidade = quantidadeAtual + quantidade;

      // Calcular novo preço total
      let novoPreco = novaQuantidade * valorUnitario;
      let precoFormatado = novoPreco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      // Atualizar o HTML do produto existente
      produtosExistentes[i].innerHTML = `<span class="texto-azul">${novaQuantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precoFormatado}</span>`;

      // Atualizar o valor total (remover o preço antigo e adicionar o novo)
      let precoAntigo = quantidadeAtual * valorUnitario;
      totalGeral = totalGeral - precoAntigo + novoPreco;

      break;
    }
  }

  // Se o produto não foi encontrado, adicionar novo item
  if (!produtoEncontrado) {
    // calcula o preço total do produto
    let preco = quantidade * valorUnitario;

    // Formatar o preço para exibir sempre duas casas decimais
    let precoFormatado = preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    //adicionar o produto no carrinho (tabela)
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precoFormatado}</span>
        </section>`;

    //atualizar o valor total do carrinho
    totalGeral = totalGeral + preco;
  }

  // Atualizar exibição do valor total
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  document.getElementById('quantidade').value = 0; /* zera o campo quantidade apos adicionar o produto */
}

// acao de limpar o carrinho de compras
function limparCarrinho(){
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}
