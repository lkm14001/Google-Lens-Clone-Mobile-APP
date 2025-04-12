import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonRoute,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import "./theme/variables.css";
import Tab from "./components/Tabbar/Tab";
import GoogleListening from "./pages/GoogleListening/GoogleListening";
import SearchPage from "./pages/SearchPage/SearchPage";
import { useEffect } from "react";

import { App as CapApp } from "@capacitor/app";
import { PluginListenerHandle } from "@capacitor/core";
import GoogleLens from "./pages/GoogleLens/GoogleLens";
import PhotoCrop from "./pages/PhotoCrop/PhotoCrop";

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    let handler: PluginListenerHandle;
    const handleExit = async () => {
      handler = await CapApp.addListener("backButton", () => {
        if (window.location.pathname === "/tabs/home") {
          CapApp.exitApp();
        } else {
          window.history.back();
        }
      });
    };
    handleExit();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <Route path="/tabs" component={Tab} />
        <Route path="/listen" component={GoogleListening} />
        <Route path="/search" component={SearchPage} />
        <Route path="/photo-crop" component={PhotoCrop} />

        <Redirect exact from="/" to="/tabs/home" />
        <Redirect exact from="/tabs" to="/tabs/home" />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
