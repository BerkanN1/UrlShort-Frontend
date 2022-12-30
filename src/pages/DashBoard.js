import React,{useEffect,  useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { MdDelete,MdLink,MdContentCopy } from "react-icons/md";
import { HiSwitchHorizontal } from "react-icons/hi";
import { IoStatsChartSharp } from "react-icons/io5";
import { FiLink} from "react-icons/fi";
import { Api } from "../utils/api";
import {colors} from "../assets/colors";
import styled from "styled-components";
import tw from 'twin.macro';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const InputContainer = styled.div`
box-shadow:-1px 1px 15px -1px #000000;
${tw`
md:my-4
md:max-w-md
my-3
px-2
py-1
rounded-lg
flex

justify-between
items-center
space-x-1
`}
`

const Button = styled.button`
color:#F2F1FD;
min-width:40px;
display:inline-block;
&:hover{
  color:#F2F1FD;
  background-image: linear-gradient(90deg, #31093E,#31093E, #31093E);
  border:1px #F2F1FD solid;
}
background-image: linear-gradient(60deg,#C106AD,#C106AD,#C106AD, #F51230, #F51230);
${tw`
md:px-5 
md:py-3 
py-2
px-3
rounded-3xl
md:rounded-3xl 
transition`}
`
const Input = styled.input`
color:black;
padding-left:4px;
border: 8;
outline:2;
${tw`


px-3
py-2
border-none
rounded-lg
`}
`


const InputHolder = styled.div`
flex:1;
${tw`
flex items-center
`}
`
const ResponseText = styled.p`
${tw`
text-base font-thin
pb-2
`}
`





const DashBoard = () => {
 const date = new Date()
  const navigate = useNavigate()


  const user = JSON.parse(localStorage.user)

  const [links, setLinks] = useState([])
  const User = localStorage.user
    
     console.log(user)
      
      const [longUrl, setLongUrl] = useState('')
      const [short, setShort] = useState('')
      const [tag, setTag] = useState('')
      const [deadline, setdDeadline] = useState('')


  useEffect(() => {
  Api.get(`api/get-urls/${user._id}`).then((response)=>{
    console.log(response.data)
    setLinks(response.data)
  }).catch(err =>{
    alert(err.response.data)
  })
  }, [])
  const handleLogout = ()=>{
    localStorage.clear("user")
    navigate('/welcome')
  }
  
    
  
      const handleSubmit = () =>{
            console.log(longUrl)
            Api.post('/api/create-short-url',{url:longUrl,createdBy:user?._id,tag:tag,deadline:deadline}).then(
            (response)=>{
              console.log(response)
              setShort(response.data.shortUrl)
            }
            ).catch((err)=>{console.log(err)})
  
  
        }

  return (
    <div className='w-full  md:p-6 p-4'>
      <div className='flex justify-between'>
        <div className=''>
          <h4 
          onClick={()=>navigate('/')}
          style={{color:colors.pink}}
          className='text-2xl md:text-3xl md:font-bold font-semibold cursor-pointer hover:opacity-80'>Url Shortener</h4>
        </div>
        <div className='flex items-center space-x-2'>
          <h5
          onClick={handleLogout}
          style={{color:colors.black}}
          className='text-lg font-medium hover:text-white cursor-pointer'
          >Signout</h5>
          <img className='hidden md:block w-8 h-8' src={User} alt='user' />
        </div>
      </div>
      <InputContainer >
<InputHolder >
<FiLink size={24} color={colors.gray}/>
  <Input 
  value={longUrl}
  onChange={(e)=>setLongUrl(e.target.value)}
  placeholder="Url Giriniz." />
</InputHolder>
</InputContainer>
<InputContainer >
<InputHolder >
<FiLink size={24} color={colors.gray}/>
  <Input 
  value={tag}
  onChange={(e)=>setTag(e.target.value)}
  placeholder="Tag Giriniz. " />
</InputHolder>
</InputContainer>
<InputContainer >
<InputHolder >
<FiLink size={24} color={colors.gray}/>

<DatePicker 
        selected={deadline}
        onChange={(date) => setdDeadline(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={1}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
       placeholderText='Tarih giriniz'
      />
   
</InputHolder>
</InputContainer>
  
  
  <Button
  onClick={handleSubmit}
   >Get Link</Button>
  {short && (<ResponseText>
    {short}
  </ResponseText>)}
      <h3 className='text-base md:text-xl font-semibold mt-4 md:mt-6'>Your Links</h3>
      <div className='md:grid grid-cols-2 gap-2 space-y-4'>
 
        
        {links.length >0 && links.map((link, index)=>(
        <div key={index} className=' w-full md:w-full md:mx-3 space-y-5 my-4 p-4 shadow-md shadow-black-500/50'>
          <div className='flex justify-between items-center  '>
            <h6 className='font-bold text-base'>{link.tag}</h6>
            <div 
            style={{color:colors.red}}
            className='flex justify-between items-center cursor-pointer rounded-lg px-2 py-1 hover:bg-red-200 '>
           < MdDelete />
           <p>Delete</p>
            </div>
          </div>
          <div className='flex space-x-2 items-center'>
            <small style={{color:colors.gray}} className='text-sm font-extralight'>{link.createdAt}</small>
            
            
          </div>
          <div className='md:flex items-center justify-between border py-2 px-3 rounded-md'>
            <div className='flex items-center space-x-2 '>
            <MdLink color={colors.gray} />
            <small style={{color:colors.black}}>{link.shortUrl}</small>
            </div>
            <div style={{color:colors.blue}} className='rounded-lg px-2 py-1 hover:bg-indigo-200  flex items-center space-x-2 cursor-pointer'>
            <MdContentCopy />
            <p>copy</p>
            </div>
            
          </div>
          <div className=' space-x-1'>
          <div className='flex items-center space-x-2'>
          <HiSwitchHorizontal />
          <h6 className='font-bold'>Destination:</h6>
          </div>
          <small>{link.longUrl}</small>
          </div>
          <div>
           <div className='flex items-center space-x-1'>
           <h6 className='font-bold'>{link.clicks}</h6>
          <IoStatsChartSharp />
           </div>
           <h6 style={{color:colors.gray}}>Total clicks</h6>
          </div>
          <div>
          <h6 style={{color:colors.gray}}>Tag</h6>
          <a href={link.shortUrl} > {link.tag} </a>
            </div>
            <div>
            <h6 style={{color:colors.gray}}>Deadline</h6>
              <h6>{link.deadline}</h6>
            </div>
         
        </div>)
        )
}
      </div>
    </div>
   
  )
}


export default DashBoard;