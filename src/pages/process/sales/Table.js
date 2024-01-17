/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, Tooltip } from 'antd';
import { DeleteRowOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import JorshTable from '../../../components/ant-custom/table';

const Table = (props) => {
  const columns = [
    {
      title: 'No',
      dataIndex: 'index',
      key: 'index',
      width: '5%',
      render: (_, __, index) => index + 1
    },
    {
      title: 'Fecha',
      dataIndex: 'date',
      key: 'date',
      width: '10%',
      render: (_, row) => dayjs(row.date).format('DD/MM/YYYY')
    },
    {
      title: 'Producto',
      dataIndex: 'product',
      key: 'product',
      width: '20%',
    },
    {
      title: 'Cantidad',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '15%',
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: 'price',
      width: '20%',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      width: '10%',
    },
    {
      title: 'Opciones',
      key: 'options',
      render: (_, row) => (
        <div className="tw-flex tw-gap-2">
          <Tooltip title="Eliminar">
            <Button
              shape="circle"
              danger
              icon={<DeleteRowOutlined />}
              onClick={() => props.delete(row.key)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];
  return <JorshTable columns={columns} dataSource={props.lista} />;
};

export default Table;
