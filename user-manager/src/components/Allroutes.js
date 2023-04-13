import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Userlist from '../pages/Userlist'
import Singleuser from '../pages/Singleuser'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Userlist/>}></Route>
            <Route path='/:id' element={<Singleuser/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes