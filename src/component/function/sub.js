import axios from 'axios'

export const getSubs = async ()=>{
   return await axios.get('http://localhost:4000/sub')
}

export const getSub = async (slug)=>{
    return await axios.get(`http://localhost:4000/sub/${slug}`)
}

export const removeSub = async (slug)=>{
    return await axios.delete(`http://localhost:4000/sub/${slug}`)
}

export const updateSub = async (slug,sub)=>{
    return await axios.put(`http://localhost:4000/sub/${slug}`,sub)
}

export const createSub = async (sub)=>{
    return await axios.post(`http://localhost:4000/sub`,sub)
}