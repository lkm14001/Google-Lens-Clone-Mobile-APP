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

import { GoHomeFill } from "react-icons/go";
import { Route } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="ion-no-border ion-padding-top">
          <IonToolbar>
            <IonIcon icon={flaskSharp} size="large" role="button" id="flask" />
            <Box
              sx={(theme) => ({
                display: "flex",
                gap: 3,
                alignItems: "center",
              })}
            >
              <CgBell size={30} id="notification-bell" />
              <Avatar src={PFP} sx={{ width: 30, height: 30 }} />
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
        >
          <Typography
            sx={(theme) => ({
              color: "white",
              fontSize: 55,
              fontWeight: "bold",
            })}
          >
            Google
          </Typography>
          <Searchbar />
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Home;
