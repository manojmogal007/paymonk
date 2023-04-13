import React, { useContext, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
  } from '@chakra-ui/react'
  import axios from 'axios'
import { Context } from './Context'

  function Editmodal(prop) {
    const {setusers,users}=useContext(Context)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user,setuser]=useState({first_name:prop.first_name,last_name:prop.last_name,email:prop.email,id:prop.id,avatar:prop.avatar})
    // console.log(user)
    const handlechange=(e)=>{
        const {name,value}=e.target
        setuser({...user,[name]:value})
    }   

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.put(`https://reqres.in/api/users/${prop.id}`,user)
        .then((res)=>{
            console.log(res)
            if(res.status==200){
                const new_users=users.map((el)=>{
                    if(el.id===prop.id){
                        return user
                    }else{
                        return el
                    }
                })
                // console.log(new_users)
                setusers(new_users)
            }
            alert('User updated')
        })
        
        .catch((err)=>{
            // console.log(err)
            alert("Something went wrong") //alert if error from api 
        })
    }

    const {first_name,last_name,email}=user
    return (
      <>
        <Button onClick={onOpen}>Edit</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <Input  placeholder='First name' name='first_name' type='text' value={first_name} onChange={handlechange} />
              <Input mt='10px' placeholder='Last name' name='last_name' type='text' value={last_name} onChange={handlechange} />
              <Input mt='10px' placeContent='Email' name='email' type='email' value={email} onChange={handlechange} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={handlesubmit} variant='ghost'>Update</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default Editmodal