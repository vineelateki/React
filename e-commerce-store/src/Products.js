import React from "react";

const products = [
  { id: 1, name: "Laptop", price: "$999" },
  { id: 2, name: "Smartphone", price: "$699" },
  { id: 3, name: "Headphones", price: "$199" },
];

function Products() {
  return (
    <div className="products-container">
      <h2>Product Catalogue</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
