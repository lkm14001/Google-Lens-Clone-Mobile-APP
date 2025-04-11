import {
  IonContent,
  IonHeader,
  IonModal,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { Divider, IconButton, InputBase, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useRef } from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { HiTrendingUp } from "react-icons/hi";

import MIC from "../../../assets/google-mic.png";
import LENS from "../../../assets/google-lens.png";

import "./SearchModal.css";

interface SearchProps {
  closeModal: () => void;
  ref: React.RefObject<HTMLIonModalElement | null>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchModal = ({
  closeModal,
  ref,
  searchText,
  setSearchText,
}: SearchProps) => {
  const InputRef = useRef<HTMLInputElement | null>(null);
  const router = useIonRouter();

  const handleTabChange = () => {
    router.push("/", "forward", "push");
    closeModal();
  };

  return (
    <IonModal ref={ref}>
      <Box component="div" className="google-search-screen-wrapper">
        <Box component="div" className="google-search-bar-wrapper">
          <Box component="div" className="google-search">
            <IconButton onClick={handleTabChange}>
              <IoIosArrowRoundBack className="back-button" />
            </IconButton>
            <InputBase
              inputRef={InputRef}
              type="text"
              autoFocus
              inputProps={{
                style: {
                  color: "white",
                  // fontWeight: ''
                },
              }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
              className="search-input"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  closeModal();
                  router.push(
                    `/search?query=${encodeURIComponent(searchText)}`,
                    "forward"
                  );
                }
              }}
            />
            <Box
              component="div"
              sx={(theme) => ({
                display: "flex",
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
        </Box>
        <hr className="divider" />
        <Box component="div" className="trending-searches">
          <Typography component={"span"}>Trending searches</Typography>
          <Box component="div" className="trending-searches-list">
            {[...Array(10).keys()].map((ele) => (
              <Box component="div" className="trending-individual-search">
                <IconButton
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  className="trending-icon-wrapper"
                >
                  <HiTrendingUp className="trending-icon" />
                </IconButton>
                <Typography component={"span"}>
                  Hello This is leela krishna
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </IonModal>
  );
};

export default SearchModal;
