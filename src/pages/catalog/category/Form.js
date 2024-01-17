/* eslint-disable react/prop-types */
import { Button, Card, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { SaveOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { postCategory, putCategory } from '../../../api/catalog/category';

const CategoryForm = (props) => {
  const { data, cancel, openNotification } = props;
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (formData) => {
    setLoading(true);
    let fetchData = formData;
    let fetch = postCategory;
    if (data?.id) {
      fetch = putCategory;
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

  return (
    <Form layout="vertical" defaultValue={data} onFinish={onFinish} form={form}>
      <Card
        title={data?.id ? `Editar ${data?.name}` : 'Nueva Categoria'}
        actions={[
          <>
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
          </>,
        ]}
      >
        <Form.Item name="name" label="Nombre:">
          <Input autoFocus />
        </Form.Item>
      </Card>
    </Form>
  );
};
export default CategoryForm;
