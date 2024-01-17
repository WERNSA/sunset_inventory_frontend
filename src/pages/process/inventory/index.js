import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import JorshTable from '../../../components/ant-custom/table';

const listaEj = [
  {
    key: 1,
    nombre: 'Jorge',
    apellido: 'Valverde',
  },
  {
    key: 2,
    nombre: 'Kevin',
    apellido: 'Espinoza',
  },
];

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
    width: '30%',
  },
  {
    title: 'Apellido',
    dataIndex: 'apellido',
    key: 'apellido',
    width: '20%',
  },
];

const Inventory = () => {
  const { setTitle } = useOutletContext();

  useEffect(() => {
    setTitle('Inventario');
  }, []);

  return (
    <div>
      <JorshTable columns={columns} dataSource={listaEj} />
    </div>
  );
};

export default Inventory;
