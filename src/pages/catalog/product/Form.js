/* eslint-disable react/prop-types */
import { Button, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { SaveOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { postProduct, putProduct } from '../../../api/catalog/product';
import { getBrandList } from '../../../api/catalog/brand';
import { getCategoryList } from '../../../api/catalog/category';
import { getUnitMeasurementList } from '../../../api/catalog/unitMeasurement';

const ProductForm = (props) => {
  const { data, cancel, openNotification } = props;
  const [loading, setLoading] = useState(false);
  const [brandList, setBrandList] = useState([]);
   const [categoryList, setCategoryList] = useState([]);
   const [unitMeasurementList, setUnitMeasurementList] = useState ([]);
  const [form] = Form.useForm();

  const onFinish = (formData) => {
    setLoading(true);
    let fetchData = formData;
    let fetch = postProduct;
    if (data?.id) {
      fetch = putProduct;
      fetchData = {
        ...data,
        ...formData,
      };
    }
    fetch(fetchData)
      .then(() => {
        openNotification('success');
        cancel();
      })
      .catch(() => openNotification('error'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    form.setFieldsValue({ ...data });
  }, [form]);

  useEffect(() => {
    getBrandList().then(res => setBrandList(res.data));
  }, []);

   useEffect(() => {
     getCategoryList().then((res) => setCategoryList(res.data));
   }, []);

    useEffect(() => {
      getUnitMeasurementList().then((res) => setUnitMeasurementList(res.data));
    }, []);

  const filterOption = (input, option) =>
    (option?.name ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Form
      className="tw-flex tw-w-full tw-flex-wrap"
      layout="vertical"
      defaultValue={data}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item className="tw-w-1/2 tw-px-1" name="name" label="Nombre:">
        <Input autoFocus />
      </Form.Item>
      <Form.Item
        className="tw-w-1/2 tw-px-1"
        name="description"
        label="Descripción:"
      >
        <Input />
      </Form.Item>
      <Form.Item className="tw-w-1/2 tw-px-1" name="color" label="color:">
        <Input />
      </Form.Item>
      <Form.Item className="tw-w-1/2 tw-px-1" name="brand" label="Marca:">
        <Select
          showSearch
          placeholder="Marca..."
          optionFilterProp="children"
          filterOption={filterOption}
          options={brandList}
          fieldNames={{ label: 'name', value: 'id' }}
        />
      </Form.Item>
      <Form.Item
        className="tw-w-1/2 tw-px-1"
        name="category"
        label="Categoria:"
      >
        <Select
          showSearch
          placeholder="Categoria..."
          optionFilterProp="children"
          filterOption={filterOption}
          options={categoryList}
          fieldNames={{ label: 'name', value: 'id' }}
        />
      </Form.Item>
      <Form.Item className="tw-w-1/2 tw-px-1" name="unit" label="U/M:">
        <Select
          showSearch
          placeholder="U/M..."
          optionFilterProp="children"
          filterOption={filterOption}
          options={unitMeasurementList}
          fieldNames={{ label: 'name', value: 'id' }}
        />
      </Form.Item>
      <div className="tw-flex tw-w-full tw-justify-end">
        <Button
          className="tw-mr-4"
          type="primary"
          loading={loading}
          icon={<SaveOutlined />}
          htmlType="submit"
        >
          {loading ? 'Guardando...' : 'Guardar'}
        </Button>
        <Button
          danger
          onClick={() => cancel(false)}
          disabled={loading}
          icon={<CloseCircleOutlined />}
        >
          Cancelar
        </Button>
      </div>
    </Form>
  );
};
export default ProductForm;