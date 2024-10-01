import React, { useEffect, useState } from 'react'
import useApi from "../hook/useApi";


export const AllProductsCall = () => {
    const { data: products, loading, error } = useApi('/products');

    const [allProducts,setAllProducts]=useState([])

    useEffect(()=>{
        if(products){
            setAllProducts(products.data);
            console.log('Productos almacenados en el array');
        }
    }, [products]);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al cargar productos: {error}</p>;
    if (!allProducts || allProducts.length === 0) return <p>No se encontraron productos.</p>;

    console.log(allProducts); 
    
    return{allProducts};

}


