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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";

export default function ActionAreaCard() {
  const { addItemToCart } = useContext(CartContext);
  let filterProducts = PRODUCTS;
  const { searchInput, setSearchInput } = useContext(ProductsContext);
  const [sliderValue, setSliderValue] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([filterProducts]);
  const [pageCount, setPageCount] = useState(0);
  const recordsPerPage = 10;

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  const sliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };
  const dropdownArr = [
    {
      name: "category",
      options: ["Accesories", "Shorts", "Tops", "Jeans", "Outwear"],
    },
    { name: "size", options: ["2XS", "XS", "S", "M", "L", "XL"] },
    { name: "color", options: ["Red", "Blue", "White", "Gold", "Grey"] },
    {
      name: "style",
      options: ["Puffer", "Bomber Jacket", "Shackets", "Other", "Denim jacket"],
    },
    { name: "material", options: ["Leather", "Non Leather"] },
    { name: "brand", options: ["Asos", "Asos Design", "Abercombie", "Adidas"] },
    { name: "bodyFit", options: ["Main Collection", "Plus Size", "Tall"] },
  ];
  const [dropdownValues, setDropDownValues] = useState({
    category: "",
    size: "",
    color: "",
    style: "",
    material: "",
    brand: "",
    bodyFit: "",
  });

  const dropdownChangeHandler = (option, dropdownName) => {
    setDropDownValues((prevValues) => ({
      ...prevValues,
      [dropdownName]: option?.value,
    }));
  };

  if (searchInput !== "") {
    filterProducts = filterProducts.filter((el) =>
      el.title.toLowerCase().includes(searchInput)
    );
  }

  if (sliderValue > 50) {
    filterProducts = filterProducts.filter(
      (el) => el.price >= sliderValue && el.price <= 2000
    );
  }

  if (dropdownValues.category) {
    filterProducts = filterProducts.filter(
      (el) => el.type === dropdownValues.category
    );
  }

  if (dropdownValues.size) {
    filterProducts = filterProducts.filter(
      (el) => el.size === dropdownValues.size
    );
  }
  if (dropdownValues.color) {
    filterProducts = filterProducts.filter(
      (el) => el.color === dropdownValues.color
    );
  }
  if (dropdownValues.style) {
    filterProducts = filterProducts.filter(
      (el) => el.style === dropdownValues.style
    );
  }
  if (dropdownValues.material) {
    filterProducts = filterProducts.filter(
      (el) => el.material === dropdownValues.material
    );
  }
  if (dropdownValues.brand) {
    filterProducts = filterProducts.filter(
      (el) => el.brand === dropdownValues.brand
    );
  }
  if (dropdownValues.bodyFit) {
    filterProducts = filterProducts.filter(
      (el) => el.bodyFit === dropdownValues.bodyFit
    );
  }

  useEffect(() => {
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    setCurrentItems(
      filterProducts.slice(indexOfFirstRecord, indexOfLastRecord)
    );
    setPageCount(Math.ceil(filterProducts.length / recordsPerPage));
  }, [filterProducts, currentPage]);
  return (
    <>
      <section className="dropdowns">
        {dropdownArr.map((item, index) => {
          return (
            <Dropdown
              placeholderClassName="myPlaceholderClassName"
              controlClassName="myControlClassName"
              className="drop"
              key={index}
              menuClassName="myMenuClassName"
              options={item.options}
              value={item[0]}
              placeholder={`Select ${item.name}`}
              onChange={(option) => dropdownChangeHandler(option, item.name)}
            />
          );
        })}
        <div className="slider-container">
          <span className="range">Price: {sliderValue} $ - 2000 $</span>
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
          {currentItems.map((item, i) => {
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
      <section className="pagination">
        <Stack className="stack" spacing={5}>
          <Pagination
            onChange={handlePage}
            page={currentPage}
            count={pageCount}
          />
        </Stack>
      </section>
    </>
  );
}
