import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home.jsx';
import Timeline from './pages/Timeline.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    Component:App,
    children:[
      {
        path:'/',
        Component:Home
      },
      {
         path: "timeline",
        Component:Timeline
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
