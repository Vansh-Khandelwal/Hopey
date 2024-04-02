import './App.scss';
import { useState, useEffect } from 'react';
// import { MdCancel } from "react-icons/md";

import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Product from './Pages/Product/Product.jsx';
import Products from './Pages/Products/Products.jsx';
import Home from './Pages/Home/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const Layout = () =>{
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false)
      }, 4000);
    }
  }, [visible])
  return (
    <div className="app">
      <Navbar/>
      <div className="alert-info" style={visible ? { display: "flex" } : { display: "none" }} onClose={() => setVisible(false)}>
        This feature is not yet added
        {/* <MdCancel onClick={() => setVisible(false)} /> */}
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/products/:id",
        element: <Products isNew={false} isSale={false} />
      },
      {
        path: "/products/new",
        element: <Products isNew={true} isSale={false} />
      },
      {
        path: "/products/sale",
        element: <Products isNew={false} isSale={true} />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ],
  },
]);

// Deploy ready
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
