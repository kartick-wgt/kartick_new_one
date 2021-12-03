import axios from 'axios'

export const getcategories = async ()=>{
   return await axios.get(`http://localhost:4000/categories`)
}

export const createCategory = async (category)=>{
   return await axios.post(`http://localhost:4000/category`,category)
}
