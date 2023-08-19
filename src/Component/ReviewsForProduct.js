import styled from '@emotion/styled';
import { Box, Container, LinearProgress, Rating, Typography, linearProgressClasses } from '@mui/material'
import React from 'react'

const ReviewsForProduct = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:"#E7E0DA"
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#FFA16C",
    },
  }));
  return (
    <Container sx={{marginTop:"60px",position:'relative',}}>
        <Typography sx={{
          color: "#294E2C",
          fontFamily: "Prettywise Variable",
          fontSize: "45px",
          fontStyle: "normal",
          fontWeight:" 700",
          lineHeight: "55px", /* 122.222% */
          letterSpacing: "1.35px",
          textTransform: "uppercase",
          marginBottom:"30px"
        }}>
        Reviews
        </Typography>
       <Container sx={{marginLeft:{xs:"-30px",md:"-40px"},position:'relative',}}>
        <Box sx={{width:{xs:"100px",sm:"100px",md:"90px"}, height:"138px",position:'absolute',
              left: "-30px",
              top: "-74px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 127 138" fill="none">
          <path d="M52.9577 4.80845C44.9932 8.38479 38.2647 14.4986 33.6952 21.9225C29.107 29.3923 26.6542 38.0988 27.0922 46.8857C27.5165 55.3896 30.6581 63.6905 35.6472 70.5618C38.1399 74.002 41.1335 77.1006 44.5 79.6991C47.8902 82.318 51.7356 84.5233 55.8139 85.8626C60.015 87.2409 64.7576 87.7286 68.899 85.8501C73.2705 83.8512 76.8895 80.2038 79.2246 76.0374C81.582 71.816 83.0454 66.9558 82.9916 62.101C82.9664 59.9464 82.7099 57.7835 81.8851 55.7858C81.1533 54.0069 80.0665 52.3406 78.7769 50.9124C76.3622 48.2292 72.7913 45.7934 69.0018 46.3526C67.0501 46.6412 65.2129 47.7548 63.62 48.8713C61.7711 50.1722 60.0627 51.7327 58.6493 53.4872C57.2562 55.2178 56.231 57.2786 55.2759 59.2716C54.219 61.4902 53.318 63.7719 52.5636 66.1128C51.0679 70.7892 50.1555 75.6588 49.8895 80.5657C49.6276 85.3569 49.8795 90.3024 50.9974 94.9792C52.0664 99.4869 54.053 103.704 56.6601 107.521C62.4532 116.019 71.0143 122.051 79.9379 126.896C82.2476 128.15 84.587 129.331 86.9504 130.478C87.4308 130.715 88.0491 130.4 88.2381 129.932C88.4495 129.409 88.1722 128.881 87.6918 128.644C78.6252 124.232 69.5057 119.212 62.57 111.745C59.6043 108.551 57.0423 104.966 55.1925 101.017C53.299 96.9658 52.3541 92.679 51.9736 88.2363C51.172 78.9504 52.827 69.4199 56.6823 60.939C57.5656 58.9916 58.5189 56.9765 59.7926 55.251C61.0109 53.6097 62.5168 52.1807 64.1359 50.9469C65.5504 49.8757 67.2979 48.6937 69.0109 48.362C70.5182 48.0645 71.9808 48.4317 73.3797 49.1146C76.4379 50.6283 78.9651 53.6665 80.1859 56.8485C80.8901 58.6695 81.0734 60.7494 81.0258 62.7146C80.9696 65.0177 80.5755 67.3122 79.8933 69.5009C78.5476 73.8326 76.2478 77.8853 72.8185 80.9052C71.1729 82.363 69.2873 83.6492 67.2127 84.4002C65.3404 85.0729 63.3157 85.2252 61.34 85.0453C57.2362 84.6666 53.286 82.9843 49.7689 80.8904C46.3123 78.8315 43.1516 76.2521 40.4294 73.2739C35.0106 67.3598 31.1952 59.9601 29.7144 52.064C28.1885 43.9362 29.3232 35.561 32.6992 28.0279C36.0642 20.5224 41.5746 13.9909 48.4679 9.50144C50.1471 8.40922 51.9084 7.4569 53.7334 6.63706C54.8889 6.10129 54.1186 4.28556 52.9577 4.80845Z" fill="#231F20"/>
          <path d="M80.2598 135.256C80.3447 135.151 80.435 135.06 80.529 134.959C80.4719 135.021 80.4055 135.08 80.3484 135.142C80.9862 134.515 81.7557 134.036 82.5032 133.559C83.2839 133.054 84.07 132.561 84.8652 132.071C85.3181 131.796 85.7801 131.524 86.2422 131.252C86.1704 131.297 86.1023 131.334 86.0213 131.376C86.5551 131.058 87.109 130.77 87.6374 130.439C88.2891 130.041 88.6721 129.279 88.5004 128.516C88.3775 127.975 88.1111 127.473 87.9055 126.952C87.7125 126.48 87.5325 126.001 87.3744 125.521C87.1891 124.977 87.0166 124.427 86.8625 123.885C86.8824 123.967 86.906 124.041 86.935 124.127C86.5144 122.634 86.2206 121.118 86.0444 119.574C85.9964 119.139 85.9521 118.694 85.9207 118.244C85.9106 118.005 85.7297 117.74 85.541 117.6C85.3469 117.447 85.0423 117.356 84.7978 117.406C84.5534 117.457 84.305 117.57 84.1536 117.786C83.9985 118.011 83.9425 118.255 83.9598 118.529C84.1588 121.362 84.7676 124.158 85.7423 126.814C85.8732 127.176 86.017 127.533 86.1608 127.89C86.3083 128.238 86.487 128.587 86.5959 128.951C86.576 128.869 86.5524 128.795 86.5233 128.709C86.5487 128.804 86.5649 128.896 86.5736 129.006C86.5758 128.922 86.5688 128.834 86.5709 128.749C86.5725 128.825 86.5649 128.896 86.5481 128.964C86.5723 128.878 86.5965 128.792 86.6115 128.702C86.5984 128.76 86.5725 128.825 86.5411 128.876C86.5836 128.797 86.6262 128.718 86.6779 128.643C86.6427 128.704 86.6022 128.751 86.5616 128.799C86.6187 128.737 86.6851 128.678 86.7422 128.616C86.6353 128.722 86.5175 128.802 86.3904 128.879C86.4622 128.833 86.5303 128.797 86.6113 128.755C84.478 129.994 82.3391 131.221 80.3117 132.62C79.7225 133.022 79.1771 133.474 78.7104 134.021C78.5481 134.212 78.4845 134.527 78.5167 134.765C78.5488 135.002 78.6948 135.274 78.8964 135.409C79.3322 135.756 79.8982 135.675 80.2598 135.256Z" fill="#231F20"/>
        </svg>
        </Box>
       <Box sx={{display:"flex",gap:{xs:"5px",md:"23px"},alignItems:"start",flexWrap:'wrap',}}>
       <Box sx={{display:"flex",gap:{xs:"0px",md:"62px"}}}>
          <Box sx={{
            display: "flex",
            flexDirection:" column",
            justifyContent: "center",
            alignItems: {xs:"center",md:"flex-start"},
          
          }}>
              <Typography 
              sx={{
                color: " #294E2C",
                fontFamily: "Prettywise Variable",
                fontSize:{ xs:"40px",md:"54px"},
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "50px", /* 92.593% */
                textTransform: "uppercase",
                margin:{xs:"5px 0",md:"20px 0"}
              }}  
              >4.9</Typography>
              <Rating  name="half-rating" defaultValue={4.5} precision={0.5} />
              <Typography sx={{
                color: "#A89C96",
                fontFamily: "Nexa Bold",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "25px", /* 166.667% */
              }}>15 Ratings</Typography>
          </Box>
          <Box>
            <Box>
              <Typography sx={{display:"flex",gap:"8px"}}><Rating name="customized-10" defaultValue={2} max={1}/><Typography>5</Typography></Typography>
              <Typography sx={{display:"flex",gap:"8px"}}> <Rating name="customized-10" defaultValue={2} max={1}/><Typography>4</Typography></Typography>
              <Typography sx={{display:"flex",gap:"8px"}}> <Rating name="customized-10" defaultValue={2} max={1}/><Typography>3</Typography></Typography>
              <Typography sx={{display:"flex",gap:"8px"}}> <Rating name="customized-10" defaultValue={2} max={1}/><Typography>2</Typography></Typography>
              <Typography sx={{display:"flex",gap:"8px"}}> <Rating name="customized-10" defaultValue={2} max={1} /><Typography>1</Typography></Typography>
          
            </Box>
            
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{position:'relative',}}>
          <BorderLinearProgress sx={{marginBottom:"15px"}} variant="determinate" value={100} /><Typography 
          sx={{position:'absolute',
          top:" -6px",
          right: "-21px",
          }}>5</Typography>
          <BorderLinearProgress sx={{marginBottom:"15px"}} variant="determinate" value={80} /><Typography 
          sx={{position:'absolute',
          top:" 20px",
          right: "-21px",
          }}>4</Typography>
          <BorderLinearProgress  sx={{marginBottom:"15px"}}   variant="determinate" value={60} /><Typography 
          sx={{position:'absolute',
          top:" 42px",
          right: "-21px",
          }}>3</Typography>
          <BorderLinearProgress  sx={{marginBottom:"15px"}}  variant="determinate" value={40} /><Typography 
          sx={{position:'absolute',
          top:" 68px",
          right: "-21px",
          }}>2</Typography>
          <BorderLinearProgress  sx={{marginBottom:"15px"}} variant="determinate" value={20} /><Typography 
          sx={{position:'absolute',
          top:" 90px",
          right: "-21px",
          }}>1</Typography>
          </Box>
        </Box>
       </Box>
       </Container>
       <Box sx={{position:'absolute',right:"-29px",top:"0",width:{xs:"66px",md:"89px"},overflow:"hidden", height:{xs:"283px",md:"237px"}}}>
       <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 89 237" fill="none">
        <path d="M118.57 235.52C182.95 235.52 235.14 183.245 235.14 118.76C235.14 54.2753 182.95 2 118.57 2C54.1901 2 2 54.2753 2 118.76C2 183.245 54.1901 235.52 118.57 235.52Z" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
        <path d="M118.57 169.948C146.794 169.948 169.674 147.03 169.674 118.76C169.674 90.4897 146.794 67.572 118.57 67.572C90.3454 67.572 67.4651 90.4897 67.4651 118.76C67.4651 147.03 90.3454 169.948 118.57 169.948Z" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
        <path d="M118.57 203.106C165.762 203.106 204.018 164.787 204.018 117.518C204.018 70.2494 165.762 31.9304 118.57 31.9304C71.3783 31.9304 33.1218 70.2494 33.1218 117.518C33.1218 164.787 71.3783 203.106 118.57 203.106Z" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
        <path d="M235.14 118.76H2" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
        <path d="M201.002 36.2006L36.145 201.326" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
        <path d="M201.002 201.326L36.145 36.2006" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
        <path d="M223.318 67.5189L13.8215 170.001" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
        <path d="M169.727 223.68L67.4121 13.8407" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
        <path d="M228.808 156.72L8.33203 80.8076" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
        <path d="M80.6792 229.178L156.468 8.34204" stroke="#FF5440" stroke-width="2.70615" stroke-miterlimit="10"/>
</svg>
       </Box>
       <Box sx={
        {
          width:"100%",
          height:"125px",
          borderRadius: "30px",
          border: "1.5px solid rgba(0, 0, 0, 0.30)",
          margin:"60px 0 0 0",
          display:"flex",
          justifyContent:"space-between",
          position:'relative',
          
        }
       }>
        <Typography 
        sx={{
          color:" rgba(0, 0, 0, 0.50)",
          textAlign:" right",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px", /* 166.667% */
          letterSpacing: "-0.45px",
          padding:"20px"
        }}
        >Write your review here...</Typography>
        <Typography sx={{
          color:" #FFA16C",
          textAlign: "right",
          fontFamily: "Nexa XBold",
          fontSize: "20px",
          fontStyle:" normal",
          fontWeight: "800",
          lineHeight: "25px", /* 125% */
          letterSpacing: "-0.6px",
          bottom: "18px",
          right: "21px",
          position:'absolute',
        }}>Submit</Typography>
       </Box>
    </Container>

  )
}

export default ReviewsForProduct
