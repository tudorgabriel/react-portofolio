import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,  CardActions } from '@mui/material';
import '../ActionAreaCard/ActionAreaCard.scss';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import { Container } from '@mui/material';

export default function ActionAreaCard() {
  const productsArr = [{
    title : "ASOS DESIGN 90s oversized shirt in bleachwash checkerboard print",
    price : '39.99'
  },
  {
    title : "ASOS DESIGN 90s oversized shirt in bleachwash checkerboard print",
    price : '39.99'
  },
  {
    title : "ASOS DESIGN 90s oversized shirt in bleachwash checkerboard print",
    price : '39.99'
  },
  {
    title : "ASOS DESIGN 90s oversized shirt in bleachwash checkerboard print",
    price : '39.99'
  },
  {
    title : "ASOS DESIGN 90s oversized shirt in bleachwash checkerboard print",
    price : '39.99'
  },
  {
    title : "ASOS DESIGN 90s oversized shirt in bleachwash checkerboard print",
    price : '39.99'
  }];

  return (
    <>
    <h1 className='page-title'>Men's Festival Clothing</h1>
    <p className='page-p'>Dreaming of neon, metallic and tie-dye? It must be festival season. Invent your own style with our edit of men's festival clothing, featuring unique outfits from all your favourite brands. Stand out in fresh new-season styles from ASOS DESIGN – think festival co-ords, fringe-detailed jackets and bold print tees or get experimental in bucket hats and graphic-print shirts courtesy of COLLUSION. Complete your look with retro sunnies from New Look – and don't forget, no festival outfit is complete without a bum bag.</p>
    <Container  >
    <Grid  container direction="row"justifyContent="center"
  alignItems="center"> 
      {productsArr.map((item,i)=>{
        return  (
          <Grid  item key={i} xs={12} sm={6} md={4}>
             <Card className='card' sx={{ maxWidth: 345 }}>
          <CardActionArea>
          <CardMedia
            component="img"
            height="380"
            image={require(`../../_assets/images/img${i}.jpg`)}
            alt="green iguana"
          />
          <CardContent>
            <Typography className='product-title' gutterBottom variant="h5" component="div">
            {item.title}
            </Typography>
            <Typography className='product-price' variant="body2" color="text.secondary">
              ${item.price}
            </Typography>
          </CardContent>
          <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        </CardActionArea>
        </Card>
        </Grid>
        )
      })}

     </Grid>
     </Container>
    </>

)};
