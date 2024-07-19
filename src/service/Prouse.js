import axios from "axios";

const url ='http://localhost:8086/project/store/prouse'

const url1 ='http://localhost:8086/project/store/prousername'

const url2 ='http://localhost:8086/project/store/prouserid'

export const CreateProUse = async(prouse)=>{
    const response = await axios.post(url,prouse);
    return response
}

export const getUserByUsername = async (userName) => {
    const response = await axios.get(url + '/' + userName);
    return response;
}

export const updateQty = async (id, proQty) => {
    const response = await axios.put(url + '/' + id + '/' + proQty);
    return response;
}

export const BuyAllProducts = async () => {
    const response = await axios.delete(url1 );
    return response;
}

export const deleteProduct = async (id) => {
    const response = await axios.delete(url2 + '/' +id);
    return response;
}

// useEffect(() => {

//     if(id){
//         getEmployeeById(id).then((response) =>{
//             setFirstName(response.data.firstName)
//             setLastName(response.data.lastName)
//             setEmail(response.data.emailId)
//             //console.log(response.data)
//         }).catch(error => {
//             console.log(error)
//         })
//     }

// }, [id])