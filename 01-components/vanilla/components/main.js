const products = [
  {
    id: "abc123",
    name: "Product 01",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 300,
    image: "https://www.colorhexa.com/007bff.png",
  },
  {
    id: "abc124",
    name: "Product 02",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 100,
    image: "https://www.colorhexa.com/007bff.png",
  },
  {
    id: "abc125",
    name: "Product 03",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 200,
    image: "https://www.colorhexa.com/007bff.png",
  },
];

function renderProduct(product) {
  return `
    <div class="col-sm-4 mb-3">
      <div class="col-sm-12">
        <div class="row shooping_item">
          <div class="card" style="width: 18rem">
            <img
              src=${product.image}
              class="card-img-top"
              alt="..."
            />
            <div
              class="card-body d-flex flex-column justify-content-center"
            >
              <h5 class="card-title text-center">${product.name}</h5>
              <small>R$${product.price}</small>
              <p class="card-text">
                ${product.description}
              </p>
              <button class="btn btn-primary text-center">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProducts() {
  let html = "";
  for (let i = 0; i < products.length; i++) {
    html = html + renderProduct(products[i]);
  }
  return html;
}

document.querySelector(".productList").innerHTML = renderProducts();
