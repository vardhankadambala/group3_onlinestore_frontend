import React from 'react'
import './css/Headcss.css';
import { Link } from 'react-router-dom';
const HeaderComponent = () => {
    return (
        <div class="header">
        <div class="innerhedder">
            <div class="logo">
                <Link to="/tech" className='link1'> ONLINE STORE</Link>
            </div>
            
             <div class="headerlink">
                <Link to="/" className='link1'>Logout</Link>
            </div>

            <div class="headerlink">
                <Link to="/cart" className='link1'>Cart</Link>
            </div>
        </div>
    </div>
    )
}

export default HeaderComponent