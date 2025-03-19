import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <Link to={'/'}>Anasayfa</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/destinations'}>Destinations</Link>
            <Link to={'/turkey_map'}>Türkiye Haritası</Link>
        </div>
    )
}

export default Header