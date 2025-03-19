import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page from './pages/mainPage/page.jsx'
import TurkeyMap from './pages/turkeyMap/page.jsx'
import './App.css'
import './router/RouterConfig.jsx'
import LoginPage from "./usersPages/loginPage.jsx";
import RouterConfig from "./router/RouterConfig.jsx";
function App() {
  return (
    <>

      <div><RouterConfig/></div>
    </>
  )
}

export default App
