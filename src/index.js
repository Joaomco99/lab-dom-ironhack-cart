// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  console.log('Calculating subtotal, yey!');
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let total = 0;
  for (let product of products) {
    updateSubtotal(product);
    const subtotal = product.querySelector('.subtotal span').innerText;
    total += Number(subtotal);
  }
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = total;


  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

const removeButtons = document.querySelectorAll('.btn-remove');

removeButtons.forEach((button) => {
  button.addEventListener('click', removeProduct);
});

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const wholeRow = target.parentNode.parentNode;
  wholeRow.remove();
}

// ITERATION 5

const createButton = document.querySelector('#create');
createButton.addEventListener('click', createProduct);

function createProduct() {
  const newProductName = document.querySelector('.create-product input[type=text]');
  const newProductPrice = document.querySelector('.create-product input[type=number]');

  const newProductRow = document.createElement('tr');

  newProductRow.classList.add('product');
  const tableBody = document.querySelector('tbody');
  tableBody.appendChild(newProductRow);

  newProductRow.innerHTML = `
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;
  const newRemoveButton = newProductRow.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);

  newProductName.value = '';
  newProductPrice.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
