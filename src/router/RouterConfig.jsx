import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Destinations from '../pages/Destinations'
import NotFoundPage from '../pages/NotFoundPage'
import Header from '../components/Header'
import TurkeyMap from '../pages/turkeyMap/page'
import Page from '../pages/mainPage/page'
function RouterConfig() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Page />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/destinations' element={<Destinations />} />
                <Route path='/turkey_map' element={<TurkeyMap />} />
                <Route path='*' element={<NotFoundPage />} />


            </Routes>
        </div>
    )
}

export default RouterConfig