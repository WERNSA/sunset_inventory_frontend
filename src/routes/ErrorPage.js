import { Card } from 'antd';
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Card id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Card>
  );
};

export default ErrorPage;
