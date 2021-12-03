import { Box, CssBaseline, Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import {useState,useEffect } from 'react'

import axios from 'axios'
function Paginationapi() {
  const [page,setPage] = useState(1)
  const [posts, setPosts] = useState([]);
  const [totalcount,setTotalcount] = useState()
  const [search,setSearch] = useState('')

  const loadPosts = async () => {
    const res = await axios.get(`http://localhost:5000/user-list?page=${page}&search=${search}`)
    console.log('response data',res.data.User)
    setPosts(res.data.User)
    setTotalcount(res.data.pagination.totalPages)
  }

  useEffect(() => {
    loadPosts();
  }, [page][search]);
  const searchHandle = (event)=>{
    setSearch(event.target.value)
  }
  return (
<>
<input type="text" value={search} name="search" onChange={event=>searchHandle(event)} className="form-control" />
        <div className="container">
          <h2>Basic Table</h2>          
          <table className="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post)=>(
                <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.role_name}</td>
                </tr>
              ))}
             
            </tbody>
          </table>
        </div>
        <Box py={3} display="flex" justifyContent="center">
        <Pagination 
        count={totalcount} 
        color = "primary" 
        variant="outlined"
        showFirstButton={true}
        showLastButton={true}
        onChange={(event,value)=>setPage(value)}
        />
        </Box>
  
    </>
  );
}

export default Paginationapi;
