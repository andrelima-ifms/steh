import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Main.css"
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Footer from './componentes/footer/Footer'
import Contato from './componentes/contato/Contato'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   
  </React.StrictMode>,
)

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
              <Header/>
              <Main/>
              <Footer/>


              
  </>,
  },
  {
    path: "/noticias",
    element: <div>Página de Notícias!</div>,
  },
  {
    path: "/sobre",
    element: <div>Página Sobre!</div>,
  },
  {
    path: "/contato",
    element: <div>
       <Header/>
       <Contato/>
       <Footer/>

      
    </div>,
   
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
