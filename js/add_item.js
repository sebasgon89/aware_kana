document.addEventListener("DOMContentLoaded", () => {
  const buttonsAdd = document.querySelectorAll(".addToCartButton");
  console.log(buttonsAdd);

  buttonsAdd.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const name = button.getAttribute("data-name");
      const price = button.getAttribute("data-price");
      
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({name, price});

      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Product added to cart!");

    });
  });

});

