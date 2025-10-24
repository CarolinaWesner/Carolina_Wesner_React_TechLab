import React from 'react';
import ProductList from './ProductList';

const Hombre = () => {
  return (
    <div className="container my-5">
      <h1
        style={{
          color: '#0a0000ff',          
          fontWeight: 600,           
          fontSize: '2rem',   
          borderBottom: '2px solid #d4af37', 
          paddingBottom: '0.5rem',
          marginBottom: '2rem'
        }}
      >
        Hombre
      </h1>
      <ProductList category="men's clothing" />
    </div>
  );
};

export default Hombre;
