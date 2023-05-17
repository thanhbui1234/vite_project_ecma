import { products } from "@/data";

const ProductDetails = ({ id }) => {
  const product = products.find((product) => product.id === +id); // +id to convert string to number
  if (!product) return null;
  return `<div>${product.name}</div>`;
};

export default ProductDetails;
