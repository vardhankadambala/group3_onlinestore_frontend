import React from "react"
import img1 from "../../images/tech/Macbookair.png";
import '../../css/imgcss.css';
import {useState} from 'react'
import { CreateProUse } from "../../../service/Prouse";


const Mac = () => {
    
    const [proQty,setProQty]=useState('')

    const saveProUser = (e) =>{
        e.preventDefault();

        const prouser={userName:"kiran@111",proName:"Macbookair",proQty,proPrice:"150000"}
        

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
                
                    <img img src={img1} alt="Macbookair" />
                    <div className="caption">
                    <form>
                        <div className = "form-group mb-2">
                        <input
                                type = "text"
                                name = "proName"
                                className = "form-control"
                                value = " Macbookair"
                            >
                            </input>
                            <input
                                type = "number"
                                name = "proQty"
                                className = "form-control"
                                value = {proQty}
                                 placeholder="select the quantity upto 10"
                                min="1"
                                max="10"
                                onChange = {(e) => setProQty(e.target.value)}
                             >
                            </input>
                            <input
                                type = "number"
                                name = "proPrice"
                                className = "form-control"
                                value = "150000"
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

export default Mac
