import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getData } from "../service/API";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const ShowProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const showData = async () => {
    const response = await getData();
    const res = response?.data?.products
    setProduct(res);
    const productCategory = res.map((item) => item.category);
    const uniquCategory = [...new Set(productCategory)];
    setCategories(uniquCategory);
    console.log(productCategory);
    setLoading(false);
        // console.log("data", response);
  };

  const showCat = ()=>{
    
  }

  useEffect(() => {
    showData();
  },[]);
  useEffect(()=>{
    showCat()
  },[])

  const dataPerRow = 6;
  const [loadMoreData, setLoadMoreData] = useState(dataPerRow);
  const handleMoreData = () => {
    setLoadMoreData(loadMoreData + dataPerRow);
  };
  return (
    <>
      {loading ? (
        <ClipLoader
          color="#36d7b7"
          size={100}
          cssOverride={{ marginLeft: "700px", marginTop: "200px" }}
        />
      ) : (
        showData
      )}
      <Box>
        <AppBar position="static" color="default">
          <Toolbar>
            {categories.map((element) => {
              return (
                <>
                  <Button
                    color="inherit"
                    component={Link}
                    to={`/showdetails/${element}`}
                    sx={{ ml: 13 }}
                  >
                    {element}
                  </Button>
                </>
              );
            })}
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ mt: 5, mb: 5 }}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {product.length > 0 &&
            product.slice(0, loadMoreData).map((element, index) => {
              return (
                <>
                  <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={element.thumbnail}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {element.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {element.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          component={Link}
                          to={`/productdetails/${element.id}`}
                        >
                          Product Details
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </>
              );
            })}
        </Grid>
        {loadMoreData < product.length && (
          <Button variant="contained" onClick={handleMoreData} sx={{ mt: 3 }}>
            Lode More
          </Button>
        )}
      </Container>
    </>
  );
};

export default ShowProduct;
