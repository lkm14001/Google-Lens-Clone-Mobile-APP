import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";

import { GoHomeFill } from "react-icons/go";
import { HiOutlineSearch } from "react-icons/hi";
import { PiBookmarksSimpleBold } from "react-icons/pi";

import { Box, IconButton, Typography } from "@mui/material";

import "./Tab.css";

const Tab = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path={"/home"} component={Home} />
        <Route exact path="/">
          <Redirect to={"/home"} />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home" className="ion-no-ripple">
          <Box
            component="div"
            className="selected-background"
            sx={(theme) => ({})}
          >
            <IconButton
              sx={(theme) => ({
                color: "inherit",
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
              })}
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              <GoHomeFill style={{ width: "100%", height: "100%" }} />
            </IconButton>
          </Box>
          <Typography sx={(theme) => ({ fontWeight: "bolder" })}>
            Home
          </Typography>
        </IonTabButton>
        <IonTabButton tab="search" href="/search" className="ion-no-ripple">
          <Box
            component="div"
            className="selected-background"
            sx={(theme) => ({})}
          >
            <IconButton
              sx={(theme) => ({
                color: "inherit",
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
              })}
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              <HiOutlineSearch style={{ width: "100%", height: "100%" }} />
            </IconButton>
          </Box>
          <Typography sx={(theme) => ({ fontWeight: "bolder" })}>
            Search
          </Typography>
        </IonTabButton>
        <IonTabButton tab="saved" href="/saved" className="ion-no-ripple">
          <Box
            component="div"
            className="selected-background"
            sx={(theme) => ({})}
          >
            <IconButton
              sx={(theme) => ({
                color: "inherit",
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
              })}
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              <PiBookmarksSimpleBold style={{ width: "100%", height: "100%" }} />
            </IconButton>
          </Box>
          <Typography sx={(theme) => ({ fontWeight: "bolder" })}>
            Saved
          </Typography>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tab;
