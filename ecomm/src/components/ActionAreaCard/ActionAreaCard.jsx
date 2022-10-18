import React, { useContext, useState } from "react";
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
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "react-rangeslider/lib/index.css";

export default function ActionAreaCard() {
  let filterProducts = PRODUCTS;
  const { searchInput, setSearchInput } = useContext(ProductsContext);
  const [sliderValue, setSliderValue] = useState(50);
  const [categoryDropdown, setCategoryDropdown] = useState("");
  const [sizeDropdown, setSizeDropdown] = useState("");
  const { addItemToCart } = useContext(CartContext);
  const category = ["Accesories", "Shorts", "Tops", "Jeans", "Outwear"];
  const size = ["2XS", "XS", "S", "M", "L", "XL"];
  const color = ["Red", "Blue", "White", "Gold", "Grey"];
  const categoryHandley = (option) => {
    setCategoryDropdown(option);
  };
  const sizeHandley = (option) => {
    setSizeDropdown(option);
  };
  const sliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };
  console.log("Size", sizeDropdown?.value);
  console.log(Boolean(sizeDropdown?.value));
  console.log(Boolean(categoryDropdown?.value, "Cat"));

  switch (true) {
    case searchInput !== "":
      filterProducts = filterProducts.filter((el) =>
        el.title.toLowerCase().includes(searchInput)
      );
    case sliderValue > 50: {
      filterProducts = filterProducts.filter(
        (el) => el.price >= sliderValue && el.price <= 2000
      );
    }

    case Boolean(categoryDropdown?.value): {
      filterProducts = filterProducts.filter(
        (el) => el.type === categoryDropdown.value
      );
    }

    case Boolean(sizeDropdown?.value): {
      filterProducts = filterProducts.filter(
        (el) => el.size === sizeDropdown.value
      );
    }
  }
  return (
    <>
      <section className="dropdowns">
        <Dropdown
          menuClassName="myMenuClassName"
          options={category}
          value={categoryDropdown}
          placeholder={"Category"}
          onChange={categoryHandley}
        />
        <Dropdown
          menuClassName="myMenuClassName"
          options={size}
          value={sizeDropdown}
          placeholder={"Size"}
          onChange={sizeHandley}
        />

        <div className="slider-container">
          <span className="range">Price: {sliderValue} $ - 2000 $</span>
          {/* <span className="max-range">2000 $</span> */}
          <input
            type="range"
            min="50"
            max="2000"
            value={sliderValue}
            class="slider"
            id="myRange"
            onChange={sliderChange}
          />
        </div>
      </section>
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
          {filterProducts.map((item, i) => {
            return (
              <>
                <Grid item key={item.id} xs={12} sm={6} md={4}>
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
