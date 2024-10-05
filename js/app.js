let calculo = 0;
limpar();


function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeproduto = produto.split('-')[0];
    let valor = produto.split('$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if(quantidade === '0' || quantidade === '') {
        alert('Por favor, insira a quantidade do produto');
        return;
    }

    let soma = quantidade * valor;


    let lista = document.getElementById('lista-produtos');
        lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeproduto} <span class="texto-azul"> R$${soma} </span>
        </section>`

    document.getElementById('quantidade').value = '';

    calculo = calculo + soma;    
    let total = document.getElementById('valor-total');
    total.innerHTML = `R$ ${calculo}`;

    

}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0'
}

