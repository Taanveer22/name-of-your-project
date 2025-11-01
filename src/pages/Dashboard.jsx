import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utilities";
import Card from "../components/Card";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const storedProducts = getFromLocalStorage();
    setProducts(storedProducts);
  }, []);
  // console.log(products);

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
