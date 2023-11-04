import "./App.css";
import React, { useState } from "react";
import { HorizontalMenu } from "./components/menuBar/menuBar2";
import { HomeComp } from "./components/homeComp/homeComp";
import { MediaLinks } from "./components/mediaLinks/mediaLinks";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";

function App() {
  const [pageSelected, setPageSelected] = useState(0);
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const pageHandler = (index) => {
    // console.log(index);
    setPageSelected(index);
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* <HorizontalMenu
        pageHandler={pageHandler}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        anchorElNav={anchorElNav}
        // anchorElUser={anchorElUser}
      /> */}
      <div className="container">
        <MediaLinks />
        <HomeComp />
      </div>
      <Skills />
      <Projects />
    </>
  );
}

export default App;
