import { Logo } from "../../assets/Icons"
import SignInForm from "../../components/SignInForm"

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
        <div className="w-[360px] mx-auto justify-center">
            <div className="flex items-center gap-[10px] my-[42px]">
                <Logo/>
                <h1 className="text-[30px] font-normal">Admen Paneli</h1>
            </div>
            <SignInForm/>
        </div>
    </div>
  )
}

export default SignIn