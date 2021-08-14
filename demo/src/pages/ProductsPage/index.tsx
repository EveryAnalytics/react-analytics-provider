import React from "react";
import { getQueryParams } from "../../utils/location";

const ProductsPage = () => {
  const { color } = getQueryParams<{ color: string }>();
  const products = getProductsByColor(color);

  return (
    <>
      <h1>{color} fruits</h1>
      <ul>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;

function getProductsByColor(color: string) {
  switch (color) {
    case "red":
      return ["Strawberry", "Tomato"];
    case "yellow":
      return ["Banana", "Lemon"];
    default:
      return [];
  }
}
