import React from 'react'

import './css/homecss.css';
import { Link } from 'react-router-dom';

const After = () => {
    
    return (
        <div className='divhom'>
             <div class="container">
             <center>
            <h1 className='homeh'>WELCOME TO THE ONLINE STORE</h1>
            </center>
        <div class="content">
            
            <div class="bannerimage">
                <div class="innerbannerimage">
                    <center>
                    <div class="bannercontent">
                        <h3>YOUR ACCOUNT IS SUCESSFULLY CREATED</h3>
                        <h3>CLICK ON THE LOGIN BUTTON TO OPEN THE ONLINE STORE</h3>
                <br/>
                <form>
                <Link to="/login">
                <button class="btn btn-info" >
                    LOGIN
                </button> </Link>
            </form>
                    </div>
                    </center>
                </div>     
            </div>
        </div>
        </div>
        </div>
    )
}

export default After