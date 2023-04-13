import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../components/Context'
import axios from 'axios'
import Userbar from '../components/Userbar'
import Editmodal from '../components/Editmodal'
import { Button } from '@chakra-ui/react'
import '../style/Userlist.css'


const Userlist = () => {
    const {users,setusers}=useContext(Context)
    const [total,settotal]=useState(null)
    const [perpage,setperpage]=useState(null)
    const [page,setpage]=useState(1)
    // console.log(users)

    const fetchuser=()=>{
        // if(users.length!==0){
        //     return;
        // }
        axios.get(`https://reqres.in/api/users?page=${page}`)
        .then((res)=>{
            // console.log(res)
            setusers(res.data.data)
            settotal(res.data.total)
            setperpage(res.data.per_page)
        })
        .catch((err)=>{
            // console.log(err)
            alert("Something went wrong") //alert if error from api 
        })
    }

    useEffect(()=>{
        fetchuser()
    },[page])
  return (
    <div>
        <h1>All users</h1>
       {
        users?.map((el)=>(
            <div className='allusers' key={el.id}>
                <Userbar {...el} />
                <Editmodal {...el}/>
            </div>
        ))
       }
       <div>
        <Button disabled={page===1} onClick={()=>setpage(page-1)}>Prev</Button>
        <Button>{page}</Button>
        <Button disabled={perpage*page===total?true:false} onClick={()=>setpage(page+1)}>Next</Button>
       </div>
    </div>
  )
}

export default Userlist