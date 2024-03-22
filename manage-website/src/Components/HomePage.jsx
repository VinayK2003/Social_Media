import BgImage from "./BgImage";
import BgImageII from "./BgImageII";
import Navbar from "./Navbar";
import Card from './Card';
import {Link} from "react-router-dom"
import bestoptimal from "../images/bestoptimal"


const HomePage = () => {
  return (
    <BgImage>
        <Navbar />
        <div style={
          {
            display:"flex",
            flexDirection:"row",
            margin:"10px",
            justifyContent:"center"
          }
        }>
        <Card cardname={"Generate Content"} link={"/generatecontent"} />
        <Card cardname={"Track Performance"} link={"/trackperformance"}/>
        </div>
        <div style={
          {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            margin:"10px"
          }
        }>
        <Card cardname={"Get Optimal Sales"} link={"/getoptsales"} img={"https://github.com/VinayK2003/Social_Media/blob/master/manage-website/src/images/bestoptimal.jpg"}/>
        <Card cardname={"Get Best Time"} link={"/besttime"}/>
        </div>
        <div style={{
          marginLeft: "450px",
        }}>
        <Card cardname={"Get Target Audience"} link={"/gettargetaudi"}/>
        </div>
    </BgImage>
  )
}

export default HomePage