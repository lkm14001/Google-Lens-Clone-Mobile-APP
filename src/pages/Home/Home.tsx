import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import { flaskSharp } from "ionicons/icons";
import { CgBell } from "react-icons/cg";
import "./Home.css";

import PFP from "../../../assets/Google__G__logo.svg.webp";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import Searchbar from "../../components/Searchbar/Searchbar";

import { GOOGLE_FUNCTIONS, NEWS } from "../../util/constants";
import GoogleFunction from "../../components/GoogleFunction/GoogleFunction";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { BiCaretDownCircle } from "react-icons/bi";
import { BiCaretUpCircle } from "react-icons/bi";

import { BsIncognito } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { CgShapeRhombus } from "react-icons/cg";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { SiGoogletasks } from "react-icons/si";
import { MdOutlineBookmarks } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import { TbHelp } from "react-icons/tb";
import { MdNoAccounts } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import NewsCard from "../../components/NewsCard/NewsCard";

const Home: React.FC = () => {
  const [isManageDialogOpen, setManageDialogOpen] = useState<boolean>(false);
  const [isManageAccordionOpen, setManageAccordionOpen] =
    useState<boolean>(false);

  const handleRefresh = (e: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      console.log("refreshed");
      e.detail.complete();
    }, 1500);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="ion-no-border ion-padding-top">
          <IonToolbar>
            <IonIcon
              icon={flaskSharp}
              size="large"
              role="button"
              id="flask"
              className="homescreen-nav-icons"
            />
            <Box
              sx={(theme) => ({
                display: "flex",
                gap: 3,
                alignItems: "center",
              })}
            >
              <CgBell
                size={30}
                id="notification-bell"
                className="homescreen-nav-icons"
              />
              <IconButton
                disableFocusRipple
                onClick={() => setManageDialogOpen(true)}
              >
                <Avatar
                  src={PFP}
                  sx={(theme) => ({
                    width: 30,
                    height: 30,
                    cursor: "pointer",
                  })}
                  id="user-avatar"
                  className="homescreen-nav-icons"
                />
              </IconButton>
            </Box>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <Modal
          open={isManageDialogOpen}
          onClose={() => {
            setManageAccordionOpen(false);
            setManageDialogOpen(false);
          }}
        >
          <Box
            component="div"
            className="manage_dialog_wrapper"
            onClick={() => {
              setManageAccordionOpen(false);
              setManageDialogOpen(false);
            }}
          >
            <Box
              component="div"
              className="manage_dialog_box"
              onClick={(e) => e.stopPropagation()}
            >
              <Box component="div" className="manage_dialog_header">
                <IconButton
                  aria-label="close-manage-dialog"
                  onClick={() => setManageDialogOpen(false)}
                >
                  <IoMdClose id="manage-dialog-close-button" />
                </IconButton>
                <Typography id="manage-dialog-heading">Google</Typography>
              </Box>
              <Box component={"div"} className="manage_dialog_content">
                <Box component={"div"} className="manage_sections">
                  <Box
                    component="div"
                    className="manage_dialog_accordion"
                    onClick={() =>
                      setManageAccordionOpen(!isManageAccordionOpen)
                    }
                  >
                    <Box component="div" id="user-section">
                      <Avatar src={PFP} id="manage-dialog-pfp" />
                      <Box component={"div"} id="user-details">
                        <Typography component={"span"}>
                          Leela Krishna
                        </Typography>
                        <Typography component={"span"} id="email">
                          krishnaleela35@gmail.com
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton
                      disableFocusRipple
                      onClick={() =>
                        setManageAccordionOpen(!isManageAccordionOpen)
                      }
                    >
                      {!isManageAccordionOpen ? (
                        <BiCaretDownCircle id="accordion_icon" />
                      ) : (
                        <BiCaretUpCircle id="accordion_icon" />
                      )}
                    </IconButton>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingY: 2,
                    }}
                  >
                    <Button id="manage_button" variant="outlined">
                      Manage your Google Account
                    </Button>
                  </Box>
                </Box>
                {isManageAccordionOpen && (
                  <Box component="div" className="manage_sections">
                    <Box component={"div"} className="manage-option">
                      <MdNoAccounts className="manage-option-icon" />
                      <Typography component="span">
                        Use without an account
                      </Typography>
                    </Box>
                    <Box component={"div"} className="manage-option">
                      <FaUserPlus className="manage-option-icon" />
                      <Typography component="span">
                        Add another account
                      </Typography>
                    </Box>
                    <Box component={"div"} className="manage-option">
                      <FaUserCog className="manage-option-icon" />
                      <Typography component="span">
                        manage accounts on this device
                      </Typography>
                    </Box>
                  </Box>
                )}
                <Box
                  component={"div"}
                  className="manage_sections manage-options-container"
                >
                  <Box component={"div"} className="manage-option">
                    <BsIncognito className="manage-option-icon" />
                    <Typography component="span">
                      New Chrome incognito tab
                    </Typography>
                  </Box>
                  <Box component={"div"} className="manage-option">
                    <RiHistoryFill className="manage-option-icon" />
                    <Typography component="span">Search History</Typography>
                  </Box>
                  <Box component={"div"} className="manage-option">
                    <CgShapeRhombus className="manage-option-icon" />
                    <Typography component="span">
                      Search personalisation
                    </Typography>
                  </Box>
                  <Box component={"div"} className="manage-option">
                    <AiFillSafetyCertificate className="manage-option-icon" />
                    <Typography component="span">SafeSearch</Typography>
                  </Box>
                  <Box component={"div"} className="manage-option">
                    <MdPersonSearch className="manage-option-icon" />
                    <Typography component="span">Results about you</Typography>
                  </Box>
                  <Box component={"div"} className="manage-option">
                    <SiGoogletasks className="manage-option-icon" />
                    <Typography component="span">Tasks</Typography>
                  </Box>
                  <Box component={"div"} className="manage-option">
                    <MdOutlineBookmarks className="manage-option-icon" />
                    <Typography component="span">
                      Saves and collections
                    </Typography>
                  </Box>
                </Box>
                <Box component={"div"} className="manage-option">
                  <CgProfile className="manage-option-icon" />
                  <Typography component="span">Profile</Typography>
                </Box>
              </Box>
              <Box component="div" className="manage_dialog_secondary_content">
                <Box component={"div"} className="manage-option">
                  <MdOutlineSettings className="manage-option-icon" />
                  <Typography component="span">Settings</Typography>
                </Box>
                <Box component={"div"} className="manage-option">
                  <TbHelp className="manage-option-icon" />
                  <Typography component="span">Help and feedback</Typography>
                </Box>
              </Box>
              <Box component="div" className="manage_dialog_footer">
                <Typography component={"span"}>Privacy Policy</Typography>
                <Typography component={"span"}>.</Typography>
                <Typography component={"span"}>Terms of service</Typography>
              </Box>
            </Box>
          </Box>
        </Modal>
        <Box
          component="div"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 2,
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
                // height: 50,
              })}
              className="google-lens-functions"
            >
              {GOOGLE_FUNCTIONS.map((ele, index) => (
                <GoogleFunction
                  color={ele.color}
                  background={ele.background}
                  googleFunction={ele.googleFunction}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Divider
          variant="fullWidth"
          sx={{
            width: "100%",
            backgroundColor: "gray",
            height: "0.5px",
            marginTop: "10px",
          }}
        />
        <Box component={"div"} className="home_data-grid">
          {NEWS.map((ele, index) => (
            <NewsCard sourceName={ele.source.name} thumbnail={ele.urlToImage || ""} title={ele.title} key={index} />
          ))}
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Home;
