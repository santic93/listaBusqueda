import api, { PRODUCTS } from "../api";

export const handleSortByPrice = (selectedValue) => {
  let sortedProducts = [...PRODUCTS];

  if (selectedValue === 'asc') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (selectedValue === 'desc') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
return sortedProducts
};
