import { Box,Button,Divider ,Typography, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  background: #ffffff;
  margin-top: 10px;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display:flex;
`;
const Timer = styled(Box)`
    display:flex;
    align-itme:center;
    margin-left:10px;
    color:#7F7F7F;
`;
const ViewAllButton = styled(Button)`
    margin-left:auto;
    background-color:#2874f0;
    border-radius:2px;
    font-size:13px;
    font-weight:600;
`;
const Image = styled('img')({
    width:'auto',
    height:'150px'
})
const Text = styled(Typography)`
    font-weight:14px;
    margin-top:5px;
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Slide = ({ products, title, timer }) => {
  const timerURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
    const renderer = ({ hours, minutes, seconds, completed }) => {
        return <Box>{hours}:{minutes}:{seconds} Left </Box>;
    }
  return (
    <Component>
      <Deal>
        <Typography sx={{fontSize:'22px',fontWeight:'600'}} >{title}</Typography>
           { timer==='true' && <Timer>
            <img src={timerURL} alt="timer"></img>
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
            </Timer> }
        <ViewAllButton variant="contained" color="primary">VIEW ALL</ViewAllButton>
      </Deal>
      <Divider/>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        infinite={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
            <Link to={`product/${product.id}`} style={{textDecoration:'none'}} >
            <Box textAlign="center" style={{padding:'25px 15px'}} >
                <Image src={product.url} alt=""></Image>
                <Text  sx={{fontWeight:'600',color:'#212121'}} >{product.title.shortTitle}</Text>
                <Text sx={{color:'green'}}>{product.discount}</Text>
                <Text sx={{color:'#212121',opacity:'.6'}} >{product.tagline}</Text>

            </Box>
            </Link>
        ))}
      </Carousel>
    </Component>
  );
};
export default Slide;
