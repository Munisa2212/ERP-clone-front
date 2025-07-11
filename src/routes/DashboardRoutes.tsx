import {  Route, Routes } from "react-router-dom"
import { DashboardRouteList } from "../hooks/paths"
import type { DashboardRouteType } from "../types/DashboardRouteType"


const DashboardRoutes = () => {
  return (
    <Routes>
        {DashboardRouteList.map((item: DashboardRouteType) => {
          console.log(item)
          return <Route key={item.id} path={item.path} element={item.element}/>
          }
        )}
    </Routes>
  )
}

export default DashboardRoutes