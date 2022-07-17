import './App.css'
import { BrowserRouter as Router, Link } from "react-router-dom"
import AppRoutes from './AppRoutes'

const App = () => {
  return (
    <Router>
    <div>
      <Link to="/home">Home </Link>
      <Link to="/detail">Detail </Link>
      <Link to="/about-us">About Us </Link>
      <AppRoutes />
    </div>
  </Router>
  )
}

export default App
