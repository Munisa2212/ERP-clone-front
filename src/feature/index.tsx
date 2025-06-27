import Header from "../modules/Header"
import Navbar from "../modules/Navbar"
import DashboardRoutes from "../routes/DashboardRoutes"


const Layout = () => {
  return (
    <div className="flex">
        <Navbar/>
        <div className={'w-[82%]'}>
            <Header/>
            <DashboardRoutes/>
        </div>
    </div>
  )
}

export default Layout