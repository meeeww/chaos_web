import React from 'react'
import ReactDOM from 'react-dom/client'

import Inicio from './pages/Inicio.jsx'

import Calendario from './pages/Calendario.jsx'
import Resultados from './pages/Resultados.jsx'
import Clasificacion from './pages/Clasificacion.jsx'

import FichaPartido from './pages/FichaPartido.jsx'

import InicioSesion from "./pages/InicioSesion.jsx"
import Registro from "./pages/Registro.jsx"

import Contacto from './pages/Contacto.jsx'
import Inscripcion from './pages/Inscripcion.jsx'

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
    path: "/calendario",
    element: <Calendario />,
  },
  {
    path: "/resultados",
    element: <Resultados />,
  },
  {
    path: "/clasificacion",
    element: <Clasificacion />,
  },
  {
    path: "/partido",
    element: <FichaPartido />,
  },
  {
    path: "/iniciosesion",
    element: <InicioSesion />,
  },
  {
    path: "/registro",
    element: <Registro />,
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