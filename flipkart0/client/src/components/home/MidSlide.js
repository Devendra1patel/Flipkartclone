

import { Box } from '@mui/material'
import Slide from './Slide';
import styled from '@emotion/styled';

const LeftComponent = styled(Box)`
    width:83%;
   
`;
const Add = styled(Box)`
    width:17%;
    padding:10px;
    background:#ffffff;
    text-align:center;
    margin-left: 10px;
    margin-top:10px;
`;
const Parent = styled(Box)`
    display:flex;
`;
const MidSlide = ({products, title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
       <Parent>
        <LeftComponent>
            <Slide products={products} title={title} timer={timer}  />
        </LeftComponent>
        <Add>
            <img src={adURL} alt="add" style={{width:'217px'}} ></img>
        </Add>
       </Parent>
  )
}

export default MidSlide;