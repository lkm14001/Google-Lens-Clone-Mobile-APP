import { Paper, IconButton, InputBase, Box, Typography } from "@mui/material";
import "./Searchbar.css";

import MIC from "../../../assets/google-mic.png";
import LENS from "../../../assets/google-lens.png";
import { HiOutlineSearch } from "react-icons/hi";

const Searchbar = () => {
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
          cursor: "pointer"
        })}
        className="home-search"
        onTouchEnd={() => console.log("hello touch")}
      >
        <Box
          component="div"
          sx={(theme) => ({
            display: "flex",
            // gap: 2,
            alignItems: "center",
          })}
        >
          <IconButton
            aria-label="Search google"
            //   onClick={}
            disableFocusRipple
            sx={(theme) => ({
              width: 50,
              height: 50,
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
              fontSize: 25
            })}
            id="google-searchbar-text"
          >
            Search
          </Typography>
        </Box>

        {/* for later use */}
        {/* Use the below input base in opened modal */}
        {/* <InputBase
          sx={(them) => ({
            flex: 1,
            // border: '1px solid white',
            height: "100%",
            fontSize: 30,
          })}
          inputProps={{
            style: {
              color: 'white',
              // fontWeight: ''
            }
          }}
          placeholder="Search"
        /> */}

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
            //   onClick={}
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
            //   onClick={}
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
