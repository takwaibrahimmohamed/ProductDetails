import { Box, Button, CardMedia, Container, Divider, Grid, Link, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const BestSelling = () => {
  
  return (
    <Container>
         <Grid container>
    <Grid xs={12} sm={12} md={6} lg={6}> 
            <Box 
            sx={{
                display: "inline-flex",
                padding: {xs:"50px",md:"116px 109px 83.473px 109px"},
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                borderRadius:" 25px",
                background: "#E5CBC4",
                position: "relative",
                marginBottom:"10px"
            }}
            >
            
            <CardMedia
                    style={{
                        filter: "drop-shadow(11.565120697021484px 16.521602630615234px 0px #000)",  
                        borderRadius:"25px"
                    }}
                        component="img"
                        alt="green iguana"
                    
                        image="https://s3-alpha-sig.figma.com/img/4cba/0f1a/2c77273d20cc18fc96db66b4ef6c6aed?Expires=1693180800&Signature=MY5IywXMFLCl8K9eGS9mmpQuJTyXqUQIGh2wvlSzb3e1yhAis~767KOj9W7pxT6C9o0QDfmoEQswjAN~satUGGEcEys~UGK0G4l7YszQc3CHdyaqhAW3Sz7gaVBKIL4daosCnfjdi4KfpPLixhLF80JcyAdt27isJsLnxO34Sj2m6Tcb9SUhRerWJ3cShKJclsucTVpaD-42d3bQroK0SAqGOaWO~7m5Ef0-Yzol~-7WTwSTyhHbz-oPTiMeIxZ-ugxZ8w2FTLbG5xWiOGVACVJ5nGMMaK-lUSyfybNuGRr-tiNhWwzBgqnT4YWdpDxKGhWgFbC8i9ax~lo8F32yRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    <Box sx={{
                       position: "absolute",
                       top: {xs:"-13px",md:"0px"},
                       left: {xs:"-8px",md:"-32px"},
                       transform: "rotate(-36.67deg)",
                    }}>
                        <Typography  
                        sx={{
                            position: "absolute",
                            bottom: "60%",
                            transform:" rotate(-36.67deg)",
                            right: "50%",
                            transform: "translate(50%,50%)",
                            color:" #FFF",
                            textAlign: "center",
                            fontFamily: "Nexa Bold",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "16px", /* 106.667% */
                            letterSpacing: "-0.45px",
                        }}  
                        >Best <br/>
                            Selling</Typography>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="90" viewBox="0 0 88 90" fill="none">
                        <path d="M79.2921 18.7232C81.09 21.138 74.62 28.3414 75.7856 30.9857C76.9854 33.7119 86.6793 33.7868 87.2298 36.6478C87.7889 39.5561 78.8236 43.2284 78.7337 46.1641C78.6266 49.1126 87.3418 53.3747 86.5861 56.2431C85.8347 59.0814 76.1681 58.5036 74.8029 61.1288C73.4592 63.711 79.4579 71.3363 77.5136 73.6151C75.6425 75.8125 67.1777 71.0958 64.7664 72.8911C62.355 74.6865 64.4468 84.1482 61.8052 85.3107C59.0818 86.5073 53.4965 78.5742 50.6203 79.1339C47.7139 79.6892 45.496 89.1157 42.5614 89.0217C39.6139 88.9105 38.0122 79.352 35.1568 78.6092C32.3186 77.8537 26.2429 85.4069 23.6041 84.0203C21.0211 82.6726 23.7114 73.377 21.4609 71.4332C19.2618 69.5583 10.5058 73.6915 8.70785 71.2766C6.90989 68.8618 13.3799 61.6584 12.2143 59.0141C11.0145 56.2879 1.32066 56.213 0.770083 53.352C0.211051 50.4437 9.17633 46.7714 9.26623 43.8357C9.37334 40.8872 0.658097 36.6251 1.41384 33.7567C2.16519 30.9184 11.8318 31.4962 13.1971 28.871C14.5407 26.2888 8.54201 18.6635 10.4864 16.3847C12.3574 14.1873 20.8222 18.9041 23.2336 17.1087C25.6449 15.3133 23.5531 5.85158 26.1947 4.68908C28.9353 3.4797 34.5206 11.4128 37.3797 10.8659C40.286 10.3106 42.504 0.88415 45.4386 0.978107C48.386 1.08931 49.9877 10.6478 52.8431 11.3906C55.6813 12.1461 61.757 4.59287 64.3958 5.97951C66.9788 7.32724 64.2885 16.6228 66.539 18.5666C68.7381 20.4415 77.4941 16.3083 79.2921 18.7232Z" fill="#FF5440"/>
                    </svg>
                    </Box>
                    
            </Box>

    </Grid>
    <Grid xs={12} sm={12} md={6} lg={6} sx={{



 
  
  }}>
    <Box 
    sx={{paddingLeft:{xs:"0",md:"50px"}}}
    >
      <Typography 
      style={{
        color: "rgba(36, 15, 23, 0.40)",
        fontFamily: "Nexa Bold",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "25px", /* 166.667% */
        letterSpacing: "0.45px",
        textTransform: "uppercase",
      }}  
      >
     CRACK INC. COFFEE ROASTERS
      </Typography>
      <Typography 
      style={{
        color: "#294E2C",
        fontFamily: "Prettywise Variable",
        fontSize: "50px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "65px", /* 130% */
        letterSpacing: "1.5px",
        textTransform: "uppercase",
      }}  
      >
     Brazil - Coração de Melão
      </Typography>
      <Box
       sx={{
        
        display: 'flex',
        alignItems: 'center',
        margin:"20px 0"
      }}
      >
      <Rating name="half-rating" defaultValue={4.5} precision={0.5}/>
        <Box>(15)</Box>
      </Box>
        <Box style={{
            display: "flex",
           
            flexShrink: "0",
            
            
            
        }}>
        <CardMedia
            style={{
                display: "flex",
                width: "99px",
                height: "99px",
                padding:"15.3px 26.318px 16.2px 27px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "13.5px",
                border:" 1.35px solid #000",
                background:"#E5CBC4",
            
            }}
                component="img"
                alt="green iguana"
            
                image="https://s3-alpha-sig.figma.com/img/4cba/0f1a/2c77273d20cc18fc96db66b4ef6c6aed?Expires=1693180800&Signature=MY5IywXMFLCl8K9eGS9mmpQuJTyXqUQIGh2wvlSzb3e1yhAis~767KOj9W7pxT6C9o0QDfmoEQswjAN~satUGGEcEys~UGK0G4l7YszQc3CHdyaqhAW3Sz7gaVBKIL4daosCnfjdi4KfpPLixhLF80JcyAdt27isJsLnxO34Sj2m6Tcb9SUhRerWJ3cShKJclsucTVpaD-42d3bQroK0SAqGOaWO~7m5Ef0-Yzol~-7WTwSTyhHbz-oPTiMeIxZ-ugxZ8w2FTLbG5xWiOGVACVJ5nGMMaK-lUSyfybNuGRr-tiNhWwzBgqnT4YWdpDxKGhWgFbC8i9ax~lo8F32yRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
        <CardMedia
            style={{
                display: "flex",
                width: "99px",
                height: "99px",
                padding:"15.3px 26.318px 16.2px 27px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "13.5px",
               
                background:"#CDE5C4",
                marginLeft:"20px"
            
            }}
                component="img"
                alt="green iguana"
            
                image="https://s3-alpha-sig.figma.com/img/4cba/0f1a/2c77273d20cc18fc96db66b4ef6c6aed?Expires=1693180800&Signature=MY5IywXMFLCl8K9eGS9mmpQuJTyXqUQIGh2wvlSzb3e1yhAis~767KOj9W7pxT6C9o0QDfmoEQswjAN~satUGGEcEys~UGK0G4l7YszQc3CHdyaqhAW3Sz7gaVBKIL4daosCnfjdi4KfpPLixhLF80JcyAdt27isJsLnxO34Sj2m6Tcb9SUhRerWJ3cShKJclsucTVpaD-42d3bQroK0SAqGOaWO~7m5Ef0-Yzol~-7WTwSTyhHbz-oPTiMeIxZ-ugxZ8w2FTLbG5xWiOGVACVJ5nGMMaK-lUSyfybNuGRr-tiNhWwzBgqnT4YWdpDxKGhWgFbC8i9ax~lo8F32yRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
        </Box>
        <Box sx={{margin:"20px 0"}}>
            <Typography sx={{
              color: "rgba(0, 0, 0, 0.50)",
              fontFamily: "Nexa Bold",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "25px",

            }}>
              <Box sx={{
                color:" #000",
               /* 166.667% */
              }} component="span">Blend :</Box>
             
            Ethiopia 60%, Brazil 40%<br/>
            <Box sx={{
                color:" #000",
               /* 166.667% */
              }} component="span">Processing :</Box>
            Natural<br/>
             <Box sx={{
                color:" #000",
               /* 166.667% */
              }} component="span">Flavor Notes:</Box>
            
              Fruity Chocolate, Spices, Creamy
               Mouthfeel
            </Typography>
        </Box>
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"end"
        }}>
            <Typography 
            sx={{
                color: "#294E2C",
                fontFamily: "Prettywise Variable",
                fontSize: "30px",
                fontStyle:" normal",
                fontWeight: "800",
                lineHeight: "50px", /* 166.667% */
                letterSpacing:" 0.9px",
                textTransform: "uppercase",
            }}
            >$15.00</Typography>
            <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                gap:"20px"
            }}>
            <Typography 
                    sx={{
                        borderRadius: "110px",
                        border:" 1.5px solid rgba(36, 15, 23, 0.20)",
                     
                        color: "#240F17",
                            textAlign: "right",
                            fontFamily: "Nexa Bold",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "25px", /* 166.667% */
                            letterSpacing: "-0.45px",
                            display: "flex",
                            padding: "4px 15px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            width:"fit-content"
                    }}
                    >
                       200 gm
                    </Typography>
                    <Typography 
                    sx={{
                        borderRadius: "110px",
                        background:"#FFA16C",
                        boxShadow: "2px 5px 0px 0px #000",
                        color: "#240F17",
                            textAlign: "right",
                            fontFamily: "Nexa Bold",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "25px", /* 166.667% */
                            letterSpacing: "-0.45px",
                            display: "flex",
                            padding: "4px 15px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            width:"fit-content"
                    }}
                    >
                        1kg
                    </Typography>
            </Box>
        </Box>
        <Divider sx={{margin:"20px 0"}}/>
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            <Typography 
            sx={{
                color:" #240F17",
                textAlign: "right",
                fontFamily: "Nexa XBold",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "25px", /* 166.667% */
                letterSpacing: "-0.45px",
                textTransform: "uppercase",
            }}
            >quantity</Typography>
            <Box style={{
                        display:"flex",
                        
                        alignItems:"center"
                    }}>
                  <Typography
                  sx={{
                    display: "flex",
                    padding:{xs:"7px",sm:" 12.514px",md:" 12.514px"},
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8.343px",
                    borderRadius: "91.771px",
                    border: "1.251px solid rgba(36, 15, 23, 0.20)",
                    color:"#240F17",
cursor:"pointer"

                  }}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M5.52002 10.5259H15.5314" stroke="#240F17" stroke-width="1.25143" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                  </Typography>
                  <Typography 
                  sx={{
                    color: "#240F17",
                    textAlign: "center",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "50px", /* 333.333% */
                    letterSpacing: "0.45px",
                    margin:{xs:"0 7px",sm:"0 15px",md:"0 15px"}
                  }}    
                  >1</Typography>
                  <Typography
                  sx={{
                    display: "flex",
                    padding:{xs:"7px",sm:" 12.514px",md:" 12.514px"},
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8.343px",
                    borderRadius: "91.771px",
                    border: "1.251px solid rgba(36, 15, 23, 0.20)",
                    color:"#240F17",
cursor:"pointer"

                  }}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M5.57129 10.5259H15.5827" stroke="#240F17" stroke-width="1.25143" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5767 15.5314V5.52002" stroke="#240F17" stroke-width="1.25143" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </Typography>
                
                </Box>
        </Box>
            <Box>
              <Button style={{
          borderRadius: "110px",
          
          border:" 1.5px solid rgba(36, 15, 23, 0.20)",
          width:"96%",
          color:"#240F17",
          textAlign: "right",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px", 
          letterSpacing: "-0.45px",
          paddingTop:"10px",
          paddingBottom:"10px",
          marginTop:"20px"
        }}>Add to Cart</Button>
              <Button style={{
          borderRadius: "110px",
          background:"#FFA16C",
          boxShadow: "2px 5px 0px 0px #000",
          width:"96%",
          color:"#240F17",
          textAlign: "right",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px", 
          letterSpacing: "-0.45px",
          paddingTop:"10px",
          paddingBottom:"10px",
          marginTop:"20px"
        }}>Add to Cart</Button>
        
              </Box>
              
    </Box>
    
    </Grid>
    
  </Grid>
    </Container>
  )
}

export default BestSelling
