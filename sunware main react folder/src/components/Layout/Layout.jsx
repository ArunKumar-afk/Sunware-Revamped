import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../Header/Header'
import MobileNav from '../MobileNav/MobileNav'
import Footer from '../Footer/Footer'
import EnquireModal from '../EnquireModal/EnquireModal'
import ThemeLoader from '../ThemeLoader/ThemeLoader'
import Cursor from '../Cursor/Cursor'
import { initSiteScripts } from '../../utils/siteScripts'

export default function Layout() {
  useEffect(() => {
    // Initialize WOW.js, Lenis, and custom cursor after every page render
    const cleanup = initSiteScripts()
    return cleanup
  }, [])

  return (
    <div className="data_cursor">
      <ThemeLoader />
      <Cursor />
      <MobileNav />

      <div className="main-content-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
      <EnquireModal />
    </div>
  )
}
