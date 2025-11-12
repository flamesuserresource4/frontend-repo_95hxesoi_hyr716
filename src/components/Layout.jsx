import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
