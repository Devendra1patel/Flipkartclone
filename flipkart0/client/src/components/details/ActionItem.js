import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const LeftContainer = styled('Box')`
    min-width:40%;
    padding:40px 0 0 80px;
    // margin-bottum:20px;
    // display:flex;
    // flex-diraction:column;
    // align-item:center;
`;
const Image = styled('img')({
   width:'90%'
});
const StyledButton = styled(Button)`
    width:46%;
    height:50px;
    border-radius:4px;
`;
const ActionItem = ({product}) => {
  return (
    <LeftContainer >
        <Box style={{ border:'1px solid #f0f0f0',padding:'40px 20px',width:'95%'}}>
          <Image src={product.detailUrl} alt='detailUrl'></Image>
        </Box>
        <Box  >
          <StyledButton variant="contained" style={{marginRight:'10px',backgroundColor:'#ff9f00',fontSize:16,fontWeight:600}}><ShoppingCartIcon/> Add to Cart</StyledButton>
          <StyledButton variant="contained" style={{backgroundColor:'#fb541b',fontSize:16,fontWeight:600}}><FlashOnIcon/>Buy Now</StyledButton>
        </Box>
    </LeftContainer>
  )
}

export default ActionItem