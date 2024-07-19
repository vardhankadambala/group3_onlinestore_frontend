// import React, {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
// import { getUserByUsername  , updateQty} from '../service/Prouse'
// import { useParams } from 'react-router-dom'
// const Cartchange = () => {
//     const [users, setUsers] = useState([])
//      const [proQty,setProQty]=useState('')
//      const navigate = useNavigate()

//     const {id} = useParams();

//     useEffect(() => {
//         getAllUsers();
//     }, [])
    

//     const getAllUsers = () => {
//         getUserByUsername("kiran@111").then((response) => {
//             setUsers(response.data)
//             console.log(response.data);
//         }).catch(error =>{
//             console.log(error);
//         })
//     }

//     const updateQty =(event) => {
//         event.preventDefaault();
//         updateQty(id,proQty).then((response) => {
//             navigate('/cart')
//         }).catch(error =>{
//             console.log(error);
//         })
//     }




//     return (
//         <div className = "container">

//                 <div className="items">
                
//                 <div className = "card-body">
//                     <form>
//                     <label className = "form-label">Product QUANTITY :</label>
//                         <input
//                             type = "number"
//                             name = "proQty"
//                             className = "form-control"
//                             value = {proQty}
//                             placeholder="select the quantity upto 10"
//                             min="1"
//                             max="10"
//                             onChange = {(e) => setProQty(e.target.value)}
//                          >
//                         </input>

//                     </form>
        
                    
//                     <button className = "btn btn-danger" >
//                         UPDATE QUANTITY
//                     </button>
//                 </div>
//             </div>
//             </div>
//     )

        
// }

// export default Cartchange