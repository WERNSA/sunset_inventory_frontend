import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { createRoot } from 'react-dom/client';
// import App from './App';
import './styles/index.css';
import './styles/tailwind.css';
import 'antd/dist/reset.css';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import antDesignThemeConfig from './ant.design.config';
import Routes from './routes';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

const { darkAlgorithm } = theme;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ConfigProvider
    theme={{
      algorithm: darkAlgorithm,
      ...antDesignThemeConfig,
    }}
  >
    <Routes />
  </ConfigProvider>
);
