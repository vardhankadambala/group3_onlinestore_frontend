import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom';
import { loginByUserName } from '../service/Logservice';

const Login = () =>{
    const [userName,setUserName]=useState('')
    const [userPass,setPassword]=useState('')

        const navigate = useNavigate();

        const handleLogin = (event) => {
            loginByUserName(userName,userPass).then((response) =>{
                console.log(response.data)

                if (response.data === "sucess"){
                    navigate(`/tech`)
                    alert("LOGIN COMPLETED")
                    
                }
                else{
                    alert("LOGIN FAILED => INVALID PASSWORD")
                }

        }).catch(error => {
            console.log(error)
            alert("LOGIN FAILED=>Invalid user id")
        })
  

    }
    return (
        <div >
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h2  className = "text-center">LOGIN</h2>
                        <div className = "card-body">
                            <form>
                            <div className = "form-group mb-2">
                                    <label className = "form-label"> User Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter user name"
                                        name = "userName"
                                        className = "form-control"
                                        value = {userName}
                                        onChange = {(e) => setUserName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Password :</label>
                                    <input
                                        type = "password"
                                        placeholder = "Enter password"
                                        name = "userPass"
                                        className = "form-control"
                                        value = {userPass}
                                        onChange = {(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>



                                <button className = "btn btn-success" onClick = {(e) => handleLogin(e)}>Submit </button>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )


}

export default Login