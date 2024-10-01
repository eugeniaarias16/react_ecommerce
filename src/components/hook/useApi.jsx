    import { useState, useEffect } from 'react';
    import { apiClient } from '../../assets/services/products.service';

    // Actualizar categoría
    const UpDateCategory = async (id, newTitle) => {
    try {
        const resChange = await apiClient.put(`/categories/${id}`, {
        name: newTitle,
        });
        console.log('Categoría actualizada:', resChange.data);
    } catch (error) {
        console.error(`Error al modificar categoría con id ${id}`, error.message);
    }
    };

    // Eliminar categoría
    const deleteCategory = async (id) => {
    try {
        const resDelete = await apiClient.delete(`/categories/${id}`);
        console.log(`Categoría con id ${id} eliminada.`, resDelete);
    } catch (error) {
        console.error(`Error al eliminar categoría con id número ${id}`, error.message);
    }
    };

    // Añadir producto
    const addProduct = async (newProduct, price, description, categories, image) => {
    try {
        for (const category of categories) {
        const resAdd = await apiClient.post('/products', {
            title: newProduct,
            price: price,
            description: description,
            categoryId: category.id, // Solo se manda el id de la categoría
            images: [image], // La API espera un array de imágenes
        });
        console.log(`Producto creado en la categoría ${category.name}:`, resAdd.data);
        }
    } catch (error) {
        console.error('Error al crear el producto:', error.message);
    }
    };

    // Custom Hook para obtener datos de la API
    function useApi(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteCategories = async (ids) => {
        setIsDeleting(true);
        try {
        await Promise.all(ids.map((id) => deleteCategory(id)));
        console.log('Eliminación completada');
        } catch (error) {
        console.error('Error al eliminar categorías:', error.message);
        }
        setIsDeleting(false);
    };

    // Obtener productos de la API
    const getProducts = async () => {
        setLoading(true); // Inicia el estado de carga
        try {
        console.log(`Llamando a: ${apiClient.defaults.baseURL}${endpoint}`);
        const res = await apiClient.get(endpoint);
        setData(res.data);
        console.log(res.data);

        // Actualización y eliminación de categorías
        await handleDeleteCategories([8, 22, 35]);
        console.log('Proceso de eliminación:', isDeleting);
        await UpDateCategory(5, 'Others');

        // Agregar un nuevo producto
        await addProduct(
            'Nuevo Producto',
            100,
            'Descripción del nuevo producto',
            [{ id: 1, name: 'Clothes' }, { id: 2, name: 'Electronics' }],
            'https://placeimg.com/640/480/any'
        );
        } catch (error) {
        console.error('Error al obtener productos:', error.message);
        setError(error.message);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, [endpoint]); // Solo se ejecuta una vez el hook al montarse

    return { data, loading, error, isDeleting };
    }

    export default useApi;





