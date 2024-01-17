/* eslint-disable react/prop-types */
import { Button, Input } from 'antd';
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react';

const Actions = (props) => {
  const { setShowForm, searchData } = props;
  return (
    <div className="tw-flex tw-mb-4">
      <Input
        name="search"
        placeholder="Buscar..."
        autoComplete='off'
        onChange={(v) => searchData(v.target.value)}
        prefix={<SearchOutlined />}
        autoFocus
      />
      <Button
        onClick={() => setShowForm(true)}
        type="primary"
        icon={<PlusCircleOutlined />}
      >
        Nuevo
      </Button>
    </div>
  );
};

export default Actions;
