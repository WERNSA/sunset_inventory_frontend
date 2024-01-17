/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Button, Form, Input, InputNumber, Select, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { getInventoryList } from '../../../api/process/inventory';

const BuyForm = (props) => {
  const { data } = props;
  const [form] = Form.useForm();
  const [inventoryList, setInventoryList] = useState([]);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [unitMeasurement, setUnitMeasurement] = useState('');

  useEffect(()=>{
    getInventoryList().then(res => setInventoryList(res.data));
  },[]);

  useEffect(() => {
    form.setFieldsValue({ ...data, date: dayjs() });
  }, [form]);
  

   const filterOption = (input, option) =>
     (option?.name ?? '').toLowerCase().includes(input.toLowerCase());
  
  const onBuyChange = (_, obj) => {
    setMaxQuantity(obj.actualQuantity);
    setUnitMeasurement(obj.productUnit);
 
    form.setFieldsValue({
      price: obj.sellPriceUnit,
      existences: obj.actualQuantity,
      productName: obj.productName,
      quantity: 1
    })
  };

  return (
    <Form
      className="tw-flex tw-w-full tw-flex-wrap"
      layout="vertical"
      defaultValue={data}
      onFinish={props.agregar}
      form={form}
    >
      <Form.Item className="tw-w-3/4 tw-px-1" name="product" label="Producto:">
        <Select
          showSearch
          onChange={onBuyChange}
          placeholder="Producto..."
          optionFilterProp="children"
          filterOption={filterOption}
          options={inventoryList}
          fieldNames={{ label: 'productName', value: 'id' }}
        />
      </Form.Item>

      <Form.Item
        className="tw-w-1/3 tw-px-1"
        name="provider"
        label="Proveedor:"
      >
        <Input />
      </Form.Item>

      <Form.Item className="tw-w-1/4 tw-px-1" name="date" label="Fecha" >
        <DatePicker
          format="DD/MM/YYYY"
          placeholder="DD/MM/YYYY"
          className="tw-w-full"
        />
      </Form.Item>

      <Form.Item className="tw-w-1/3 tw-px-1" name="quantity" label="Cantidad:">
        <InputNumber
          min={1}
          max={maxQuantity}
          className="tw-w-full"
        />
      </Form.Item>

      <Form.Item className="tw-w-1/3 tw-px-1" name="price" label="Precio:">
        <Input prefix="C$" readOnly />
      </Form.Item>

      <Form.Item
        className="tw-w-1/3 tw-px-1"
        name="existences"
        label="Existencias:"
      >
        <Input suffix={unitMeasurement} readOnly />
      </Form.Item>

      <div className="tw-w-full">
        <Button
          className="tw-ml-1 tw-mb-6"
          type="primary"
          icon={<PlusOutlined />}
          htmlType="submit"
        >
          Agregar
        </Button>
      </div>

      <Form.Item
        className="tw-px-1 tw-hidden"
        name="productName"
        label="Nombre P:"
      >
        <Input readOnly />
      </Form.Item>
    </Form>
  );
};

export default BuyForm;
