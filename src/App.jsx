import "./App.css";
import React, { useState, useEffect } from "react";
import { HorizontalMenu } from "./components/menuBar/menuBar2";
import { HomeComp } from "./components/homeComp/homeComp";
import { MediaLinks } from "./components/mediaLinks/mediaLinks";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { ExperienceTimeline } from "./components/experienceTimeline/experienceTimeline";
import { Loader } from "./components/loader/loader";

function App() {
  const [pageSelected, setPageSelected] = useState(0);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [loader, setLoader] = useState(true);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  // const pageHandler = (index) => {
  //   // console.log(index);
  //   setPageSelected(index);
  //   setAnchorElNav(null);
  // };

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  useEffect(() => {
    document.title = "Deepak Sulakhe";
    setTimeout(async () => {
      console.log("Timed Out");
      setLoader(false);
    }, 2500);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <MediaLinks />
            <HomeComp />
          </div>
          <ExperienceTimeline />
          <Skills />
          <Projects />
        </>
      )}
    </>
  );
}

export default App;
