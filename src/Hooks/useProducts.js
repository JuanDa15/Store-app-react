import { useEffect, useState } from 'react'

const API = 'https://api.escuelajs.co/api/v1/products';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(API, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const jsonData = await response.json();
        setProducts(jsonData); 
      } catch(error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => abortController.abort();
  }, [])

  return { products, loading, error }
}