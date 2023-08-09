import React from 'react'
import { navData }  from '../../constants/data'
import { Box, Typography, styled } from '@mui/material'

const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`;
const Container = styled(Box)`
    padding: 12px 8px;
    text-align:center;
`;
const Text = styled(Typography)`
    font-size: 14px;
    font-weight:600;
    font-family: inherit;
`;

const NavBar = () => {
  return (
       
       <Component>
       {
          navData.map(data =>{
            //    console.log("this is dataa ",ele.url)
              return ( <Container>
                    <img src={data.url} alt='nav' style={{width: 64}} />
                    <Text>{data.text}</Text>
                    {/* <h1>Devendra</h1> */}
               </Container> )
          })
       }
       </Component>
  )
}

export default NavBar