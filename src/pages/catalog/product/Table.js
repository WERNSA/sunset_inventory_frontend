/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, Tag, Tooltip } from 'antd';
import { EditOutlined, DeleteRowOutlined } from '@ant-design/icons';
import JorshTable from '../../../components/ant-custom/table';

const Table = (props) => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
    },
    {
      title: 'Descripci\u00F3n',
      dataIndex: 'description',
      key: 'description',
      width: '25%',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
      width: '10%',
    },
    {
      title: 'Marca',
      dataIndex: 'brandName',
      key: 'brand',
      width: '10%',
    },
    {
      title: 'Categoria',
      dataIndex: 'categoryName',
      key: 'category',
      width: '15%',
    },
    {
      title: 'U/M',
      dataIndex: 'unitName',
      key: 'unitmeasurement',
      width: '10%',
    },
    {
      title: 'Estado',
      dataIndex: 'isActive',
      key: 'status',
      width: '5%',
      render: (_, { isActive }) =>
        isActive ? (
          <Tag color="success">Activo</Tag>
        ) : (
          <Tag color="error">Inactivo</Tag>
        ),
    },
    {
      title: 'Opciones',
      key: 'options',
      render: (_, row) => (
        <div className='tw-flex tw-gap-2'>
          <Tooltip title="Editar">
            <Button
              shape="circle"
              type="primary"
              icon={<EditOutlined />}
              onClick={() => props.edit(row)}
            />
          </Tooltip>
          <Tooltip title="Eliminar">
            <Button
              shape="circle"
              danger
              icon={<DeleteRowOutlined />}
              onClick={() => props.delete(row.id)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];
  return <JorshTable columns={columns} dataSource={props.data} />;
};

export default Table;
