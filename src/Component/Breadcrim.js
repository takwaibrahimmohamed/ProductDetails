import { Container } from '@mui/material'
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Breadcrim = () => {
  const breadcrumbs = [
    <Link
    sx={{
      fontFamily:" Nexa Bold",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: '25px',
    }}  
    underline="hover" key="1" color="#240F17" href="/" >
      Home
    </Link>,
    <Link
    sx={{
      fontFamily:" Nexa Bold",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: '25px',
    }}
      underline="hover"
      key="2"
      color="#240F17"
      href="/material-ui/getting-started/installation/"
     
    >
      Coffee
    </Link>,
    <Typography 
    sx={{
      fontFamily:" Nexa Bold",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: '25px',
    }}
    key="3" color="#240F17">
      Binary blend
    </Typography>,
  ];
  return (
    <Container sx={{margin:"20px 30px 30px 60px"}}>
       <Stack spacing={2}>
   
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    </Container>
  )
}

export default Breadcrim
