import React,{lazy, Suspense} from 'react';
import Header from "./components/Header";
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter, Outlet} from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

const Grocery = lazy(()=>import('./components/Grocery'));

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

// Step 1: Route Configuration
const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children:[
      {
        path:'/about',
        element: <About/>,
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/restaurant/:resid",
        element:<RestaurantMenu/>
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error/>,
  },
]);

// Step 2: Provide configuration to render

export default AppRouter;
