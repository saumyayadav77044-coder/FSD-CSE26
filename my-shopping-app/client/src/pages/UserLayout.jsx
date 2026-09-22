import { Header, Footer, Navbar, Home } from "../components/index"
import {Outlet} from "react-router-dom"


const UserLayout = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <main>
            <Home />
        </main>
        <Footer />
    </div>
  )
}

export default UserLayout