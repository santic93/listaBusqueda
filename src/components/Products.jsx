import React, { useContext, useState, useEffect } from 'react';
import api from '../api';
import '../assets/styles/Product.css';
import Busqueda from './Busqueda';
import Context from '../context/Context';
import SortByPrice from './SortByPrice';

export default function Products() {
  const { search } = useContext(Context);
  const [disponibles, setDisponibles] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    {
      if (localStorage.getItem('order')) {
        let prod = localStorage.getItem('order');
        const order = JSON.parse(prod);
        setDisponibles(order);
      } else {
        api
          .search()
          .then((productos) => {
            console.log(productos);
            setDisponibles(productos);
          })
          .catch((error) => {
            console.warn(error);
          });
      }
    }
  }, []);
  console.log(disponibles);
  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    if (!isTyping) {
      const filtered = disponibles?.filter((product) => {
        const productTitle = product.title.toLowerCase();
        const searchQuery = search.toLowerCase();
        return !searchQuery || productTitle.includes(searchQuery);
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [search, disponibles, isTyping]);

  return (
    <div>
      <Busqueda />
      <div>
        {!isTyping && (
          <div>
            <br />
            <hr />
            <SortByPrice
              disponibles={disponibles}
              setDisponibles={setDisponibles}
            />
            <br />
          </div>
        )}
        {isTyping
          ? null
          : filteredProducts.map((product) => (
              <div key={product.id}>
                <ul>
                  <li>
                    Nombre: {product.title}
                    <br />
                    <b>{product.price <= 100 && `${'SALE!!'}`}</b>
                  </li>
                  <li>Descripción: {product.description}</li>
                  <li>
                    <strong>Precio: {product.price}</strong>
                  </li>
                </ul>
                <hr className='style-seven' />
              </div>
            ))}
      </div>
    </div>
  );
}
