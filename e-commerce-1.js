const products = [
  { id: 1, name: "T-shirt", price: 19.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Sneakers", price: 49.99, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Backpack", price: 29.99, image: "https://via.placeholder.com/150" }
];

const cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").innerText = count;
}

function openCart() {
  const modal = document.getElementById("cart-modal");
  const itemsList = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");

  itemsList.innerHTML = "";
  let totalAmount = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    itemsList.appendChild(li);
    totalAmount += item.price * item.quantity;
  });

  total.innerText = totalAmount.toFixed(2);
  modal.classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

document.getElementById("cart-button").addEventListener("click", openCart);

// Initialize
renderProducts();
