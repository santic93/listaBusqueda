import React, { useEffect, useState } from 'react';
import UseContext from "./context/UseContext"
import api from './api';
import Products from './components/Products';


function Recommended() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.search().then(setProducts);
  }, []);

  return (
    <main>
      <h1>Productos recomendados</h1>
      <ul>
        {[...products]
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .slice(0, 2)
          .map((product) => (
            <li key={product.id}>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <span>$ {product.price}</span>
            </li>
          ))}
      </ul>
    </main>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    api.search(query);
  }, [query]);

  return (
    <main>
      <h1>Buscador de Productos</h1>
      <UseContext>

          <Products />
 
      </UseContext>
      {/* <input
        name='text'
        type='text'
        placeholder='tv'
        onChange={(e) => setQuery(e.target)}
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <span>$ {product.price}</span>
          </li>
        ))}
      </ul>
      <Recommended /> */}
    </main>
  );
}

export default App;
