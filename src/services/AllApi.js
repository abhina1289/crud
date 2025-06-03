import base_url from "./base_url";
import axios from "axios";

export const addprofile=async(data) =>{
    return await axios.post(`${base_url}/students`,data)
}
export const addDeatilsprofile=async(data) =>{
    return await axios.post(`${base_url}/students`,data)
}
 export const getprofile=async()=>{
    return await axios.get(`${base_url}/students`)
 }
 export const deleteprofileApi=async(id)=>{
    return await axios.delete(`${base_url}/students/${id}`)

}
export const updateProfile = async (id, data) => {
  return await axios.put(`${base_url}/students/${id}`, data);
};