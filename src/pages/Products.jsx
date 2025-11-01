import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Products = () => {
  const { products } = useLoaderData();
  // console.log(products);

  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {products?.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default Products;
