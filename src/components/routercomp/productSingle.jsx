import { Link, useParams } from "react-router-dom";
import products from "./dummy";

const ProductSingle = () => {
  const { productId } = useParams();
  const product = products.find((v) => v.id === productId);
  const { image, name } = product;
  return (
    <section>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Link to="/router/products">Back to Product</Link>
    </section>
  );
};

export default ProductSingle;
