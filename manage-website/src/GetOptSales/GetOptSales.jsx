import React from 'react'
import "./GetOptSales.css"
import BgImage from "../Components/BgImage";
import FacebookIcon from '@mui/icons-material/Facebook';
import TvIcon from '@mui/icons-material/Tv';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./getopts.css"
const GetOptSales = () => {
  return (
    <BgImage>

    <div className='getOpt'>
      <div className='gapbada'>
        <h1>Get Optimal Sales Of Social Media Websites </h1>

      <div className='Facebook'>
        <FacebookIcon/>
        <input type="text" className="inputbox1" placeholder='Facebook'/>
      </div>
      <div className='TV'>
        <TvIcon/>
        <input type="text" className="inputbox1" placeholder='TV'/>
      </div>
      <div className='Instagram'>
        <InstagramIcon/>
        <input type="text" className="inputbox1" placeholder='Instagram'/>
      </div>
      <div className='Youtube'>
        <YouTubeIcon/>
        <input type="text" className="inputbox1" placeholder='Youtube'/>
      </div>
      <Button as="a" variant="primary"> Submit</Button>
      </div>
    </div>
    </BgImage>
  )
}

export default GetOptSales