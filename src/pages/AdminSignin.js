import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom'

import { Api } from '../utils/api'
 
import {colors} from "../assets/colors"

const AdminSignin = () => {
  const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit=()=>{
      Api.post('/admin/login-admin',{email,password}).then((res)=>{
        console.log(res.data)
        localStorage.setItem("admin",JSON.stringify(res.data))
        navigate('/adminDashboard')
      }).catch((err)=>{
        alert(err.response.data)
        console.log(err)
      })

}
  return (
    <div style={{height:"100vh", width:"100vw"}} className='flex flex-col items-center justify-center'>
        <h1 
        style={{color:colors.black}}
        className='uppercase text-2xl md:text-3xl font-bold my-4'>Sign in</h1>
        <div  className='w-11/12  md:space-y-4 md:w-5/12 flex flex-col items-center space-y-2'>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type='email' 
            className="w-full px-2 py-3 mb-2 rounded-xl border" 
            placeholder='Email' />
            <input 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            type="password" 
            className="w-full px-2 py-3 mb-2 rounded-xl border" 
            placeholder='Password' />
            <button 
            onClick={handleSubmit}
           
            style={{backgroundColor:colors.pink, color:colors.white}}
            className="w-full px-2 py-3 rounded-xl mb-2.5 hover:text-zinc-600 uppercase">
                sign in</button>
        </div>
        
    </div>
  )
}

export default AdminSignin