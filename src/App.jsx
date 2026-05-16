import { Outlet } from 'react-router'
import './App.css'
import { Toaster } from 'react-hot-toast';
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
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </>
  )
}

export default App
