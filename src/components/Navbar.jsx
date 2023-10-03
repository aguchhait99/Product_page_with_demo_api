import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = (props) => {
  return (
    <>
      <Box>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' style={{flexGrow: "1"}}>Product Api</Typography>
                <Button color='inherit' component={Link} to= '/'>Home</Button>
                <Button color='inherit' component={Link} to= '/showproduct'>Product</Button>
                <Button color='inherit' component={Link} to= '/cart'> <ShoppingCartIcon/>Cart {}</Button>
            </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
