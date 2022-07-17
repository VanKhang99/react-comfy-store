import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import * as serviceWorker from "./serviceWorker";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
      CacheLocation="localStorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import { ProductsProvider } from './context/products_context'
// import { FilterProvider } from './context/filter_context'
// import { CartProvider } from './context/cart_context'
// import { UserProvider } from './context/user_context'
// import { Auth0Provider } from '@auth0/auth0-react'

// ReactDOM.render(<App />, document.getElementById('root'))
