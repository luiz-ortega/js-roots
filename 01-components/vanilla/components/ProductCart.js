const cartProducts = [
  {
    id: "abc123",
    name: "Product 01",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 300,
    image: "https://www.colorhexa.com/007bff.png",
  },
];

function renderProductCart(product) {
  return `
    <div class="card cart_item">
      <div class="card-body d-flex flex-column justify-content-center">
        <h5 class="card-title text-center">${product.name}</h5>
        <p class="card-text">Price: R$${product.price} | Quantity: 2</p>
        <p class="card-text">Valor: R$600,00</p>
        <button class="btn btn-danger text-center">Remove</button>
      </div>
    </div>
  `;
}

function renderProductCarts() {
  let html = "";
  for (let i = 0; i < cartProducts.length; i++) {
    html = html + renderProductCart(cartProducts[i]);
  }
  return html;
}

document.querySelector(".cart_items").innerHTML = renderProductCarts();
