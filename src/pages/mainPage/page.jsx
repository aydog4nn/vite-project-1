import React from 'react'
import { Link } from 'react-router-dom'
import './page.css'
import Header from '../../components/Header'

const Page = () => {
    return (
        <div className="tourist-guide">

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