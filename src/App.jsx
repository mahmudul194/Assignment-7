import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#f8fafc]">
        <Navbar/>
        <main className='grow'>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
