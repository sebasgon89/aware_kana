document.addEventListener("DOMContentLoaded", () => {
  const cartTable = document.getElementById("cartTable");
  const cartTotal = document.getElementById("cartTotal");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];


  const renderCart = () => {
    cartTable.innerHTML = "";

    if (cart.length === 0) {
      cartTable.innerHTML = "<tr><td colspan='3'>Cart is empty</td></tr>";
      cartTotal.textContent = "0";
      return; 
    }
    
    cart.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>
          <a class="formButton" data-index="${index}">Remove</a>
        </td>
      `;
      cartTable.appendChild(row);
    });

    calculateTotal();
  };

  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

    cartTotal.textContent = "Total: "+ total;
  }

  renderCart();
  
  cartTable.addEventListener("click", (event) => {
    if (event.target.classList.contains("formButton")){
      const index = event.target.getAttribute("data-index");
      cart.splice(index, 1);
  
      localStorage.setItem("cart", JSON.stringify(cart));
  
      renderCart();
    }
  });

});