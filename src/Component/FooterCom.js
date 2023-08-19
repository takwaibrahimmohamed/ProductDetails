import { CardMedia, Container } from '@mui/material'
import React from 'react'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from "@mui/material";
const FooterCom = () => {
  return (
    <div>
      <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="2" viewBox="0 0 434 2" fill="none">
        <path d="M0 1H434" stroke="#240F17" stroke-opacity="0.2" stroke-width="1.5"/>
    </svg>
    <CardMedia
          style={{width:" 100px",
          margin:"0 50px",
            height: "103px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/9f5b/14ea/83a178d86e13d1956e06c1dafcfcde8e?Expires=1693180800&Signature=e14tuXa6aqLn6gRvGZcnkV1-84Qt7CmNB5GocI1JC83gLs45nohgDMcouDXyiXm2R2hvjMcxUSE7GpF-Z3SzBji5dJoIYbM2VcFQN2XBVUPBS6OXlcGMHFsjmDpooCrbcDRfI7K2uTmoQOQ4n~ZMy-pcTYnAI8RpZogZvWPq-yWf7cUrFPgrjfXWLngmiaeQR7yqAaBYlXie4VIbsBUae8ikwXFMoSdKOxLJAWkQ1ITwXp8tZtiH5lA81D-wfcfQrGxO7KYEdKdFvuHTI4meSTysbx5hc~nIgHq-OVr53yaAYnriZnmDvIOLiEp1moej81oEYYAXQd2xFqKkL5nNFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="2" viewBox="0 0 434 2" fill="none">
        <path d="M0 1H434" stroke="#240F17" stroke-opacity="0.2" stroke-width="1.5"/>
    </svg>
      </Container>
      <Container>
      <Box
      component="footer"
      
    >
      <Container >
      <Grid container rowSpacing={7}>
          <Grid item xs={12} sm={6} spacing={5} >
            <Typography variant="h6" color="text.primary" gutterBottom  
            style={{
              color:  "#294E2C",
              fontFamily: "Prettywise Variable",
              fontSize: "55px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "55px", /* 100% */
              letterSpacing: "1.65px",
              textTransform: "uppercase",
              MaxWidth: "640px",
              MaxHeight: "115px",
              flexShrink: 0,

            }}
            >
            Embrace the Coffee Adventure Today!

            </Typography>
           
          </Grid>
         
          <Grid item xs={12} sm={6}  sx={{
            display:"flex",
            alignItems: "center",
            justifyContent:{xs:"flex-start",sm:"flex-end"}}}
          style={{
            display:"flex",
            alignItems: "center",
            gap: "30px",
            
       
          }}
         
         
          >
            
            <Link href="https://www.facebook.com/" color="inherit">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="36" viewBox="0 0 17 36" fill="none">
              <path d="M4.04533 35.3095H10.9879V17.8699H15.8337L16.3614 12.0382H10.9879V8.71966C10.9879 7.33115 11.2517 6.80351 12.5846 6.80351H16.3614V0.749634H11.5294C6.35024 0.749634 4.01755 3.02678 4.01755 7.38668V12.0521H0.393555V17.9532H4.01755L4.04533 35.3095Z" fill="#0F391C"/>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                <path d="M17.6517 3.79446C22.2461 3.79446 22.8281 3.79447 24.6506 3.90168C25.7493 3.91134 26.8378 4.11349 27.8667 4.49895C28.613 4.77491 29.288 5.21447 29.8423 5.78539C30.4151 6.34702 30.8593 7.0263 31.144 7.77631C31.5219 8.80732 31.7238 9.89448 31.7413 10.9924C31.7413 12.8149 31.8332 13.3662 31.8332 17.976C31.8332 22.5857 31.8332 23.1523 31.7413 24.9748C31.7238 26.0727 31.5219 27.1599 31.144 28.1909C30.8482 28.9307 30.4052 29.6027 29.8418 30.1661C29.2785 30.7294 28.6065 31.1725 27.8667 31.4683C26.8357 31.8461 25.7485 32.048 24.6506 32.0655C22.8281 32.0655 22.2768 32.1574 17.6517 32.1574C13.0266 32.1574 12.4906 32.1574 10.6682 32.0655C9.57025 32.048 8.48307 31.8461 7.45206 31.4683C6.71226 31.1725 6.04028 30.7294 5.4769 30.1661C4.91352 29.6027 4.47049 28.9307 4.1747 28.1909C3.79687 27.1599 3.59496 26.0727 3.57743 24.9748C3.50085 23.1523 3.48554 22.601 3.48554 17.976C3.48554 13.3509 3.48554 12.8149 3.57743 10.9924C3.59496 9.89448 3.79687 8.80732 4.1747 7.77631C4.45946 7.0263 4.90361 6.34702 5.47647 5.78539C6.03071 5.21447 6.70575 4.77491 7.45206 4.49895C8.48097 4.11349 9.56948 3.91134 10.6682 3.90168C12.4906 3.90168 13.042 3.79446 17.6517 3.79446ZM17.6517 0.731506C12.9654 0.731506 12.3681 0.731518 10.5303 0.838721C9.09628 0.861712 7.67686 1.13108 6.33409 1.63507C5.18614 2.08631 4.14353 2.76936 3.27135 3.64154C2.39917 4.51372 1.71614 5.55633 1.26491 6.70428C0.759431 8.04664 0.489995 9.46631 0.468531 10.9005C0.376642 12.7383 0.361328 13.3356 0.361328 18.0219C0.361328 22.7082 0.361328 23.3208 0.468531 25.1586C0.491523 26.5926 0.760909 28.0121 1.26491 29.3548C1.71614 30.5028 2.39917 31.5454 3.27135 32.4176C4.14353 33.2897 5.18614 33.9728 6.33409 34.424C7.67893 34.9206 9.09707 35.1898 10.5303 35.2204C12.3681 35.3123 12.9654 35.3276 17.6517 35.3276C22.338 35.3276 22.9506 35.3276 24.7884 35.2204C26.2217 35.1898 27.6398 34.9206 28.9846 34.424C30.1326 33.9728 31.1752 33.2897 32.0474 32.4176C32.9196 31.5454 33.6026 30.5028 34.0538 29.3548C34.5578 28.0121 34.8272 26.5926 34.8502 25.1586C34.9421 23.3208 34.9574 22.7235 34.9574 18.0219C34.9574 13.3203 34.9574 12.7383 34.8502 10.9005C34.8287 9.46631 34.5593 8.04664 34.0538 6.70428C33.6026 5.55633 32.9196 4.51372 32.0474 3.64154C31.1752 2.76936 30.1326 2.08631 28.9846 1.63507C27.6419 1.13108 26.2225 0.861712 24.7884 0.838721C22.9506 0.746832 22.3533 0.731506 17.6517 0.731506Z" fill="#0F391C"/>
                <path d="M17.6521 9.0918C15.8953 9.0918 14.1779 9.61275 12.7172 10.5888C11.2565 11.5648 10.118 12.9521 9.44568 14.5751C8.77338 16.1982 8.59747 17.9842 8.94021 19.7073C9.28295 21.4303 10.1289 23.013 11.3712 24.2553C12.6134 25.4975 14.1961 26.3435 15.9192 26.6863C17.6422 27.029 19.4282 26.8531 21.0513 26.1808C22.6744 25.5085 24.0617 24.37 25.0377 22.9093C26.0137 21.4485 26.5347 19.7312 26.5347 17.9744C26.5347 15.6186 25.5988 13.3592 23.933 11.6934C22.2672 10.0276 20.0079 9.0918 17.6521 9.0918ZM17.6521 23.748C16.5102 23.748 15.3939 23.4094 14.4444 22.775C13.4949 22.1406 12.7549 21.2388 12.3179 20.1838C11.8809 19.1288 11.7666 17.9679 11.9894 16.848C12.2121 15.728 12.762 14.6992 13.5695 13.8918C14.377 13.0843 15.4057 12.5344 16.5257 12.3116C17.6457 12.0888 18.8066 12.2032 19.8616 12.6402C20.9166 13.0772 21.8183 13.8172 22.4527 14.7667C23.0872 15.7161 23.4258 16.8324 23.4258 17.9744C23.4258 18.7326 23.2764 19.4833 22.9863 20.1838C22.6961 20.8843 22.2708 21.5208 21.7347 22.057C21.1986 22.5931 20.5621 23.0184 19.8616 23.3085C19.1611 23.5987 18.4103 23.748 17.6521 23.748Z" fill="#0F391C"/>
                <path d="M28.8932 8.75796C28.8931 9.1712 28.7702 9.57508 28.5399 9.91823C28.3097 10.2614 27.9825 10.5283 27.6002 10.685C27.2178 10.8417 26.7975 10.8811 26.3926 10.7982C25.9878 10.7153 25.6167 10.5139 25.3267 10.2195C25.0367 9.92519 24.8408 9.55122 24.7639 9.1452C24.687 8.73918 24.7327 8.31947 24.895 7.93946C25.0574 7.55945 25.3291 7.2363 25.6756 7.01117C26.0221 6.78603 26.4278 6.66908 26.841 6.67515C27.3934 6.67515 27.9231 6.89458 28.3137 7.28519C28.7043 7.67579 28.9238 8.20557 28.9238 8.75796" fill="#0F391C"/>
                </svg>
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" viewBox="0 0 37 30" fill="none">
              <path d="M0.957031 26.3115C4.19084 28.3777 7.92988 29.5164 11.7664 29.6033C15.603 29.6903 19.3898 28.7223 22.7139 26.8047C26.038 24.8871 28.7718 22.0937 30.6172 18.729C32.4627 15.3643 33.3488 11.5575 33.1791 7.72373C34.6441 6.6808 35.9118 5.38545 36.9228 3.89828C35.5799 4.50151 34.1515 4.89306 32.6887 5.05901C34.2386 4.14635 35.4014 2.69861 35.9583 0.988324C34.5115 1.84547 32.931 2.45338 31.2827 2.78662C30.1762 1.60142 28.7091 0.815004 27.1094 0.549637C25.5098 0.284271 23.8674 0.554822 22.4374 1.31922C21.0074 2.08362 19.87 3.29906 19.2021 4.77655C18.5341 6.25405 18.373 7.91082 18.7438 9.48933C15.8146 9.34715 12.9482 8.58944 10.3315 7.26556C7.71469 5.94168 5.40619 4.08134 3.55637 1.80573C2.61883 3.42515 2.33365 5.34098 2.75885 7.16326C3.18405 8.98555 4.28768 10.5773 5.84512 11.6146C4.69877 11.5685 3.57908 11.255 2.5755 10.6991C2.55625 12.4133 3.13493 14.0806 4.21203 15.4143C5.28913 16.748 6.79731 17.6647 8.47716 18.0067C7.41002 18.2892 6.29384 18.3339 5.20755 18.1375C5.67328 19.5999 6.58665 20.879 7.81869 21.7943C9.05072 22.7095 10.5391 23.2145 12.0737 23.2381C10.5233 24.4727 8.73938 25.3813 6.82908 25.9095C4.91879 26.4376 2.92148 26.5744 0.957031 26.3115Z" fill="#0F391C"/>
              </svg>
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="30" viewBox="0 0 43 30" fill="none">
                <path d="M41.7898 4.91407C41.5526 4.02668 41.0868 3.21709 40.4387 2.56617C39.7906 1.91526 38.983 1.44585 38.0967 1.20483C34.8571 0.330153 21.7856 0.330139 21.7856 0.330139C21.7856 0.330139 8.82742 0.330153 5.49069 1.20483C4.60434 1.44585 3.79678 1.91526 3.14871 2.56617C2.50063 3.21709 2.03475 4.02668 1.79761 4.91407C0.631266 11.6018 0.631266 18.4411 1.79761 25.1288C2.03376 26.0185 2.49904 26.8307 3.14705 27.4843C3.79506 28.138 4.60314 28.6104 5.49069 28.8543C8.73023 29.729 21.7856 29.729 21.7856 29.729C21.7856 29.729 34.8409 29.729 38.0967 28.8543C38.9842 28.6104 39.7923 28.138 40.4403 27.4843C41.0883 26.8307 41.5536 26.0185 41.7898 25.1288C42.9561 18.4411 42.9561 11.6018 41.7898 4.91407ZM17.4932 21.2252V8.81773L28.3943 15.0215L17.4932 21.2252Z" fill="#0F391C"/>
                </svg>
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M8.60142 12.217H1.3623V35.6166H8.60142V12.217Z" fill="#0F391C"/>
            <path d="M4.94734 9.07382C5.80243 9.08055 6.64027 8.83315 7.35453 8.36299C8.0688 7.89282 8.6273 7.22108 8.95921 6.433C9.29112 5.64492 9.38145 4.776 9.21876 3.9365C9.05608 3.097 8.64772 2.32476 8.04545 1.71771C7.44319 1.11067 6.67418 0.696188 5.836 0.526871C4.99781 0.357553 4.1282 0.441002 3.33753 0.766667C2.54685 1.09233 1.87074 1.64552 1.39494 2.35604C0.91914 3.06657 0.665099 3.90242 0.665073 4.75754C0.662837 5.32213 0.771826 5.88165 0.985821 6.40411C1.19982 6.92658 1.51464 7.40179 1.91228 7.8026C2.30993 8.2034 2.78264 8.52194 3.3034 8.74006C3.82416 8.95817 4.38275 9.07159 4.94734 9.07382Z" fill="#0F391C"/>
            <path d="M20.19 23.3317C20.19 20.035 21.7024 18.0808 24.6083 18.0808C27.5141 18.0808 28.5507 19.9671 28.5507 23.3317V35.6178H35.7558V20.7997C35.7558 14.5292 32.2042 11.5044 27.2592 11.5044C25.8507 11.4837 24.4608 11.8282 23.225 12.5042C21.9891 13.1802 20.9494 14.1647 20.207 15.3619V12.2182H13.2568V35.6178H20.207L20.19 23.3317Z" fill="#0F391C"/>
            </svg>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{marginTop:"50px",marginBottom:"30px"}}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom 
             style={{
              color:  "#294E2C",
              fontFamily: " Nexa XBold",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "25px", /* 100% */
              letterSpacing: "-0.6px",
              textTransform: "uppercase",
             

            }}
            >
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary"
                  style={{
                    color:  "#A89C96",
                    fontFamily: " Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "25px", /* 100% */
                    letterSpacing: "-0.45px",
                  
                   
      
                  }}
            
            >
            Crack inc FOR A CAUSE CONTACT US
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom 
             style={{
              color:  "#294E2C",
              fontFamily: " Nexa XBold",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "25px", /* 100% */
              letterSpacing: "-0.6px",
              textTransform: "uppercase",
             

            }}
            >
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary"
                  style={{
                    color:  "#A89C96",
                    fontFamily: " Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "25px", /* 100% */
                    letterSpacing: "-0.45px",
                  
                   
      
                  }}
            
            >
            Crack inc FOR A CAUSE CONTACT US
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom 
             style={{
              color:  "#294E2C",
              fontFamily: " Nexa XBold",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "25px", /* 100% */
              letterSpacing: "-0.6px",
              textTransform: "uppercase",
             

            }}
            >
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary"
                  style={{
                    color:  "#A89C96",
                    fontFamily: " Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "25px", /* 100% */
                    letterSpacing: "-0.45px",
                  
                   
      
                  }}
            
            >
            Crack inc FOR A CAUSE CONTACT US
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom 
             style={{
              color:  "#294E2C",
              fontFamily: " Nexa XBold",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "25px", /* 100% */
              letterSpacing: "-0.6px",
              textTransform: "uppercase",
             

            }}
            >
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary"
                  style={{
                    color:  "#A89C96",
                    fontFamily: " Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "25px", /* 100% */
                    letterSpacing: "-0.45px",
                  
                   
      
                  }}
            
            >
            Crack inc FOR A CAUSE CONTACT US
            </Typography>
          </Grid>
         
        </Grid>
        <svg xmlns="http://www.w3.org/2000/svg" width="1128" height="2" viewBox="0 0 1128 2" fill="none">
        <path d="M0 1H1128" stroke="#240F17" stroke-opacity="0.2" stroke-width="1.5"/>
        </svg>
        <Box mt={5} >
          <Typography variant="body2" color="text.secondary" align="center"
          
          style={{

            color:  "#A89C96",
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            letterSpacing: "-0.6px",
            paddingBottom:"50px"
          }}
          
          >
          Copyright © 2023 tols.design, all rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
      </Container>
   
    </div>
  )
}

export default FooterCom
