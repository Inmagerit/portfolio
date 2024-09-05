import  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct,removeProduct } from '../redux/slices/shoppingCartSlice';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const dispatch = useDispatch()
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products'); // Fetch all products
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (products.length === 0) {
        return <div>Loading product details...</div>;
    }

    const handleAddProduct = (product) => {dispatch(addProduct({
            id: product.id,
            price: product.price,
            image:product.image,
            title:product.title,
            description:product.description
            }))}
            const handleDeleteProduct = (product) => {dispatch(removeProduct({
                id: product.id,
                price: product.price,
                image:product.image,
                title:product.title,
                description:product.description,
                
              
                }))}

    return (
        <div>
            <h1>Product Details</h1>
            {products.map((product) => (
                <div key={product.id} style={{ marginBottom: '20px' }}>
                    <img src={product.image} alt={product.title} style={{ width: '200px' }} />
                    <h2>{product.title}</h2>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <button onClick={() => handleAddProduct(product) }>Add to cart</button>
                    <button onClick={() => handleDeleteProduct(product) }>delete from cart</button>
                </div>
            ))}
        </div>
    );
};

export default Catalog;
