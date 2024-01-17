/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, Tag, Tooltip } from 'antd';
import dayjs from 'dayjs';
import { EditOutlined, DeleteRowOutlined } from '@ant-design/icons';
import JorshTable from '../../../components/ant-custom/table';


const Table = (props) => {
 
   const columns = [
     {
       title: 'nombre',
       dataIndex: 'name',
       key: 'name',
       width: '30%',
     },
     {
       title: 'Estado',
       dataIndex: 'isActive',
       key: 'status',
       width: '30%',
       render: (_, { isActive }) =>
         isActive ? (
           <Tag color="success">Activo</Tag>
         ) : (
           <Tag color="error">Inactivo</Tag>
         ),
     },
     {
       title: 'F. Creaci\u00F3n',
       dataIndex: 'createdAt',
       key: 'createdAt',
       width: '30%',
       render: (_, { createdAt }) =>
         dayjs(Date.parse(createdAt)).format('DD/MM/YYYY'),
     },
     {
       title: 'Opciones',
       key: 'options',
       render: (_, row) => (
         <div className="tw-flex tw-gap-2">
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


    
