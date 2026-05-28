const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = PRODUCTS[id];

document.getElementById("product-name").textContent = product.name;
document.getElementById("price").textContent = "GH₵ " + product.price;
document.getElementById("description").textContent = product.description;
document.getElementById("main-image").src = product.images[0];

// Gallery
const gallery = document.getElementById("gallery");
product.images.forEach((img) => {
  let image = document.createElement("img");
  image.src = img;
  image.width = 80;
  image.onclick = () => {
    document.getElementById("main-image").src = img;
  };
  gallery.appendChild(image);
});

// Specs
const specs = document.getElementById("specs");
for (let key in product.specs) {
  let li = document.createElement("li");
  li.textContent = `${key}: ${product.specs[key]}`;
  specs.appendChild(li);
}

//choose color of product
const selector = document.getElementById('colorSelect');

product.color.forEach(item => {
  const option = document.createElement('option');
  option.value = item;
  option.textContent = item;
  selector.appendChild(option);
});

selector.addEventListener('change', () => {
  selectedValue = selector.value;
  document.querySelector('.color div').style.background = selectedValue;
});


// Add to cart
document.getElementById("add-to-cart").onclick = () => {
  let qty = parseInt(document.getElementById("qty").value);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existing = cart.find((p) => p.name === product.name);
  let selectedValue = selector.value;
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({name: product.name, price: product.price, quantity: qty, color: selectedValue });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
};