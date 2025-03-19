import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page from './mainPage/page'
import TurkeyMap from './mainPage/turkeyMap/page'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/turkey-map" element={<TurkeyMap />} />
      </Routes>
    </Router>
  )
}

export default App
