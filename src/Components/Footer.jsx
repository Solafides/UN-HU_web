import React from 'react'
import unlogo from "../commonResource/images/home/UN LOGO GRAY BG (2).jpg"
import telegram from "../commonResource/images/home/telegram.jpg"
import instagram from "../commonResource/images/home/instagram.jpg"
import linkedin from "../commonResource/images/home/linkldn.jpg"
import music from "../commonResource/images/home/music.jpg"
import x from "../commonResource/images/home/x.jpg"


function Footer() {
	return (
	  <footer>
		<div className="footer-top">
		  <div className="footer-logo">
		  <img src={unlogo} alt="UN Logo" />
			<h2>UN-ET HU <br />CHAPTER</h2>
		  </div>
		  <div className="social-icons">
			<img src={instagram} alt="Instagram" style={{width:30, height:30}} />
			<img src={linkedin} alt="LinkedIn" style={{width:30, height:30}} />
			<img src={telegram} alt="telegram" style={{width:30, height:30}} />
			<img src={music} alt="Music" style={{width:30,height:30}} />
			<img src={x} alt="twitter" style={{width:30,height:30}} />
			
		  </div>
		</div>
		<hr className="horizontal-line" />
		<div className="footer-bottom">
		  *Links for the socials* 
		  <a href="#">Telegram</a> | 
		  <a href="#">LinkedIn</a> | 
		  <a href="#">Instagram</a> | 
		  <a href="#">TikTok</a>
		</div>
	  </footer>
	);
  }
  
  export default Footer;