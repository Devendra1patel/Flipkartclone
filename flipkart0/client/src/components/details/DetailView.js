import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled, Box, Typography, Grid } from "@mui/material";
import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";
// import styled from "@emotion/styled";

const Component = styled(Box)`
    background:#f2f2f2;
    margin-top:55px;
`;
const Container = styled(Grid)`
    display:flex;
    backgournd:#ffffff;
    margin-top:50px;
`;
const RigthContainer = styled(Grid)`
    margin-top:50px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  
  useEffect(() => {
      if (product && id !== product.id) {
          dispatch(getProductDetails(id));
        }
    }, [ id, product, loading]);
    // console.log("sdfsdfsd",{product});

  // useEffect(()=>{
  //     dispatch(getProductDetails(id));
  // },[dispatch,id])

  return (
    <Component>
         {/* Object.keys(product).length <= 0 && */}
      { product && Object.keys(product).length &&
        <Container container >
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}></ActionItem> 
          </Grid>
          <RigthContainer item lg={8} md={8} sm={8} xs={8}>
            <Typography>{product.title.longTitle}</Typography> 
            <Typography style={{display:'flex',margin:'5',fontSize:'14',color:'#878787'}} >
                8 Rating & 1 Review
                <Box><img src={fassured} style={{width:77,marginLeft:15}} ></img></Box>
            </Typography>
            <Typography style={{display:'flex'}} >
                <Box component="span" style={{fontSize:28,display:'flex',alignItems:'center',justifyContent:'center'}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box compornent="span" style={{color:'#878787',textDecoration:'line-through',display:'flex',alignItems:'center',justifyContent:'center'}}><del>₹{product.price.mrp}</del></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C',display:'flex',alignItems:'center',justifyContent:'center'}}>{product.price.discount}</Box> 
            </Typography> 
          </RigthContainer>
        </Container>
      }
    </Component>
  );
}; 
export default DetailView;
