const productsData = {
    category1: [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 }
    ],
    category2: [
        { id: 3, name: 'Product 3', price: 15 },
        { id: 4, name: 'Product 4', price: 25 }
    ],
    category3: [
        { id: 5, name: 'Product 5', price: 30 },
        { id: 6, name: 'Product 6', price: 40 }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', buy);

    // Initially show categories
    showProducts('category1');
});

function showProducts(category) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    productsData[category].forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = product.name;
        listItem.onclick = () => showProductDetails(product);
        productList.appendChild(listItem);
    });
}

function showProductDetails(product) {
    const details = document.getElementById('details');
    details.innerHTML = `
    <p>Name: ${product.name}</p>
    <p>Price: $${product.price}</p>
  `;
}

function buy() {
    alert('Product purchased!');
    document.getElementById('details').innerHTML = '';
}
