import React, { useState } from 'react';
import { handleSortByPrice } from '../hooks/useSort';
import '../assets/styles/Sort.css';
export default function SortByPrice({ disponibles, setDisponibles }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    const prod = handleSortByPrice(selectedValue);
    setDisponibles(prod);
    localStorage.setItem('order', JSON.stringify(prod));
    localStorage.setItem('selectedValue', selectedValue);
  };

  const initialSelectedValue = localStorage.getItem('selectedValue') || '';

  return (
    <div className='order'>
      <label>Ordenar por precio:</label>
      <select value={initialSelectedValue} onChange={handleSelectChange}>
        <option value=''>Seleccionar</option>
        <option value='asc'> - A +</option>
        <option value='desc'>+ A -</option>
      </select>
    </div>
  );
}
