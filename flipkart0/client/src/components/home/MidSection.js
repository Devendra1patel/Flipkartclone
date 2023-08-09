import { Box, Grid } from '@mui/material';
import {imageURL } from '../../constants/data';

const MidSection = () => {
  return (
    <Grid container lg={12} sm={12} md={12} xs={12}>
        {
            imageURL.map(image=>(
                <Grid item lg={4} sm={4} md={12} xs={12} >
                    <img src={image} style={{width:'100%',height:'217px'}}></img>
                </Grid>
            ))
        }
    </Grid>
  )
}

export default MidSection