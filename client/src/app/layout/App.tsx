import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5271/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: "nike",
        description: "description",
        pictureUrl: "http://sss.com",
      },
    ]);
  }

  return (
    <div>
      <Typography variant="h1">ReStore</Typography>
      ;
      <Catalog products={products} addProduct={addProduct} />
    </div>
  );
}

export default App;
