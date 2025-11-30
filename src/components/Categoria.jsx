import React from 'react';
import ProductList from './ProductList';
import { useParams } from "react-router-dom";

const Categoria = () => {
    const { category } = useParams();
  return (
    <div className="container">
      <h1 style={{
          color: '#0a0000ff',          
          fontWeight: 600,           
          fontSize: '2rem',       
          borderBottom: '2px solid #d4af37',
          paddingBottom: '0.5rem',
          marginBottom: '2rem'
        }}>{category}</h1>
      <ProductList category={category} />
    </div>
  );
};

export default Categoria;
