import axios from "axios";
import { useEffect, useState } from "react";

const base_url = "https://fakestoreapi.com/products";

const useItemId = (id) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await axios.get(`${base_url + id}`);
        setProducts(response.data);
      } catch (error) {
        alert(error.message);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return { products, isLoading, error };
};

export default useItemId;
