import React from 'react'
import { Link } from 'react-router-dom'

const Userbar = (props) => {
  return (
    <div>
        <Link to={`/${props.id}`}><p style={{color:'blue',textDecoration:'underline'}}>{`${props.first_name} ${props.last_name}`}</p></Link>
    </div>
  )
}

export default Userbar