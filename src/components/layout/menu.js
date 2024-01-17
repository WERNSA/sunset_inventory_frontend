import React, { useEffect, useState } from 'react';
import {
  PieChartOutlined,
  ApartmentOutlined,
  ControlOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link to="/">Inicio</Link>, '1', <PieChartOutlined />),
  getItem('Catalogo', 'sub1', <ControlOutlined />, [
    getItem(<Link to="catalog/brand">Marcas</Link>, 'brand'),
    getItem(<Link to="catalog/category">Categor&iacute;as</Link>, 'cat'),
    getItem(
      <Link to="catalog/unit-measurement">Unidades de Medida</Link>,
      'unit'
    ),
    getItem(<Link to="catalog/product">Productos</Link>, 'product'),
  ]),
  getItem('Procesos', 'sub2', <ApartmentOutlined />, [
    getItem(<Link to="process/inventory">Inventario</Link>, 'inv'),
    getItem(<Link to="process/sales">Ventas</Link>, 'sals'),
    getItem(<Link to="process/buy">Compras</Link>, 'buy'),
  ]),
];

const itemPath = [
  {
    path: '/',
    key: '1',
  },
  {
    path: '/catalog/product',
    key: 'product',
  },
  {
    path: '/catalog/brand',
    key: 'brand',
  },
  {
    path: '/catalog/category',
    key: 'cat',
  },
  {
    path: '/catalog/unit-measurement',
    key: 'unit',
  },
  {
    path: '/process/inventory',
    key: 'inv',
  },
  {
    path: '/process/sales',
    key: 'sals',
  },
  {
    path: '/process/buy',
    key: 'buy',
  },
];

const MenuLayout = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState();

  useEffect(() => {
    const path = location.pathname;

    const keyPath = itemPath.find(f => f.path === path);
    setActivePath(keyPath.key);
  }, [location]);



  return(
  <Menu
    style={{ borderRight: 'none', width: 220 }}
    selectedKeys={[activePath]}
    defaultOpenKeys={['sub1', 'sub2']}
    mode="inline"
    // theme="dark"
    // inlineCollapsed={collapsed}
    items={items}
  />
);}
export default MenuLayout;
