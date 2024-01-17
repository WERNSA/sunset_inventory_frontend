import { Layout, Card, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderLayout from './header';
import MenuLayout from './menu';
import { getBgColor } from '../../ant.design.config';

const { Content, Sider } = Layout;

const ThemeLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState('Inicio');
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    document.title = `SUNSET | ${title}`;
  }, [title]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderLayout />
      <Layout>
        <Sider
          collapsed={collapsed}
          // collapsible
          onCollapse={toggleCollapsed}
          style={{
            backgroundColor: getBgColor('0.5'),
            width: 220
          }}
          width={220}
        >
          <MenuLayout />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              margin: 0,
            }}
          >
            <div style={{ height: '85%', marginTop: '30px' }}>
              <Typography.Title level={2}>{title}</Typography.Title>
              <Card style={{ height: '100%' }}>
                <Outlet context={{ setTitle }} />
              </Card>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ThemeLayout;
