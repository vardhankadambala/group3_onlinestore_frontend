import React from 'react'
import './css/Headcss.css';
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
const Header = () => {
    
    return (
        <div className='divcol'>
            <HeaderComponent />
            <div className='headdiv'>
                <Link to="/tech" className='link'>Electronics </Link>
                <Link to="/homeapp/" className='link'>HouseHold  </Link>
                <Link to="/child" className='link'>Children </Link>

            </div>
        </div>
    )
}

export default Header