import { BellOutlined, LogoutOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button, Modal } from "antd"
import { useContext, useState } from "react"
import { Context } from "../context/Context"
import { useCookies } from "react-cookie"

const Header = () => {
  const [loading, setIsLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const {setToken} = useContext(Context)
  const [_cookie,_setCookie,removeCookie] = useCookies(['token'])

  function logOut():void{
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setToken(null)
      removeCookie("token")
      location.pathname = "/"
    },1000)
  }
  return (
    <>
     <div className="flex justify-between bg-[var(--clr-blue)] items-center py-[10px] px-[20px]">
        <div className=" p-2 py-[12px] border-b-[0.5px] border-slate-600 flex items-center justify-between">
          <button className="text-white text-3xl"><MenuUnfoldOutlined/></button>
        </div>
        <div>
          <Button className="text-3xl bg-white p-2 rounded-[5px] w-[50px] h-[50px]" ><BellOutlined /></Button>
          <Button onClick={() => setShowModal(true)} icon={<LogoutOutlined />} iconPosition="end" className="!text-lg !h-[50px] !px-[20px] !text-white" type="text">Chiqish</Button>
        </div>
     </div>
      <Modal confirmLoading={loading}  open={showModal} okText="Chiqish" cancelText="Bekor qilish" onOk={() => logOut()} onCancel={() => setShowModal(false)} title="Tizimdan chiqish"></Modal>
    </>
  )
}

export default Header
