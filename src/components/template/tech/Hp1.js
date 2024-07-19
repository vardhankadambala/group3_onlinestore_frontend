import React from "react"
import img1 from "../../images/tech/HPInspiron.png";
import '../../css/imgcss.css';
import {useState} from 'react'
import { CreateProUse } from "../../../service/Prouse";


const Hp = () => {
    
    const [proQty,setProQty]=useState('')

    const saveProUser = (e) =>{
        e.preventDefault();

        const prouser={userName:"kiran@111",proName:"HPInspiron",proQty,proPrice:"66000"}
        

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
                
                    <img img src={img1} alt="HPInspiron" />
                    <div className="caption">
                    <form>
                        <div className = "form-group mb-2">
                        <input
                                type = "text"
                                name = "proName"
                                className = "form-control"
                                value = " HPInspiron"
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
                                value = "66000"
                                disabled="disabled"
                            >
                            </input>
                        </div>
                    </form>

                        
                        
                        <button className = "btn btn-danger" onClick = {(e) => saveProUser(e)}>
                            Add TO Cart
                        </button>
                    </div>
                </div>
               </div>
            
    )
}

export default Hp
