let productList = document.getElementById('cart-list');
const removeBtn = document.querySelector('.remove-btn');
let emptyCart = document.getElementById('empty-cart');
let footer = document.getElementById('footer');
const productLenght = document.querySelector('.total-amount');
const clearBtn = document.getElementById('clear');
const increaseBtn = document.getElementById('.increaseBtn');
const decreaseBtn = document.getElementById('.decreaseBtn');
let totalPrice = document.getElementById('total-price');

let totalPriceval = 2199.96;
let isempty = false;


let products = [
    {
        name: 'Samsung Galaxy S8',
        price: 399.99,
        quantity: 1,
        url: "https://www.course-api.com/images/cart/phone-1.png"
    },
    {
        name: 'Google Pixel',
        price: 499.99,
        quantity: 1,
        url: "https://www.course-api.com/images/cart/phone-2.png"
    },
    {
        name: "Xiaomi Redmi Note 2",
        price: 699.99,
        quantity: 1,
        url: "https://www.course-api.com/images/cart/phone-3.png"
    },
    {
        name: "Samsung Galaxy S7",
        price: 599.99,
        quantity: 1,
        url: "https://www.course-api.com/images/cart/phone-4.png"
    },

];

function addToList() {
    // Generate the HTML code for each product
    let html = '';
    products.forEach((product, index) => {
      html += `
      <article class="cart-item">
      <img src="${product.url}" alt="Samsung Galaxy S8">
      <div>
          <h5>${product.name}</h5>
          <span class="item-price">$${product.price}</span>
          <button class="remove-btn" onclick="removeBtnClick(${index})">remove</button>
      </div>
      <div>
          <button class="amount-btn" id="increaseBtn" onclick="increaseBtnClick(${index})">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="amount-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
              </svg>
          </button>
          <span class="amount">${product.quantity}</span>
          <button class="amount-btn" id="decreaseBtn" onclick="decreaseBtnClick(${index})">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="amount-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
          </button>
      </div>
  </article>
      `;
    });
  
    // Set the generated HTML code as the innerHTML of the 'cart-list' div
    productList.innerHTML = html;
  }
 



function decreaseBtnClick(index){
    if(products.length != 1){
        console.log(index)
        products[index].quantity--;
        totalPriceval = totalPriceval - products[index].price;
        totalPrice.innerHTML = `$${totalPriceval.toFixed(2)}`;
    }
    addToList();
}
function increaseBtnClick(index){
    console.log(index)
        products[index].quantity++;
        totalPriceval = totalPriceval + products[index].price;
        totalPrice.innerHTML = `$${totalPriceval.toFixed(2)}`;
        addToList();
}

//Remove each product from the list
function removeBtnClick(index) {
  let price = products[index].price * products[index].quantity;
  totalPriceval = totalPriceval - price;
  totalPrice.innerHTML = `$${totalPriceval.toFixed(2)}`;
  products.splice(index, 1); // Remove the element at the specified index
  productLenght.innerHTML = products.length;
  addToList();
  isEmpty();
}

function isEmpty(){
    if(products.length == 0){
            isempty = true;
            footer.style.display = 'none';
            emptyCart.style.display = 'block';
        } else {
            
        }
}

//clear all products
function clearBtnClick(){
    alert('Decrease');
    addToList();

}


setInterval(addToList, 1000);