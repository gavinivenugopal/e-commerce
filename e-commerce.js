// script.js

let cart = [];
let cartButton = document.getElementById('cart-button');
let cartPopup = document.getElementById('cart-popup');
let cartItems = document.getElementById('cart-items');
let cartTotal = document.getElementById('cart-total');

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartButton.innerHTML = `Cart (${cart.length})`;

    let total = 0;
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        total += item.price;
        let li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });

    cartTotal.innerHTML = total.toFixed(2);
}

function toggleCart() {
    cartPopup.style.display = cartPopup.style.display === 'flex' ? 'none' : 'flex';
}

function clearCart() {
    cart = [];
    updateCart();
}
