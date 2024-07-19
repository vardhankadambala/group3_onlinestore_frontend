import axios from "axios";

const url ='http://localhost:8086/project/store/users1'

export const createUser = async(user)=>{
    const response = await axios.post(url,user);
    return response
}