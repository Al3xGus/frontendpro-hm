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
    <button id="buyButton" onclick="showOrderForm('${product.name}', ${product.price})">Buy</button>
  `;
}

function showOrderForm(productName, productPrice) {
    const orderForm = `
    <h2>Order Form</h2>
    <form id="orderForm">
      <label for="fullName">Full Name:</label>
      <input type="text" id="fullName" required><br><br>
      
      <label for="city">City:</label>
      <select id="city" required>
        <option value="">Select City</option>
        <option value="city1">City 1</option>
        <option value="city2">City 2</option>
        <option value="city3">City 3</option>
      </select><br><br>
      
      <label for="novaPoshta">Nova Poshta Warehouse:</label>
      <input type="text" id="novaPoshta" required><br><br>
      
      <label for="paymentMethod">Payment Method:</label><br>
      <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" required>
      <label for="cashOnDelivery">Cash On Delivery</label><br>
      <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" required>
      <label for="creditCard">Credit Card Payment</label><br><br>
      
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" required><br><br>
      
      <label for="comment">Comment:</label><br>
      <textarea id="comment" rows="4" cols="50"></textarea><br><br>
      
      <input type="submit" value="Place Order">
    </form>
  `;
    document.getElementById('orderDetails').innerHTML = orderForm;

    document.getElementById('orderForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Зупиняємо стандартну подію

        const fullName = document.getElementById('fullName').value;
        const city = document.getElementById('city').value;
        const novaPoshta = document.getElementById('novaPoshta').value;
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
        const quantity = document.getElementById('quantity').value;
        const comment = document.getElementById('comment').value;

        if (fullName && city && novaPoshta && paymentMethod && quantity) {
            const orderDetails = `
        <h2>Order Details</h2>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Price:</strong> $${productPrice}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Nova Poshta Warehouse:</strong> ${novaPoshta}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `;
            document.getElementById('orderDetails').innerHTML += orderDetails;
        } else {
            alert('Please fill in all required fields.');
        }
    });
}
