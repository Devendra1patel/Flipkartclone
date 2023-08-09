import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try {
        console.log("axios runing");
        return await axios.post(`${URL}/signup`,data);
    } catch (error) {
        console.log(`Error while calloing signup api`, error);
    }   
}
export const authenticateLogin = async (data) => {
    try {
        console.log("axios runing");
        return await axios.post(`${URL}/login`,data);
    } catch (error) {
        console.log(`Error while calloing signup api`, error);
    }   
}