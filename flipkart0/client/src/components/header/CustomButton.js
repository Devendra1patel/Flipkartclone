import {useState,useContext} from 'react'
import { Box, Button, Typography, styled } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right:40px;
        font-size:16px;
        align-items:center
    }
`;
const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform:none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height:32px;
`;
const CustomButton = () => {
    const [open, setOpen] = useState(false)
    const {account} = useContext(DataContext)
    const openDialog = ()=>
    {
        setOpen(true);
    }
    console.log("account:",account);
  return (
    <Wrapper>
        {
            account? <Profile account={account}/> :
                <LoginButton variant='contained' onClick={()=> openDialog()} >Login</LoginButton>
        }

        <Typography style={{marginTop:3, width:135 }} >Become a Seller</Typography>
        <Typography style={{marginTop:3 }} > More</Typography>

        <Box style={{display:'flex'}} >
            <ShoppingCart/> Cart
        </Box>
        <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButton