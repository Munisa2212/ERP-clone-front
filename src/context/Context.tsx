import { createContext, useState,  type FC, type ReactNode } from "react";
import type { ContextType } from "../types/ContextType";
import { useCookies } from "react-cookie";

export const Context = createContext<ContextType>({
    token: "",
    setToken: () => null
})


export const GlobalContext: FC<{children:ReactNode}> = ({children}) =>{
    const [cookie] = useCookies(["token"])
    const [token, setToken ] = useState<string | null>(cookie.token || null)

    return <Context.Provider value={{token, setToken}}>{children}</Context.Provider>
}