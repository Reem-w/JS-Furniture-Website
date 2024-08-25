/**   -->Its in a script tag in products.html
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed , from products");
  displayCartCount();
});
*/

var products = [
  {
    id: 1,
    name: "single Chair",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "chair",
    img: "./images/chair1.jpg",
    price: 1000,
  },
  {
    id: 2,
    name: "Aeron Chair",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "chair",
    img: "./images/chair2.jpg",
    price: 2000,
  },
  {
    id: 3,
    name: "Bergère Chair",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "chair",
    img: "./images/chair3.jpg",
    price: 1500,
  },
  {
    id: 4,
    name: "Twin Chairs",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "chair",
    img: "./images/chair4.jpg",
    price: 2500,
  },
  {
    id: 5,
    name: "Modern Sofa",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "sofa",
    img: "./images/sofa1.jpg",
    price: 6000,
  },
  {
    id: 6,
    name: "Clamour Sofa",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "sofa",
    img: "./images/sofa2.jpg",
    price: 7000,
  },
  {
    id: 7,
    name: "Corson Sofa",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "sofa",
    img: "./images/sofa3.jpg",
    price: 7500,
  },
  {
    id: 8,
    name: "Cameron Sofa",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "sofa",
    img: "./images/sofa4.jpg",
    price: 6000,
  },
  {
    id: 9,
    name: "Cynthic Sofa",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "sofa",
    img: "./images/sofa5.jpg",
    price: 5000,
  },
  {
    id: 10,
    name: "TV Table",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "table",
    img: "./images/TVUnit1.jpg",
    price: 1000,
  },
  {
    id: 11,
    name: "TV Table",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "table",
    img: "./images/TVUnit2.jpg",
    price: 1500,
  },
  {
    id: 12,
    name: "TV Table",
    details:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquetvelit",
    category: "table",
    img: "./images/TVUnit3.jpg",
    price: 1600,
  },
];
var cartSection = document.getElementById("cartContainer");
var totalSpan = document.getElementById("Total");

function getCookie(name) {
  var value = "; " + document.cookie;
  var splits = value.split("; " + name + "=");
  if (splits.length == 2) return splits.pop().split(";").shift();
}

function deleteCookie(key) {
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() - 1);
  document.cookie = key + "=deleting;expires=" + expireDate;
}

//Put Name from cookies in navbar
var Name = document.querySelectorAll(".navbar-nav a")[0];
Name.innerHTML = "hello, " + getCookie("name");

//Logout Function
function logout() {
  deleteCookie("name");
  window.location.replace("./login.html");
}

var productsDiv = document.getElementById("products");
console.log(productsDiv);

function displayAllProducts(products) {
  productsDiv.innerHTML = "";
  products.forEach((product) => {
    var productCard = document.createElement("div");
    productCard.className = "col-3 ";
    productCard.innerHTML = `
        <div class="card mb-5 text-center" style="width: 17rem;">
            <img src=${product.img} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6>$${product.price}</h6>
                <div class=" d-flex justify-content-center">
                <a  class="btn btn btn-outline-success mx-3 " onclick='addToCart( ${product.id},
  "${product.name}",
  "${product.img}",
  "${product.price}")'> + </a>
                <a class="btn btn btn-outline-secondary " onclick="openDetails(${product.id})">More Details</a>
                
                </div>
            
            </div>
        </div>
        `;
    productsDiv.appendChild(productCard);
  });
}

function filterProducts(category) {
  var filteredProducts = products;
  if (category != "all") {
    filteredProducts = products.filter(
      (product) => product.category == category
    );
  }

  console.log(filteredProducts);
  displayAllProducts(filteredProducts);
}

//Display all Products when page load
displayAllProducts(products);

function openDetails(productId) {
  var product = products.find((product) => product.id == productId);
  console.log(product);

  //creating the modal
  const productModal = new bootstrap.Modal(
    document.getElementById("productModal")
  );

  var productImg = document.getElementById("productImage");
  var productName = document.getElementById("productName");
  var productDetails = document.getElementById("productDescription");
  var productPrice = document.getElementById("productPrice");
  var addButton = document.getElementById("addButton");

  //Clear previous event listeners to prevent multiple bindings: (if
  // openDetails is called multiple times the event listeners do not stack up,
  // leading to multiple executions of addToCart and hide)
  addButton.replaceWith(addButton.cloneNode(true));
  addButton = document.getElementById("addButton");

  addButton.addEventListener("click", function () {
    addToCart(product.id, product.name, product.img, product.price);
    productModal.hide();
  });

  productImg.setAttribute("src", product.img);
  productName.innerHTML = product.name;
  productDetails.innerHTML = product.details;
  productPrice.innerHTML = product.price;

  productModal.show();
}

//ArrowUP
var scrollBtn = document.getElementById("arrowUp2");

window.onscroll = scrollUpFunction;

function scrollUpFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.onclick = function () {
  window.scroll(0, 0);
};
