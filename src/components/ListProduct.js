const ListProduct = ({ products }) => {
  return `${products.map(
    (product) =>
      ` <div class='col'>
     <h3> <a href="/product/${product.id}"> ${product.name} </a></h3>
     <p> ${product.price}</p>  
      </div>  `
  )}`;
};
export default ListProduct;
