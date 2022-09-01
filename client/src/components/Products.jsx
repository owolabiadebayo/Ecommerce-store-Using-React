import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Product from './Product';
const Products = () => {
    const [products, setProduct] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=5')
        .then((res) => setProduct(res.data))
    }, [])
  return <div className='p-5 flex flex-wrap'>
      {
          products.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>;
};

export default Products;
