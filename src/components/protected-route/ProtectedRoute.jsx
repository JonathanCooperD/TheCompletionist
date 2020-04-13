import React from 'react';
import { Redirect } from '@reach/router';
import { useIdentityContext } from 'react-netlify-identity-widget';

function ProtectedRoute({ component: Component, path }) {
  const PrivateRoute = () => {
    const identity = useIdentityContext();
    const { isLoggedIn } = identity;
    return (
      isLoggedIn
        ? <Component />
        : <Redirect from={path} to="/login" noThrow />
    );
  };

  return <PrivateRoute path={path} />;
};

export default ProtectedRoute;
