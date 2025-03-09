document.addEventListener('DOMContentLoaded', function() {
    // Obtenha os elementos necessários
    const unitPriceElement = document.getElementById('unitprice');
    const quantityElement = document.getElementById('quantity');
    const priceElement = document.getElementById('price');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('Total');
    const btnMinus = document.getElementById('btnMinus');
    const btnPlus = document.getElementById('btnPlus');

    // Converta os valores iniciais para números
    let unitPrice = parseFloat(unitPriceElement.textContent.replace('R$ ', ''));
    let quantity = parseInt(quantityElement.textContent);

    // Função para atualizar os preços
    function updatePrices() {
        const totalPrice = unitPrice * quantity;
        priceElement.textContent = 'R$ ' + totalPrice.toFixed(2);
        subtotalElement.textContent = 'R$ ' + totalPrice.toFixed(2);
        totalElement.textContent = 'R$ ' + totalPrice.toFixed(2);
    }

    // Evento de clique para diminuir a quantidade
    btnMinus.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updatePrices();
        }
    });

    // Evento de clique para aumentar a quantidade
    btnPlus.addEventListener('click', function() {
        quantity++;
        quantityElement.textContent = quantity;
        updatePrices();
    });

    // Inicialize os preços
    updatePrices();
});