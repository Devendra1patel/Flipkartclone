import { styled, Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import image from '../../constants/data.js'
import { authenticateLogin, authenticateSignup } from '../../service/api.js'
import { DataContext } from '../../context/DataProvider.js'

const Component = styled(Box)`
    height: 70vh;
    width: 35vw;
    display:flex
    `
const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 82%;
    width: 30%; 
    padding: 45px 35px;
    & > p, & > h2 {
        color:#FFFFFF;
        font-weigth:600;
    }
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding:35px 35px;
    & > div, & > button, & > p{
        margin-top:20px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const RequestOtp = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%):
`;
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;
const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`
const accountIntitialValues = {
    login:{
        view:'login',
        heading: "Login",
        subHeading: 'Get access to uour Orders, Wishlist and Recommendatinos'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you are new here!",
        subHeading: 'sign up with yor mobile number to get started'
    }
}
const signupIntitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}
const loginIntitialValues = {
    username:'',
    password:''
}

const LoginDialog = ({ open,setOpen }) => {
    const [account, toggleAccount] = useState(accountIntitialValues.login);
    const [signup,setSignup] = useState(signupIntitialValues)
    const {setAccount} = useContext(DataContext);
    const [login, setLogin] = useState(loginIntitialValues)
    const handleClose = () =>
    {
        setOpen(false);
        toggleAccount(accountIntitialValues.login);
    }
    const toggleSignup = () =>{
        toggleAccount(accountIntitialValues.signup)
    }
    const onInputChange=(e)=>{
        setSignup({...signup, [e.target.name]: e.target.value})
        console.log(signup);
    }
    const signupUser = async ()=>{
      let responce =  await authenticateSignup(signup); 
      if(!responce) return;
      handleClose();
        setAccount(responce.data.firstname);
    }  
    const valueChange = (e)=>{
        setLogin({...login,[e.target.name]: e.target.value})
    }
 const loginUser = async () =>{
    const response = await authenticateLogin(login);
    if(!response) return;
    handleClose();
    setAccount(response.data.firstname);
    console.log(response);
 }
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxwidth: 'unset', maxHeight: 'unset'}}} >
        <Component>
            <Image>
                <h2>{account.heading}</h2>
                <p>{account.subHeading}</p>
            </Image>
           { account.view=='login' ? 
            <Wrapper>
                <TextField label='Enter Email/Mobile number' onChange={ (e)=>{valueChange(e)} } name='username' variant='standard'></TextField>
                <TextField label='Enter password' onChange={(e)=>{valueChange(e)}} name='password'  variant='standard'></TextField>
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                <LoginButton onClick={()=>loginUser()} >Login</LoginButton>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequestOtp>Request OTP</RequestOtp>
                <CreateAccount onClick={()=> toggleSignup()}  >New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
              
                <TextField label='First Name' variant='standard'     onChange={(e)=>onInputChange(e)} name='firstname' ></TextField>
                <TextField label='Last Name' variant='standard'      onChange={(e)=>onInputChange(e)} name='lastname' ></TextField>
                <TextField label='Enter UserName' variant='standard' onChange={(e)=>onInputChange(e)} name='username' ></TextField>
                <TextField label='Enter Email' variant='standard'    onChange={(e)=>onInputChange(e)} name='email' ></TextField>
                <TextField label='Enter Password' variant='standard' onChange={(e)=>onInputChange(e)} name='password' ></TextField>
                <TextField label='Enter Phone' variant='standard'    onChange={(e)=>onInputChange(e)} name='phone' ></TextField>
                <LoginButton onClick={()=> signupUser()} >Continue</LoginButton>
               
            </Wrapper> 
             }
        </Component>
    </Dialog>
  )
}

export default LoginDialog