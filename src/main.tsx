import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'

import{createBrowserRouter, RouterProvider,} from "react-router-dom";
import Header from './componentes/header/Header';
import Main from './componentes/main/Main';
const router = createBrowserRouter([
{
  path:"/",
  element: <> <Header/><Main/> </>,
},
{
  path:"/tere",
  element: <div>oi mundo T</div>,
}
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   {/*<App />*/}
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
