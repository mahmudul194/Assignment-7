import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#f8fafc]">
        <Navbar/>
        <main className='grow'>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
