import { useState, useEffect } from "react";
import { apiClient } from "../../assets/services/products.service";

export function useApi(endPoint){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts=async()=>{
    setLoading(true);

    try{
      console.log(`Llamando a: ${apiClient.baseURL}${endPoint}`);
      const response = await apiClient.get(endPoint);
      setData(response.data);
      console.log(res.data)
  
    }
    catch{
      console.error('Error al obtener data: ',error);
      

    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    if (endPoint) {
      getProducts();
    }
  
  },[endPoint])

  return { data, loading, error };
}






