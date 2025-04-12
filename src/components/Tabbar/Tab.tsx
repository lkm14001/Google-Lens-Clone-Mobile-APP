import React, { useRef, useState } from "react";
import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonModal,
} from "@ionic/react";
import { Redirect, Route, useHistory } from "react-router-dom";
import Home from "../../pages/Home/Home";

import { GoHomeFill } from "react-icons/go";
import { HiOutlineSearch } from "react-icons/hi";
import { PiBookmarksSimpleBold } from "react-icons/pi";

import { Box, IconButton, Typography } from "@mui/material";

import "./Tab.css";
import SearchModal from "../../pages/SearchModal/SearchModal";

import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from "@capacitor-community/camera-preview";
import "@capacitor-community/camera-preview";
import GoogleLens from "../../pages/GoogleLens/GoogleLens";

const Tab = () => {
  const IonModalRef = useRef<HTMLIonModalElement>(null);
  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  const openModal = () => {
    window.history.pushState({}, "", "/search-modal"); //pushing dummy route to fake the routing (because when back is pressed the modal closes and home page stays which leads to app exit) which gives the browser to think we are on a new seperate route.
    //so clicking back goes to /tabs/home again clicking back exits app
    IonModalRef.current?.present();
  };

  const searchTabClick = () => {
    if (searchText.length > 0) {
      history.push(`/search?query=${encodeURIComponent(searchText)}`, {
        searchText,
      });
    } else {
      openModal();
    }
  };

  const closeModal = () => {
    IonModalRef.current?.dismiss();
  };

  const startCamera = () => {
    window.location.href = '/google-lens';
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
          onClick={searchTabClick} // Open modal when "Search" tab is clicked
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
      <SearchModal
        ref={IonModalRef}
        closeModal={closeModal}
        searchText={searchText}
        setSearchText={setSearchText}
        startCamera={startCamera}
      />
    </IonTabs>
  );
};

export default Tab;
