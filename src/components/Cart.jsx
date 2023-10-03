import React, { useEffect, useState } from "react";
import { getDataID } from "../service/API";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [count, setCount] = useState(0);

  console.log("count:", count);

  const showData = async () => {
    const response = await getDataID(id);
    setProduct(response?.data);
  };

  console.log("data", product);

  useEffect(() => {
    showData();
  }, []);
  return (
    <>
      <Container sx={{mt: 10}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <img src={product.thumbnail} alt="" style={{height: "200px"}}/>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h4" gutterBottom sx={{ml: 15}}>
              {product.title}
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ml: 15}}>
              Price: {product.price}
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ml: 15}}>
              Discount Percentage: {product.discountPercentage}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
