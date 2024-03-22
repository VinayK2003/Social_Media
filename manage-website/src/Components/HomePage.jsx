import BgImage from "./BgImage";
import BgImageII from "./BgImageII";
import Navbar from "./Navbar";
import Card from './Card';
import './Card.css';


import React from 'react'
import { Grid } from "swiper";

const HomePage = () => {
  return (
    <BgImage>
        <Navbar />
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </BgImage>
  )
}

export default HomePage