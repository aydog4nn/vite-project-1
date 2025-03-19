import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Travel Guide</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Anasayfa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/contact'}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/destinations'}>Destinations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/turkey_map'}>Türkiye Haritası</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header