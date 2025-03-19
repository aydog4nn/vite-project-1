import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page from './pages/mainPage/page.jsx'
import TurkeyMap from './pages/turkeyMap/page.jsx'
import './App.css'
import LoginPage from "./usersPages/loginPage.jsx";

function App() {
  return (
    <>

      <div><LoginPage /></div>
    </>
  )
}

export default App
