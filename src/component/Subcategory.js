import React, {useState,useEffect}from 'react'
import {getcategories} from './function/category'
import {getSubs} from './function/sub'
import axios from 'axios'

 function Subcategory() {
     const [name,setName] = useState('');
     const [categories,setCategories] = useState([])
     const [keyword,setKeyword] = useState('');

    useEffect(()=>{
        loadcategories()
    },[])
    const loadcategories = () => {
        getcategories()
        .then((res)=>{
            //console.log('response data',res.data)
            setCategories(res.data);
        })
        .catch()
    }
    return (
        <div>
            
        </div>
    )
}

export default Subcategory
