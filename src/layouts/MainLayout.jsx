import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-232px)]">
        {/* dynamic section */}
        <Outlet></Outlet>
        {/* dynamic section */}
      </div>
      {/* footer section */}
      <Footer></Footer>
    </div>
  )
}

export default MainLayout