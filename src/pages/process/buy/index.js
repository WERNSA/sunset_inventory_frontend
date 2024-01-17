import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import BuyForm from './Form';

const Buy = () => {
  const { setTitle } = useOutletContext();
  const [ producList, setProductList ] = useState([]);
  useEffect(() => {
    setTitle('Registrar Compra');
  }, []);

  const agregarProducto = (obj) => {
    const newProduct = {
      key: obj.product, 
      date: Date.parse(obj.date),
      provider: obj.provider,
      product: obj.productName, 
      quantity: obj.quantity,
      price: obj.price,
      total: obj.price*obj.quantity
     }
     setProductList([
      ...producList, 
      newProduct,
     ])
  }
  return (
    <div>
      <BuyForm agregar={agregarProducto} />
    </div>
  );
};

export default Buy;
 