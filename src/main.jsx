import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import HomePage from './pages/HomePage.jsx';
import Galery from './pages/Galery.jsx';
import Acerca from './pages/Acerca.jsx';
import PreguntasFrecuentes from './components/PreguntasFrecuentes.jsx';
import Cronograma from './components/Cronograma.jsx';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App /> ,
    children:[
      {
        path:'/',
        element: <HomePage />
      },
      {
        path:'/galery',
        element: <Galery />
      },
      {
        path:'/acerca',
        element: <Acerca />
      },
      {
        path:'/faq',
        element: <PreguntasFrecuentes />
      },
      {
        path:'/cronograma',
        element: <Cronograma />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)