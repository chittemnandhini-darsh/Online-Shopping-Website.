let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart!");
}

function updateCart() {

    let cartItems = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let cartTotal = document.getElementById("cart-total");

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "0";
        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {

        total += item.price;

        let div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });

    cartTotal.textContent = total;
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for shopping with ShopEasy!");

    cart = [];

    updateCart();
}

function contactForm(event) {

    event.preventDefault();

    alert("Your message has been sent successfully!");

    event.target.reset();
}