import React from "react"
import img1 from "../../images/children/Bag.png";
import { Link } from "react-router-dom";
import '../../css/imgcss.css';
import {useState} from 'react'
import { CreateProUse } from "../../../service/Prouse";


const Bag = () => {
    
    const [proQty,setProQty]=useState('')

    const saveProUser = (e) =>{
        e.preventDefault();

        const prouser={userName:"kiran@111",proName:"Bag",proQty,proPrice:"4000"}
        

        console.log(prouser);

        CreateProUse(prouser).then((response) => {

            alert("ADDED TO THE CART SUCESSFULLY")
            console.log(response.data)

        })
        .catch(error => {
                console.log(error)
        })

        
    }

    return (
        <div>
            <div className="items">
                
                    <img img src={img1} alt="Bag" />
                    <div className="caption">
                    <form>
                        <div className = "form-group mb-2">
                        <input
                                type = "text"
                                name = "proName"
                                className = "form-control"
                                value = "Bag "
                            >
                            </input>
                            <input
                                type = "number"
                                name = "proQty"
                                className = "form-control"
                                 placeholder="select the quantity upto 10"
                                value = {proQty}
                                min="1"
                                max="10"
                                onChange = {(e) => setProQty(e.target.value)}
                             >
                            </input>
                            <input
                                type = "number"
                                name = "proPrice"
                                className = "form-control"
                                value = "4000"
                                disabled="disabled"
                            >
                            </input>
                        </div>
                    </form>

                        
                        <Link>
                        <button className = "btn btn-danger" onClick = {(e) => saveProUser(e)}>
                            Add TO Cart
                        </button></Link>
                    </div>
                </div>
               </div>
            
    )
}

export default Bag
