import React from 'react'

import './css/homecss.css';
import { Link } from 'react-router-dom';

const Home = () => {
    
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
                        <h1>We sell lifestyle</h1>
                <p>Flat 40% OFF on premium brands</p>
            <form>
                <Link to="/signup">
                <button class="btn btn-primary">
                    SIGNUP
                </button> 
                </Link>  
                </form>
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

export default Home