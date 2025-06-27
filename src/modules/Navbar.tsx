import { useContext, useEffect, useState } from "react"
import { Logo } from "../assets/Icons"
import { Context } from "../context/Context"
import { instance } from "../hooks/instance"
import NavbarCarusel from "../components/NavbarCarusel"

const Navbar = () => {
  const {token} = useContext(Context)
  const [role, setRole] = useState("")

  useEffect(() => {
    if(token){
      instance("/user/me", {headers:{"Authorization":`Bearer ${token}`}}).then(res => {
        setRole(res.data.role);
      })
    }
  }, [])
  return (
    <div className="w-[22%] h-[100vh] bg-[var(--clr-blue)] text-[white]">
      <div className="flex items-center p-[17px] gap-5 border-b-[1px] border-b-[grey]">
        <Logo/>
        <h2 className="text-[30px] capitalize">{role.toLowerCase()}</h2>
      </div>
      <NavbarCarusel/>
    </div>
  )
}

export default Navbar