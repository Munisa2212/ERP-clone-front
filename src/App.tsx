import { useContext } from 'react'
import './index.css'
import AuthRoutes from './routes/AuthRoutes'
import DashboardRoutes from './routes/DashboardRoutes'
import { Context } from './context/Context'

function App() {
  const {token} = useContext(Context)
  return token ? <DashboardRoutes/> : <AuthRoutes/>
}

export default App
