import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
} from "@ionic/react";
import { flaskSharp } from "ionicons/icons";
import { CgBell } from "react-icons/cg";
import "./Home.css";

import PFP from "../../../assets/Google__G__logo.svg.webp";
import { Avatar, Box, Typography } from "@mui/material";
import Searchbar from "../../components/Searchbar/Searchbar";

import { GOOGLE_FUNCTIONS } from "../../util/constants";
import GoogleFunction from "../../components/GoogleFunction/GoogleFunction";

const Home: React.FC = () => {
  const DEVICE_WIDTH = window.innerWidth;
  const DEVICE_HEIGHT = window.innerHeight;
  console.log(DEVICE_WIDTH, DEVICE_HEIGHT);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="ion-no-border ion-padding-top">
          <IonToolbar>
            <IonIcon icon={flaskSharp} size="large" role="button" id="flask" className="homescreen-nav-icons"/>
            <Box
              sx={(theme) => ({
                display: "flex",
                gap: 3,
                alignItems: "center",
              })}
            >
              <CgBell size={30} id="notification-bell" className="homescreen-nav-icons" />
              <Avatar
                src={PFP}
                sx={(theme) => ({
                  width: 30,
                  height: 30,
                })}
                id="user-avatar"
                className="homescreen-nav-icons"
              />
            </Box>
          </IonToolbar>
        </IonHeader>
        <Box
          component="div"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 5,
            paddingTop: 2,
            paddingX: 3,
            boxSizing: "border-box",
            width: "100%",
            alignItems: "center",
          })}
          className="home-content"
        >
          <Typography
            sx={(theme) => ({
              color: "white",
              fontSize: `clamp(45px, 1.2vw, 60px)`,
              fontWeight: "bold",
            })}
            className="home-title"
          >
            Google
          </Typography>
          <Box component="div" className="google-lens">
            <Searchbar />
            <Box
              component={"div"}
              sx={(theme) => ({
                width: "100%",
                height: 50,
              })}
              className="google-lens-functions"
            >
              {GOOGLE_FUNCTIONS.map((ele,index) => (
                <GoogleFunction color={ele.color} background={ele.background} googleFunction={ele.googleFunction} key={index}/>
              ))}
            </Box>
          </Box>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Home;
