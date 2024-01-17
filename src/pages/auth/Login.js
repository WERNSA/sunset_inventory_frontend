import { Button, Card, Form, Input } from 'antd';
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  EditOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth/login';
import { useAuth } from './hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const togglePassword = (visible) =>
    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;

  const onFinish = (values) => {
    // console.log(ev);
    setLoading(true);
    login(values)
      .then(async (res) => {
        if (res.data.access) {
          await auth.login(res.data.access);
          setTimeout(() => navigate('/'), 100);
        }
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <div className="tw-flex tw-h-screen tw-items-center tw-justify-center">
      <Card className="tw-w-1/3" title="Login | Puesta del sol">
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'El usuario es requerido!',
              },
            ]}
          >
            <Input
              placeholder="Usuario"
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="large"
              autoComplete="off"
              autoFocus
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'La contrase\u00F1a es requerida!',
              },
            ]}
          >
            <Input.Password
              placeholder="Contraseña"
              prefix={<EditOutlined className="site-form-item-icon" />}
              iconRender={togglePassword}
              size="large"
            />
          </Form.Item>
          <Button
            className="tw-w-full"
            type="primary"
            loading={loading}
            htmlType="submit"
          >
            {loading ? 'Iniciando Sesión...' : 'Iniciar Sesi\u00F3n'}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
