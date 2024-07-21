import React from "react";
import './Home.css'
import Navbar from "../../components/Navbar/Navbar"
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/Footer/Footer";




function Home(){
    return(
        <>
        <Navbar />
        <div className="hero">
            <img src={hero_banner} alt="" className="banner-img"/>
            <div className="hero-caption">
                <img src={hero_title} alt=""  className="caption-img"/>
                <p>Discovering his ties to a secret ancient order , a young man living ina modern
                    state
                </p>
                <div className="hero-btns">
                    <button className="btn"><img src= {play_icon} alt="" />Play</button>
                    <button className="btn dark-btn"><img src={info_icon} />More Info</button>
                </div>
                <Titlecards />
            </div>
        </div>
        <div className="more-cards">
        <Titlecards   title={"BlockBuster Movies"} category={"top_rated"}/>
        <Titlecards   title={"Only On Netflix"}  category={"popular"}/>
        <Titlecards  title={"Upcoming"}  category={"upcoming"}/>
        <Titlecards  title={"Latest Hits"}  category={"now_playing"}/>
        </div>
        <Footer />
        </>
    )
}
export  default Home