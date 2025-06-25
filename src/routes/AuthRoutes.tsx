import { Route, Routes } from "react-router-dom"
import { paths } from "../hooks/paths"
import { Home } from "../pages/Dashboard"
import { SignIn } from "../pages/Auth"

const AuthRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={paths.home} element={<Home/>}/>
            <Route path={paths.signIn} element={<SignIn/>}/>
        </Routes> 
    </div>
  )
}

export default AuthRoutes