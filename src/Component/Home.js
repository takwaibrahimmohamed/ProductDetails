import React from 'react'
import Header from './Header';
import styled from '@emotion/styled';
import FooterCom from './FooterCom';
import Breadcrim from './Breadcrim';
import BestSelling from './BestSelling';
import ReviewsForProduct from './ReviewsForProduct';
import FullWidthGrid from './ClientOpinion';
import SimilarProduct from './SimilarProduct';
import EngoySection from './EngoySection';
import ClientOpinion from './ClientOpinion';




const Home = () => {
    const Home=styled.div({
      backgroundColor: "#FCF3E6",
      boxShadow: "110px 134px 210px 0px rgba(0, 0, 0, 0.15)",
   overflow:"hidden"
   
    })
  return (
  
    <Home>
       <Header/>
       <Breadcrim/>
       <BestSelling/>
      <ReviewsForProduct/>
      <ClientOpinion/>
      <SimilarProduct/>
      <EngoySection/>
      <FooterCom/>
    </Home>
  )
}

export default Home
