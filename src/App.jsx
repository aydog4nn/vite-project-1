import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page from './mainPage/page'
import TurkeyMap from './mainPage/turkeyMap/page'
import './App.css'
import LoginPage from "./usersPages/loginPage.jsx";

function App() {
  return (
    <div><LoginPage/></div>
  )
}

export default App
