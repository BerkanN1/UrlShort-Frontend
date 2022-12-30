
import { Link } from 'react-router-dom';
import {colors} from "../assets/colors";
import {useNavigate} from 'react-router-dom'
import "../index.css"





const AdminDashboard = ()=>{
    const Admin = localStorage.admin
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.clear("admin")
        navigate('/welcome')
      }
return(
    <view >

<div className='w-full  md:p-6 p-4'>
      <div className='flex justify-between'>
        <div className=''>
          <h4 
          
          style={{color:colors.pink}}
          className='text-2xl md:text-3xl md:font-bold font-semibold cursor-pointer hover:opacity-80'>Admin Dashboard</h4>
        </div>
        <div className='mt-2'>
     <Link to='/adminSignup'>Ekle</Link>
       </div>
        <div className='flex items-center space-x-2'>
          <h5
          onClick={handleLogout}
          style={{color:colors.black}}
          className='text-lg font-medium hover:text-white cursor-pointer'
          >Signout</h5>
          <img className='hidden md:block w-8 h-8' src={Admin} alt='user.png' />
        </div>
       
      </div>
      </div>

<div className='md:flex items-center justify-between border py-2 px-3 rounded-md'>
<iframe className='e' width="100%" height="480" src="https://charts.mongodb.com/charts-123-ipxzc/embed/charts?id=63ade800-f194-4e2b-8583-7f8e5373fbaa&maxDataAge=10&theme=light&autoRefresh=true">
</iframe>
</div>

<div className='md:flex items-center justify-between border py-2 px-3 rounded-md'>
<iframe className='c' width="640" height="480" title='3' src="https://charts.mongodb.com/charts-123-ipxzc/embed/charts?id=63ad8653-2597-4cd8-8ff1-b6148d3bdb9a&maxDataAge=10&theme=light&autoRefresh=true">
</iframe>

</div>   

<div className='md:flex items-center justify-between border py-2 px-3 rounded-md'>
<iframe className='a'width="540" height="380" title='1' src="https://charts.mongodb.com/charts-123-ipxzc/embed/charts?id=63ad8732-4545-424f-8797-848d9531f0d4&maxDataAge=10&theme=light&autoRefresh=true">
</iframe>
<iframe className='b' width="540" height="380" title='2' src="https://charts.mongodb.com/charts-123-ipxzc/embed/charts?id=63ad869e-2597-48f5-8a31-b6148d3c0c9d&maxDataAge=10&theme=light&autoRefresh=true">
</iframe>
</div>

    </view>
    
)
};
export default AdminDashboard