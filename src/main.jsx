import { StrictMode, Suspense } from 'react'
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
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc]">
        <div className="w-12 h-12 border-4 border-[#1a3b2e] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-medium">Loading app...</p>
      </div>
    }>
      <FriendProvider>
        <RouterProvider router={router} />
      </FriendProvider>
    </Suspense>
  </StrictMode>,
);