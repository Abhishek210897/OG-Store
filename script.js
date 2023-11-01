document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const productID = button.getAttribute("data-product");
            // You can implement logic to handle the purchase here
            // For example, opening a payment modal or adding the product to a shopping cart.
            console.log("Buy button clicked for product ID: " + productID);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const productID = button.getAttribute("data-product");
            // You can implement logic to handle the purchase here
            // For example, opening a payment modal or adding the product to a shopping cart.
            console.log("Buy button clicked for product ID: " + productID);
        });
    });
});
