import React from 'react'
import { Link } from 'react-router-dom'
import './page.css'

const Page = () => {
    return (
        <div className="tourist-guide">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="nav-brand">TourGuide</div>
                <ul className="nav-links">
                    <li><a href="#home">Ana Sayfa</a></li>
                    <li><a href="#destinations">Destinasyonlar</a></li>
                    <li><a href="#about">Hakkımızda</a></li>
                    <li><a href="#contact">İletişim</a></li>
                    <li><Link to="/turkey-map">Türkiye Haritası</Link></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Türkiyeyi Keşfet</h1>
                    <p>En güzel destinasyonları keşfedin ve unutulmaz anılar biriktirin</p>
                    <button className="cta-button">Destinasyonları Keşfet</button>
                </div>
            </div>
        </div>
    )
}

export default Page