import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { flaskSharp } from "ionicons/icons";
import { CgBell } from "react-icons/cg";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

import PFP from "../../assets/Google__G__logo.svg.webp";
import { Avatar, Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonIcon icon={flaskSharp} size="large" role="button" id="flask" />
            <Box
              sx={(theme) => ({
                display: "flex",
                gap: 3,
                alignItems: "center",
              })}
            >
              <CgBell size={30} id="notification-bell"/>
              <Avatar src={PFP} sx={{ width: 30, height: 30 }} />
            </Box>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
