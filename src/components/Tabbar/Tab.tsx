import React, { useRef } from "react";
import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonModal,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";

import { GoHomeFill } from "react-icons/go";
import { HiOutlineSearch } from "react-icons/hi";
import { PiBookmarksSimpleBold } from "react-icons/pi";

import { Box, IconButton, Typography } from "@mui/material";

import "./Tab.css";
import Search from "../../pages/Search/Search";

const Tab = () => {
  const IonModalRef = useRef<HTMLIonModalElement>(null);

  const openModal = () => {
    IonModalRef.current?.present();
  };

  const closeModal = () => {
    IonModalRef.current?.dismiss();
  };

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path={"/tabs/home"}>
          <Home openSearchModal={openModal} />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home" className="ion-no-ripple">
          <Box component="div" className="selected-background">
            <IconButton
              sx={{
                color: "inherit",
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
              }}
              disableFocusRipple
              disableRipple
              disableTouchRipple
              className="google-tab-button"
            >
              <GoHomeFill style={{ width: "100%", height: "100%" }} />
            </IconButton>
          </Box>
          <Typography sx={{ fontWeight: "bolder" }}>Home</Typography>
        </IonTabButton>
        <IonTabButton
          tab="search"
          className="ion-no-ripple"
          onClick={openModal} // Open modal when "Search" tab is clicked
        >
          <Box component="div" className="selected-background">
            <IconButton
              sx={{
                color: "inherit",
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
              }}
              disableFocusRipple
              disableRipple
              disableTouchRipple
              className="google-tab-button"
            >
              <HiOutlineSearch style={{ width: "100%", height: "100%" }} />
            </IconButton>
          </Box>
          <Typography sx={{ fontWeight: "bolder" }}>Search</Typography>
        </IonTabButton>
        <IonTabButton tab="saved" href="/saved" className="ion-no-ripple">
          <Box component="div" className="selected-background">
            <IconButton
              sx={{
                color: "inherit",
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
              }}
              disableFocusRipple
              disableRipple
              disableTouchRipple
              className="google-tab-button"
            >
              <PiBookmarksSimpleBold
                style={{ width: "100%", height: "100%" }}
              />
            </IconButton>
          </Box>
          <Typography sx={{ fontWeight: "bolder" }}>Saved</Typography>
        </IonTabButton>
      </IonTabBar>

      {/* Centralized Modal */}
      <Search ref={IonModalRef} closeModal={closeModal} />
    </IonTabs>
  );
};

export default Tab;
