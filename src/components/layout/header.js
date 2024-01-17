import React from 'react';
import { Layout, Avatar, Dropdown, Space, Image } from 'antd';
import { LeftSquareOutlined } from '@ant-design/icons';
import Logo from '../../../public/images/logo-white.png';
import { getBgColor } from '../../ant.design.config';

const { Header } = Layout;

const items = [
  {
    key: '1',
    label: (
      <Space>
        <LeftSquareOutlined />
        Cerrar Sesión
      </Space>
    ),
  },
];

const HeaderLayout = () => (
  <Header
    style={{
      backgroundColor: getBgColor('0.8'),
      borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
      paddingInline: '25px',
    }}
    className="header-transparent"
  >
    <div className="tw-flex tw-flex-row tw-w-full tw-justify-between">
      <div className="tw-flex tw-flex-row tw-self-center">
        <Image src={Logo} width="12%" preview={false} />
        {/* <Typography.Title level={4} className="tw-pl-2">
          Librer&iacute;a Puesta de Sol
        </Typography.Title> */}
      </div>
      <div>
        <Dropdown menu={{ items }}>
          <Avatar size="large">JV</Avatar>
        </Dropdown>
      </div>
    </div>
  </Header>
);

export default HeaderLayout;
