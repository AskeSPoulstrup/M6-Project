import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import TopBar from '../components/layout/TopBar'

export default function MainLayout() {
  return (
    <div className="app-shell">
      <TopBar />
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}