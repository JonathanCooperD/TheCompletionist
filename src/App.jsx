import React from 'react';
import { Router, Link } from "@reach/router"
import { IdentityContextProvider } from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
import '@reach/tabs/styles.css';
import { NETLIFY_IDENTITY_URL } from './constants';
import AuthStatus from './components/auth-status';
import ProtectedRoute from './components/protected-route';
import Dash from './components/views/Dash';
import Login from './components/views/Login';

let Home = () => <div>Home</div>;

const client = createClient({
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:9000/.netlify/functions/graphql'
    : '/.netlify/lambda/graphql'
})

function App() {
  const url = process.env.REACT_APP_NETLIFY_IDENTITY_URL || NETLIFY_IDENTITY_URL

  if (!url)
    throw new Error(
      'process.env.REACT_APP_NETLIFY_IDENTITY_URL is blank2, which means you probably forgot to set it in your Netlify environment variables',
    )

  return (
    <IdentityContextProvider url={url}>
      <AuthStatus />
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <ProtectedRoute path="/dashboard" component={Dash} />
      </Router>
    </IdentityContextProvider>
  )
}

export default App;
