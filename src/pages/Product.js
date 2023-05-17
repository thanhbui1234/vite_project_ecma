import { products } from "@/data";
import ListProduct from "@/components/ListProduct";

const Product = () => {
  return `<div class='container'> <div class='row'>
  ${ListProduct({ products })}
   </div></div>`;
};

export default Product;
