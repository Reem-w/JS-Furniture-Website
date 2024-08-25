document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed, from cart");
    displayAllCart();
    loadCount();
    displayCartCount();
});

var cart = [];
var cartCount = 0;
// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

//get data from local storage and override  (cart variable) with it
function loadCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

// Save count to localStorage
function saveCount() {
  localStorage.setItem("count", cartCount);
}

//get data from local storage and override  (count variable) with it
function loadCount() {
  const storedCount = localStorage.getItem("count");
  if (storedCount) {
    cartCount = Number(storedCount);
  }
}



var cartSection = document.getElementById("cartContainer");
var totalSpan = document.getElementById("Total");
var total = 0;

function displayAllCart() {
    //get updated data from local storage
  loadCart();
  console.log("Cart Now :", cart);
  total = 0;
  totalSpan.innerHTML = "";
  cartSection.innerHTML = "";
  cart.forEach((item) => {
    var plusId = `plus-${item.id}`;
    var minusId = `minus-${item.id}`;
    var itemCard = document.createElement("div");
    itemCard.className =
      " d-flex justify-content-between align-items-center mx-5 mt-4 p-3 mb-3 bg-white rounded w-8";
    itemCard.innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
            <img src=${item.img} class="rounded" style="width:60px;height:60px">
            <h6 class="mx-2"> ${item.name}</h6>
        </div>
        <div class="d-flex justify-content-center align-items-center">
        <p class="m-0">Quantity: ${item.count}</p>
        
        <button class="btn btn-success m-2" id=${plusId} )'> + </button>
        <button class="btn btn-danger" id=${minusId}> - </button>
        </div>
        <p>Price: $${item.count * item.price}</p>
        <button class="btn btn-light" onclick="removeItem(${item.id},${
      item.count
    })">Remove</button>
        `;
    cartSection.appendChild(itemCard);
    total += item.count * item.price;

   
    document.getElementById(plusId).addEventListener("click", function () {
      addToCart(item.id, item.name, item.img, item.price);
      displayAllCart();
    });

    document.getElementById(minusId).addEventListener("click", function () {
      minusFromCart(item.id);
    });
  });
    
  totalSpan.innerHTML = total;
}

//display all cart items when the page is loaded
displayAllCart();

function addToCart(id, Name, img, price) {
  price = Number(price);
  var findItem = cart.find((item) => item.id == id);
  console.log(findItem);
  if (findItem) {
    findItem.count++;
  } else {
    findItem = {};
    findItem.id = id;
    findItem.name = Name;
    findItem.img = img;
    findItem.price = price;
    findItem.count = 1;
    cart.push(findItem);
    }
    loadCount();
    cartCount++;
    saveCount();
    // loadCount();
    displayCartCount();

    console.log("cart after adding: ", cart);

    //update local storage 
    saveCart(); 
}

function minusFromCart(id) {
  item = cart.find((item) => item.id == id);
    if (item.count > 1) {
        item.count--;
        loadCount();
        cartCount--;
        saveCount();
        displayCartCount();
        saveCart();
        displayAllCart();
  }
    else {
        removeItem(item.id, item.count);
  }
}

function removeItem(id,itemCount) {
    cart = cart.filter(item => item.id != id);
    saveCart();
    loadCount();

    console.log("From remove:");
    console.log(cart);
    console.log("cart count: ,", cartCount);
    console.log("item count: ,", itemCount);
    console.log("minus: ", cartCount - itemCount); 
    
    cartCount -= itemCount;
    saveCount();
    displayCartCount();
    displayAllCart();
}

function checkout(){
    if (cart.length == 0) {
        alert("Please add Items To cart First");
    }
    else {
        window.location.assign("./orderPlaced.html");
        cart = [];
        saveCart();
        loadCart();
        cartCount = 0;
        saveCount();
        loadCount();
    }
}

function displayCartCount(){
    loadCount();
    var countSpans = document.getElementsByClassName("countSpan");
    console.log("count" ,countSpans)
    for (var i = 0; i < countSpans.length; i++){
        countSpans[i].innerHTML = cartCount;
    }
}

