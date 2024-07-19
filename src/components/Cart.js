import React, {useState, useEffect} from 'react'
//import { useNavigate } from 'react-router-dom'
import { getUserByUsername , BuyAllProducts , deleteProduct ,updateQty} from '../service/Prouse'
import { useParams } from 'react-router-dom'
//import { updateQty } from '../service/Prouse'
const Cart = () => {
    const [users, setUsers] = useState([])
    const [proQty,setProQty]=useState('')
    //const navigate = useNavigate()

    const {id} = useParams();

    useEffect(() => {
        getAllUsers();
    }, [])
    

    const getAllUsers = () => {
        getUserByUsername("kiran@111").then((response) => {
            setUsers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const BuyAll = () => {
        BuyAllProducts().then((response) =>{
            alert("THANKYOU FOR YOUR PURCHASE")
            getAllUsers();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

     const removeItem = (id) => {
        deleteProduct(id).then((response) =>{
            getAllUsers();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

     const updateItemQty =(id) => {
        updateQty(id,proQty).then((response) => {
            alert("UPDATES SUCCESSFULLY")
            getAllUsers();
        }).catch(error =>{
            console.log(error);
        })

     }
 

    return (
        <div className = "container">
            <br /><br />
            <h2 className = "text-center">CART ITEMS</h2>
            <button className = "btn btn-primary mb-2" onClick={BuyAll}>BUY ALL</button>
            <table className="table table-bordered table-striped">
                {/* <thead className="table-dark"> */}
                <thead>   
                    <tr>
                        <th>ID</th>
                        <th> ITEM NAME </th>
                        <th> ITEM QUANTITY </th>
                        <th> ITEM PRICE </th>
                        <th>Update QUANTITY</th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {id}> 
                                <td>{user.id}</td>
                                <td> {user.proName} </td>
                                <td> 
                                     {user.proQty}
                                </td>
                                <td>{user.proPrice} </td>
                                <td>
                                    <form>
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
                                    </form> 
                                </td>
                                    

                                <td>
                                    <button className = "btn btn-info" onClick = {() => updateItemQty(user.id)}
                                    
                                    style = {{marginLeft:"10px"}}> Update</button>
                                    
                                    <button className = "btn btn-danger"  onClick = {() => removeItem(user.id)}
                                    
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cart