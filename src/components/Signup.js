import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom';
import { createUser } from '../service/Userservice';


const Signup = () =>{
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [emailId,setEmail]=useState('')
    const [userName,setUserName]=useState('')
    const [userPass,setPassword]=useState('')

     const navigate = useNavigate();
    // const{id} = useParams();

    const saveUser = (e) =>{
        e.preventDefault();

        const user = {firstName,lastName,emailId,userName,userPass}

        console.log(user);

        createUser(user).then((response) => {

            console.log(response.data)
            navigate('/after')

        })
        .catch(error => {
                console.log(error)
        })
    }
    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h2  className = "text-center">SIGNUP</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

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



                                <button className = "btn btn-success" onClick = {(e) => saveUser(e)} >Submit </button>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )

}

export default Signup