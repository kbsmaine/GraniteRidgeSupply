
const products = [
    { name: "Tactical Fixed Blade", price: "$59.99" },
    { name: "EDC Folding Knife", price: "$39.99" }
];

const container = document.getElementById("product-container");

if (container) {
    products.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;
    });
}
