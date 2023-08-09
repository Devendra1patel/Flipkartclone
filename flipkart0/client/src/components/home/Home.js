import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Box, styled } from '@mui/material'
import Banner from './Banner'
import Slide from './Slide';

import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import MidSlide from './MidSlide';
import MidSection from './MidSection';


const Container = styled(Box)`
    background:#f2f2f2;
    padding:10px
`;
const Home = () => {

  const getProduct = useSelector(state => state.getProducts)
  const { products } = getProduct;
  // console.log("__",products);


  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getProducts())
  },[dispatch]);
  return (
    <>
        <NavBar/>
        <Container>
            <Banner/> 
            <Slide products={products} title="Fashion Top Deals" timer='true' />
            <MidSlide products={products} title="End of Season Bestsellers" timer='false'  />
            <MidSection/>
            <Slide products={products} title="Sports, Healthcare & more" timer='false'  />
            <Slide products={products} title="Essentials for Kids" timer='false'  />
            <Slide products={products} title="Fashion Best Sellers" timer='false'  />
            <Slide products={products} title="Books, Toys & More" timer='false'  />
        </Container>
    </>
  )
}

export default Home