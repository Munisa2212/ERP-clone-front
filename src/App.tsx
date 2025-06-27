import { useContext } from 'react'
import './index.css'
import AuthRoutes from './routes/AuthRoutes'
import { Context } from './context/Context'
import Layout from './feature'

function App() {
  const {token} = useContext(Context)
  return token ? <Layout/> : <AuthRoutes/>
}

export default App
