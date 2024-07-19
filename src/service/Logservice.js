import axios from "axios";


const url1 ='http://localhost:8086/project/store/login1'

// export const getUserByUserName = async (userName) => {
//     const response = await axios.get(url + '/' + userName);
//     return response;
// }

export const loginByUserName = async (userName,userPass) => {
    const response = await axios.get(url1 + '/' + userName+'/'+userPass);
    return response;
}