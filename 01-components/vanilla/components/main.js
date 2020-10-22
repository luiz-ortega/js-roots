const productos = [
  {
    id: "abc123",
    nome: "Product 01",
    price:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    description: 300,
    image: "https://www.colorhexa.com/007bff.png",
  },
  {
    id: "abc124",
    nome: "Product 02",
    price:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    description: 100,
    image: "https://www.colorhexa.com/007bff.png",
  },
  {
    id: "abc125",
    nome: "Product 03",
    price:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    description: 200,
    image: "https://www.colorhexa.com/007bff.png",
  },
];

function renderProduct() {
  return `
    <div class="col-sm-4 mb-3">
      <div class="col-sm-12">
        <div class="row shooping_item">
          <div class="card" style="width: 18rem">
            <img
              src="https://www.colorhexa.com/007bff.png"
              class="card-img-top"
              alt="..."
            />
            <div
              class="card-body d-flex flex-column justify-content-center"
            >
              <h5 class="card-title text-center">Product 01</h5>
              <small>R$500,00</small>
              <p class="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
              <button class="btn btn-primary text-center">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.querySelector(".productList").innerHTML = renderProduct();
