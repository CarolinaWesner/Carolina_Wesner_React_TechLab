import React from 'react';
import ProductList from './ProductList';

const Mujer = () => {
  return (
    <div className="container">
      <h1 style={{
          color: '#0a0000ff',          
          fontWeight: 600,           
          fontSize: '2rem',       
          borderBottom: '2px solid #d4af37',
          paddingBottom: '0.5rem',
          marginBottom: '2rem'
        }}>Mujer</h1>
      <ProductList category="women's clothing" />
    </div>
  );
};

export default Mujer;
