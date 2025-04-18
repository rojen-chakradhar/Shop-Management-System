const form = document.getElementById('product-form');
const nameInput = document.getElementById('product-name');
const priceInput = document.getElementById('product-price');
const qtyInput = document.getElementById('product-qty');
const tableBody = document.getElementById('product-table');

let products = JSON.parse(localStorage.getItem('products')) || [];
let editingIndex = null;

function saveProducts() {
  localStorage.setItem('products', JSON.stringify(products));
}

function renderProducts() {
  tableBody.innerHTML = '';
  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>₨${product.price}</td>
      <td>${product.qty}</td>
      <td>₨${product.price * product.qty}</td>
      <td class="actions">
        <button onclick="editProduct(${index})">✏️</button>
        <button onclick="deleteProduct(${index})">🗑</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newProduct = {
    name: nameInput.value,
    price: parseFloat(priceInput.value),
    qty: parseInt(qtyInput.value),
  };

  if (editingIndex !== null) {
    products[editingIndex] = newProduct;
    editingIndex = null;
  } else {
    products.push(newProduct);
  }

  saveProducts();
  renderProducts();
  form.reset();
});

function deleteProduct(index) {
  products.splice(index, 1);
  saveProducts();
  renderProducts();
}

function editProduct(index) {
  const product = products[index];
  nameInput.value = product.name;
  priceInput.value = product.price;
  qtyInput.value = product.qty;
  editingIndex = index;
}

renderProducts();