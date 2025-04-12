import "@capacitor-community/camera-preview";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { IoSearchSharp } from "react-icons/io5";
import { MdFlashOff } from "react-icons/md";
import { MdFlashOn } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { GoKebabHorizontal } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

import "./GoogleLens.css";
import {
  CameraPreview,
  CameraPreviewOptions,
} from "@capacitor-community/camera-preview";
import { useState } from "react";

const GoogleLens = ({ lensOpen }: any) => {
  const [isCameraActive, setIsCameraActive] = useState(false);

  const CameraConfig: CameraPreviewOptions = {
    parent: "cameraPreview",
    className: "cameraPreview",
    // enableZoom: true,
    height: window.innerHeight * 0.5,
    position: "rear",
    toBack: false,
  };

  const startCamera = async () => {
    await CameraPreview.start(CameraConfig);
    setIsCameraActive(true);
    console.log("Started");
  };

  const stopCamera = async () => {
    await CameraPreview.stop();
    setIsCameraActive(false);
  };
  return (
    <>
      <Box
        component="div"
        id="cameraPreview"
        className={`cameraPreview ${lensOpen && "camOpen"}`}
      ></Box>
      {lensOpen && (
        <Box component={"div"} className="google-lens-overlay">
          <Box component="div" className="google-lens-header">
            <Box component="div" className="header-buttons">
              <IconButton onClick={stopCamera}>
                <MdOutlineClose className="header-button" />
              </IconButton>
              <IconButton>
                <MdFlashOff className="header-button" />
              </IconButton>
            </Box>
            <Typography component="span" className="header-text">
              Google Lens
            </Typography>
            <Box component="div" className="header-buttons">
              <IconButton>
                <MdHistory className="header-button" />
              </IconButton>
              <IconButton>
                <GoKebabHorizontal className="header-button kebab" />
              </IconButton>
            </Box>
          </Box>
          <Box component="div" className="camera-preview-box"></Box>
          <Box component="div" className="camera-buttons">
            <IconButton>
              <IoSearchSharp className="camera-button" />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default GoogleLens;
