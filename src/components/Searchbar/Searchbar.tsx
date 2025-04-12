import { Paper, IconButton, InputBase, Box, Typography } from "@mui/material";
import "./Searchbar.css";

import MIC from "../../../assets/google-mic.png";
import LENS from "../../../assets/google-lens.png";
import { HiOutlineSearch } from "react-icons/hi";
import { useIonRouter } from "@ionic/react";

const Searchbar = ({ openModal, startCamera }: any) => {
  const router = useIonRouter();
  const handleGoogleFunctions = (func: string) => {
    if (func === "mic") {
      console.log("MIC");
      router.push("/listen", "back");
    }

    if (func === "lens") {
      startCamera();
    }
  };

  return (
    <>
      <Box
        component={"div"}
        sx={(them) => ({
          width: "100%",
          height: 80,
          borderRadius: 50,
          paddingX: 2,
          backgroundColor: "var(--var-home-page-search-bar-background)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          cursor: "pointer",
        })}
        className="home-search"
        // id="google-search-open-modal"
        onClick={openModal}
      >
        <Box
          component="div"
          sx={(theme) => ({
            display: "flex",
            // gap: 2,
            alignItems: "center",
          })}
          id="google-functionalities"
        >
          <IconButton
            aria-label="Search google"
            disableFocusRipple
            sx={(theme) => ({
              width: 50,
              height: 50,
              zIndex: 10,
            })}
            className="google-searchbar-functions"
          >
            <HiOutlineSearch
              style={{
                width: "100%",
                height: "100%",
                color: "var(--var-home-page-icon-inactive)",
              }}
            />
          </IconButton>
          <Typography
            sx={(theme) => ({
              color: "var(--var-home-page-icon-inactive)",
              fontSize: 25,
            })}
            id="google-searchbar-text"
          >
            Search
          </Typography>
        </Box>
        <Box
          component="div"
          sx={(theme) => ({
            display: "flex",
            // gap: 1,
            alignItems: "center",
          })}
        >
          <IconButton
            aria-label="Microphone !"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleGoogleFunctions("mic");
            }}
            disableFocusRipple
            sx={(theme) => ({
              width: 50,
              height: 50,
            })}
            className="google-searchbar-functions"
          >
            <Box
              component={"img"}
              sx={(theme) => ({
                width: "100%",
                height: "100%",
              })}
              src={MIC}
            />
          </IconButton>
          <IconButton
            aria-label="Google Lens"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleGoogleFunctions("lens");
            }}
            disableFocusRipple
            sx={(theme) => ({
              width: 50,
              height: 50,
            })}
            className="google-searchbar-functions"
          >
            <Box
              component={"img"}
              sx={(theme) => ({
                width: "100%",
                height: "100%",
              })}
              src={LENS}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Searchbar;
