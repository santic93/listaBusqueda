import React, { useState, useContext, useEffect } from 'react';
import api from '../api';
import '../assets/styles/Busqueda.css';
import Context from '../context/Context';

export default function Busqueda() {
  const { searchInput, search} = useContext(Context);


  const handleChange = (e) => {
    e.preventDefault();
    searchInput(e.target.value);
  };


  return (
    <div className='busq'>
      <input
        type='text'
        placeholder='Buscar productos'
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}
