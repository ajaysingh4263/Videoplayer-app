import React from "react";
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'




function Footer(){
    return(
      <div className="Footer">
           <div className="Footer-icon">
                <img src={facebook_icon} alt="" srcset="" />
                <img src={instagram_icon} alt="" srcset="" />
                <img src={twitter_icon} alt="" srcset="" />
                <img src={youtube_icon} alt="" srcset="" />
           </div>
           <ul>
            <li>Audio Discription</li>
            <li>Help Centre</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notice</li>
            <li>Coocie Prefrence</li>
            <li>corporate Information</li>
            <li>Contact Us</li>
           </ul>
           <p className="copyright-Text"> 1997-2023 Netflix,Inc</p>
      </div>
    )
}

export default Footer