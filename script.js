let cart = [];
let totalPrice = 0;

// Function to add item to cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    cartItems.innerHTML = "";
    totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalDisplay.textContent = `$${totalPrice.toFixed(2)}`;
}

// Add event listeners to cart buttons
document.querySelectorAll(".cart-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
        const productName = button.parentElement.querySelector("h3").textContent;
        const price = parseFloat(button.parentElement.querySelector(".price").textContent.replace("$", ""));
        addToCart(productName, price);
    });
});
