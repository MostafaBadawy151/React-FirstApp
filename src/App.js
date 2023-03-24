import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Layout from './Layout/Layout'
import NotFound from './NotFound/NotFound'
import Portfolio from './Portfolio/Portfolio'

let routers = createBrowserRouter([
  {path:'', element:<Layout/>,children:[
    {path:'', element:<Home/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'about', element:<About/>},
    {path:'contact', element:<Contact/>},
    {path:'*', element:<About/>},
  ]}
])


export default function App() {
  return <>
  <RouterProvider router={routers}></RouterProvider></>
    
  
}


