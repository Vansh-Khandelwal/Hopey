import './App.scss';

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
  return (
    <div className="app">
      <Navbar/>
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

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
