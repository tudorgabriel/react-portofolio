import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import "../ActionAreaCard/ActionAreaCard.scss";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import { Container } from "@mui/material";
import { ProductsContext } from "../../context/products.context";
import { CartContext } from "../../context/cart.context";
import PRODUCTS from "../../shop-data.json";

export default function ActionAreaCard() {
  const { products } = useContext(ProductsContext);
  const { searchInput, setSearchInput } = useContext(ProductsContext);
  // const { handleSearch } = useContext(ProductsContext);
  const { addItemToCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const filteredProducts = PRODUCTS.filter((el) => {
    if (searchInput === null) {
      return el;
    } else {
      return el.title.toLowerCase().includes(searchInput);
    }
  });

  return (
    <>
      <h1 className="page-title">Men's Festival Clothing</h1>
      <p className="page-p">
        Dreaming of neon, metallic and tie-dye? It must be festival season.
        Invent your own style with our edit of men's festival clothing,
        featuring unique outfits from all your favourite brands. Stand out in
        fresh new-season styles from ASOS DESIGN – think festival co-ords,
        fringe-detailed jackets and bold print tees or get experimental in
        bucket hats and graphic-print shirts courtesy of COLLUSION. Complete
        your look with retro sunnies from New Look – and don't forget, no
        festival outfit is complete without a bum bag.
      </p>

      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {filteredProducts.map((item, i) => {
            return (
              <>
                <Grid item key={i.id} xs={12} sm={6} md={4}>
                  <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="380"
                        image={item.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          className="product-title"
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          className="product-price"
                          variant="body2"
                          color="text.secondary"
                        >
                          ${item.price}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon onClick={() => addItemToCart(item)} />
                        </IconButton>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
