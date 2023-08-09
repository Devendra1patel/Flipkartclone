import React from 'react'
import {AppBar, Box, Toolbar,Typography,styled} from '@mui/material'
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
    `;
const Component = styled(Link)`
    margin-left:12%;
    text-decoration:none;
    color:inherit;
    `; 
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    `
const PlusImage = styled('img')(
    {
        width: 10,
        height: 10,
        marginLeft: 4
    }
)
const CustomButtonWrappeer = styled(Box)`
    margin:0 5% 0 auto;
`;
const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledHeader>
        <Toolbar style={{minHeight:'55px'}} >
            <Component to='/'>
                <img src={logoURL} alt="Logo" style={{ width: 75}} ></img>
                <Box style={{display:'flex'}} >
                    <SubHeading>Explore&nbsp;
                        <Box component='span' style={{color:'#FFE500'}} >Plus</Box>
                    </SubHeading>
                    <PlusImage src={subURL}></PlusImage>
                </Box>
            </Component>
            <Search/>
            <CustomButtonWrappeer>
                <CustomButton/>
            </CustomButtonWrappeer>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header