import { useEffect, useState } from "react";
import { getFromLocalStorage, removeFromLocalStorage } from "../utilities";
import Card from "../components/Card";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const storedProducts = getFromLocalStorage();
    setProducts(storedProducts);
  }, []);
  // console.log(products);

  const handleRemoveFromDashboard = (id) => {
    removeFromLocalStorage(id);
    const storedProducts = getFromLocalStorage();
    setProducts(storedProducts);
  };

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleRemoveFromDashboard={handleRemoveFromDashboard}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
