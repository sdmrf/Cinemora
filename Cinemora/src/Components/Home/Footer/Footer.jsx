import React from "react";
import "./styles.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import logo from "../../../assets/Logo/Cinmora_logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <footer className="Footer">
      <ContentWrapper>
        <div className="Container">
          <div className="top">
            <div className="left">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
              <div className="contacts">
                <h1>Contact</h1>
                <span>Cinemora@gmail.com</span>
              </div>
            </div>
            <div className="right">
              <div className="Links">
                <h4>Quick Links</h4>
                <ul className="Items">
                  <li className="Item"><a href="/">Home</a></li>
                  <li className="Item"><a href="/explore/movies">Movies</a></li>
                  <li className="Item"><a href="/explore/series">Series</a></li>
                  <li className="Item"><a href="">Premium</a></li>
                </ul>
              </div>
              <div className="Links">
                <h4>Support</h4>
                <ul className="Items">
                  <li className="Item"><a href="">Cinemora</a></li>
                  <li className="Item"><a href="">Queries</a></li>
                  <li className="Item"><a href="">Contact us</a></li>
                  <li className="Item"><a href="">Learn more</a></li>
                </ul>
              </div>
              <div className="Links">
                <h4>Subscribe</h4>
                <p>Subscribe to Cinemora premium for ad free experience</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="line">       
          </div>
          <div className="bottom">
            <div className="policy">
              <span>Privacy Policy</span>
              <span>Terms of use</span>
              <span>Support</span>
            </div>
            <div className="rights">
              <span>© 2024 Cinemora. All rights reserved</span>
            </div>
            <div className="social">
              <InstagramIcon />
              <XIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
