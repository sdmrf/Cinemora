import React, { useState, useEffect } from "react";
import "./styles.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../../../assets/Logo/Cinmora_logo.svg";
import pfp from "../../../assets/User/PFP 1.jpg";

const Navbar = () => {
  const [show, setShow] = useState("top");
  const [sidebar, setSidebar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileView, setMobileView] = useState(window.innerWidth < 768); // Set initial value based on screen width

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const NavbarScroll = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > scroll && !mobileMenu && !showSearch) {
        setShow("show");
      } else {
        setShow("top");
      }
    }
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", NavbarScroll);
    return () => window.removeEventListener("scroll", NavbarScroll);
  }, [scroll]);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to ensure effect runs only once on component mount

  const searchQueryHandler = (event) => {
    if (
      (event.key === "Enter" && query.length > 0) ||
      (event.type === "click" && query.length > 0)
    ) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearchBar = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMenuItems = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const opensidebar = () => {
    setSidebar(true);
  }


  const navigationHandler = (type) => {
    if (type === "movies") {
      navigate("/explore/movies");
    } else if (type === "series") {
      navigate("/explore/series");
    } else {
      navigate(`/`);
    }
    setMobileMenu(false);
  };

  return (
    <header className={`Navbar ${mobileMenu ? "dropdown" : ""} ${show}`}>
      <ContentWrapper>
        <div className="Container">
          <div className="left">
            <img src={Logo} alt="" />
            {mobileView ? (
              mobileMenu ? (
                <ul className="mobileMenuItems">
                  <div className="close">
                    <li
                      className="mobileItems"
                      onClick={() => navigationHandler("")}
                    >
                      Home
                    </li>
                    <CloseIcon
                      className="closeIcon"
                      onClick={() => setMobileMenu(false)}
                    />
                  </div>
                  <li
                    className="mobileItems"
                    onClick={() => navigationHandler("movies")}
                  >
                    Movies
                  </li>
                  <li
                    className="mobileItems"
                    onClick={() => navigationHandler("series")}
                  >
                    Series
                  </li>
                </ul>
              ) : null
            ) : (
              <ul className="Menuitems">
                <li className="Items" onClick={() => navigationHandler("")}>
                  Home
                </li>
                <li
                  className="Items"
                  onClick={() => navigationHandler("movies")}
                >
                  Movies
                </li>
                <li
                  className="Items"
                  onClick={() => navigationHandler("series")}
                >
                  Series
                </li>
              </ul>
            )}
          </div>
          <div className="right">
            {mobileView ? (
              <div className="mobileView">
                {" "}
                <SearchIcon
                  onClick={openSearchBar}
                  className="searchIcon"
                />{" "}
                <MenuIcon onClick={openMenuItems} className="menuIcon" />{" "}
                <div className="pfp">
                  <img src={pfp} alt="" onClick={opensidebar} />
                </div>
                {sidebar && 
                <div className="userProfile">
                  <div className="profile">
                    <img src={pfp} alt="" />
                    <h1 className="username">
                      <h2>John Doe</h2>
                      <span>John@gmail.com</span>{" "}
                    </h1>
                    <CloseIcon className="close" onClick={() => setSidebar(false)} />
                  </div>
                  <ul className="profileItems">
                    <li className="Items">
                      <AccountCircleIcon style={{ fontSize: "15px" }} />
                    </li>
                    <li className="Items">My Profile</li>
                  </ul>
                  <ul className="profileItems">
                    <li className="Items">
                      <StarIcon style={{ fontSize: "15px" }} />
                    </li>
                    <li className="Items">Watchlist</li>
                  </ul>
                  <ul className="profileItems">
                    <li className="Items">
                      <SettingsIcon style={{ fontSize: "15px" }} />
                    </li>
                    <li className="Items">Settings</li>
                  </ul>
                  <ul className="profileItems">
                    <li className="Items">
                      <LogoutIcon style={{ fontSize: "15px" }} />
                    </li>
                    <li className="Items">Log Out</li>
                  </ul>
                </div>}
              </div>
            ) : (
              <>
                {" "}
                <div className="search">
                  <input
                    type="text"
                    className="searchInput"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                  />
                  <SearchIcon
                    className="searchIcon"
                    onClick={searchQueryHandler}
                  />
                </div>
                <div className="pfp">
                  <img src={pfp} alt="" onClick={opensidebar} />
                </div>
                {sidebar && 
                <div className="userProfile1">
                  <div className="profile">
                    <img src={pfp} alt="" />
                    <h1 className="username">
                      <h2>John Doe</h2>
                      <span>John@gmail.com</span>{" "}
                    </h1>
                    <CloseIcon className="close" onClick={() => setSidebar(false)} />
                  </div>
                  <ul className="profileItems">
                    <li className="Items">
                      <AccountCircleIcon style={{ fontSize: "25px" }} />
                    </li>
                    <li className="Items">My Profile</li>
                  </ul>
                  <ul className="profileItems">
                    <li className="Items">
                      <StarIcon style={{ fontSize: "25px" }} />
                    </li>
                    <li className="Items">Watchlist</li>
                  </ul>
                  <ul className="profileItems">
                    <li className="Items">
                      <SettingsIcon style={{ fontSize: "25px" }} />
                    </li>
                    <li className="Items">Settings</li>
                  </ul>
                  <ul className="profileItems">
                    <li className="Items">
                      <LogoutIcon style={{ fontSize: "25px" }} />
                    </li>
                    <li className="Items">Log Out</li>
                  </ul>
                </div>}
              </>
            )}
          </div>
        </div>
      </ContentWrapper>
      {mobileView && showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                className="searchInput"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <SearchIcon className="searchIcon" onClick={searchQueryHandler} />
            </div>
            <div className="closeBtn">
              <CloseIcon
                className="close"
                onClick={() => setShowSearch(false)}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Navbar;
