import styled from "styled-components"
import tw from 'twin.macro'
import { Link, useNavigate} from "react-router-dom";

import { FiAlignCenter} from "react-icons/fi";





const WelcomeContainer = styled.div`
width:100vw;
heiht:100vh
flex:1;
${
  tw`
  px-5
  md:px-16
  `
}
`
const HeaderContainer = styled.div`
min-height:64px;
@media(min-width:678px){
  margin-bottom: 12px;
}
${tw`

flex
w-full
items-center
justify-between
`}
`
const HeaderLeft = styled.div`
flex:3;
${tw`
hidden
md:flex

justify-between
items-center
list-none
`}
`
const HeaderRight = styled.div`
flex:2;
${tw`
flex

justify-between
items-center
list-none
`}
`

const HeaderLinks =styled.h1`
color: #31093E;
cursor:pointer;
&:hover {
  color:#AC0E29;
}
${
  tw`font-semibold text-base `
}
`
const HeaderTitle = styled.h1`
color: #C106AD;
text
${tw`
text-3xl
font-bold
md:text-6xl
`}
`



const WelcomeContent = styled.div`
${tw`
mt-8
md:flex
w-full
justify-between
items-center
`}
`
const ContentLeft = styled.div`
flex:1
${tw``}
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

const ContentHeader = styled.h6`
color: #31093E;
${
  tw`
  text-lg
  md:text-4xl
font-bold`
}

`
const ContentBody = styled.p`
color:#A5A1B0;
${
  tw`
  my-5
font-extralight
md:font-light
text-sm
  `
}
`

const Toggler = styled.div`
@media(min-width:680px){
  display:none;
}
`





const Seperator = styled.div`
background-color:#31093E;
min-height:1px;
@media(min-width:768px){

  display:none
  

}
${tw`

`}
`

function Welcome() {
  const User = localStorage.user
   const user = User?JSON.parse(User):null;
   console.log(user)
    const navigate = useNavigate()
   


  return (
    <WelcomeContainer>
    <HeaderContainer>

      <HeaderRight>
      <HeaderTitle>Url Shortener</HeaderTitle>
      </HeaderRight>
      <HeaderLeft>
        
        {(!user) && 
        (
        <Link to='/signin'  >
        <HeaderLinks>Signin</HeaderLinks>
        </Link>)}
        {(!user) &&
        <Link to='/signup' >
        <HeaderLinks>Signup</HeaderLinks>
        </Link>}
        
        <Link to='/adminSignin'  >
        <HeaderLinks>Admin</HeaderLinks>
        </Link>
        {(!user) &&
        <Button onClick={()=>navigate('/signin')}>Get started</Button>
}
      </HeaderLeft>
      <Toggler>
      <FiAlignCenter size={24} color='#31093E'/>
      </Toggler>
     
      </HeaderContainer>  
<Seperator>
  </Seperator>
  <WelcomeContent>
  <ContentLeft>
<ContentHeader>
  Şirketler için <br></br>basit url kısaltcı
  </ContentHeader>
 
   
  </ContentLeft>
  </WelcomeContent>
  
    </WelcomeContainer>
    
  );
}

export default Welcome;
