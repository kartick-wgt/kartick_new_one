import React ,{useState,useEffect} from 'react'
import {getcategories,createCategory} from '../../component/function/category'
import CategoryForm from './Categoryform'
 function Createcategory() {
    const [name,setName] = useState('');   
    const [categories,setCategories] = useState([])
    const [keyword,setKeyword] = useState('');

    const handleSubmit = (e) =>{
       e.preventDefault()
       //console.log(name)
       createCategory({name})
       .then((res)=>{
           setName('')
           loadcategories()
           console.log('success')
       })
       .catch()
    }

    // get category
    useEffect(()=>{
        loadcategories()
    },[])
    const loadcategories = () => {
        getcategories()
        .then((c)=>{
            console.log('response',c.data)
            setCategories(c.data);
            console.log('state',categories)
        })
        .catch()
    }
    // remove
    const handleRemove = (slug) => {
       alert('removed')
    }
    const handlesearchChange = (e) =>{
      e.preventDefault()
      setKeyword(e.target.value.toLowerCase())
    }

    const searched =(keyword) => (c) => c.name.toLowerCase().includes(keyword)


    return (
        <div>
           <h2>Create category</h2>
           <CategoryForm 
           name={name} 
           setName={setName} 
           handleSubmit={handleSubmit}/>
           <hr/>
           <input type="text" value={keyword} onChange={handlesearchChange}/>
           <hr/>                
           <table className="table">
            <thead>
              <tr>
                <th>name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
           { categories.filter(searched(keyword)).map((c)=>(
                <tr  key={c._id}>
                <td>{c.name}</td>
                <td><span onClick={()=>handleRemove(c.slug)}>Delete</span></td>
                </tr>
              ))
            } 
            </tbody>
          </table>
        
        </div>
    )
}

export default Createcategory
