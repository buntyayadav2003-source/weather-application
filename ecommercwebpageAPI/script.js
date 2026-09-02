async function fetchData() {
    await fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => redenderProducts(data)) 
        .catch(err => console.log(err))
}

function redenderProducts(products) {
    document.querySelector("#prods").innerHTML = products.map((product) => `
        <div class="col">
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" 
                     class="card-img-top p-3" 
                     alt="${product.title}" 
                     style="height: 200px; object-fit: contain;">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h6 class="card-title text-truncate" title="${product.title}">${product.title}</h6>
                        <p class="card-text text-muted" style="font-size: 0.85rem;">
                            ${product.description.slice(0, 50) + '...'}
                        </p>
                    </div>
                    <div>
                        <div class="mb-2">
                            <span class="badge text-bg-warning">${product.category}</span>
                        </div>
                        <p class="fw-bold mb-2">Price: ₹${product.price}</p>
                        <a href="#" class="btn btn-primary btn-sm w-100">View Product</a>
                    </div>
                </div>
            </div>
        </div>
    `).join("")
}

fetchData()