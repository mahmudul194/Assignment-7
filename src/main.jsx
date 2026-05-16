import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home.jsx';
import Timeline from './pages/Timeline.jsx';
import Stats from './pages/Stats.jsx';
import FriendDetails from './pages/FriendDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import { FriendProvider } from './context/FriendContext.jsx';

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
      },
      {
        path: "stats",
        Component: Stats,
      },
      {
        path: "friend/:id",
        Component: FriendDetails,
      },
      {
        path:'*',
        Component:NotFound
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
    <RouterProvider router={router}/>
    </FriendProvider>
  </StrictMode>,
)
