import React from 'react'

const Categoryform = ({handleSubmit,name,setName}) => {
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input type="text" required value={name} onChange={(e)=>setName(e.target.value)}/>
                <button>Submit</button>
            </form> 
        </div>
    )
}

export default Categoryform
