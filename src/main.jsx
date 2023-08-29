import React from 'react'
import ReactDOM from 'react-dom/client'

import Inicio from './pages/Inicio.jsx'

import Contacto from './pages/Contacto.jsx'
import Inscripcion from './pages/Inscripcion.jsx'

import FichaPartido from './components/FichaPartido.jsx'

import NotFound from './pages/NotFound.jsx'

import './styles/Index.css'
import './styles/Partido.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/partido",
    element: <FichaPartido />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/inscripcion",
    element: <Inscripcion />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)