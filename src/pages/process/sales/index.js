import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Table from './Table';
import SalesForm from './Form';

const Sales = () => {
  const { setTitle } = useOutletContext();
  const [ producList, setProductList ] = useState([]);
  useEffect(() => {
    setTitle('Registrar Venta');
  }, []);

  const agregarProducto = (obj) => {
    const newProduct = {
      key: obj.product, 
      date: Date.parse(obj.date),
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

  const borrar = (key) => {
    const newlist = producList.filter(
      (ele) => ele.key!==key 
    )

    setProductList(newlist);

  }

  return (
    <div>
      <SalesForm agregar={agregarProducto} />
      <Table delete={borrar} lista={producList}/>
    </div>
  );
};

export default Sales;
