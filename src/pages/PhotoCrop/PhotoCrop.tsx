import Box from "@mui/material/Box";
import useNativeCamera from "../../util/hooks/useNativeCamera";
import Button from "@mui/material/Button";

import { Avatar, IconButton, Typography } from "@mui/material";
import { CgBell } from "react-icons/cg";

import logo from "../../../assets/Google__G__logo.svg.webp";
import { useHistory, useLocation } from "react-router";
import React, { useRef, useState } from "react";
import { Photo } from "@capacitor/camera";
import { Cropper, ReactCropperElement } from "react-cropper";

import "./PhotoCrop.css";
import "cropperjs/dist/cropper.css";

const PhotoCrop = () => {
  const { removePhoto } = useNativeCamera();
  const location = useLocation();
  const history = useHistory();
  interface LocationState {
    photo: Photo;
  }
  const cropperRef = useRef<ReactCropperElement>(null);
  const state = location.state as LocationState;
  const [photo, setPhoto] = React.useState(state.photo);

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const croppedImage = cropperRef.current.cropper
        .getCroppedCanvas()
        .toDataURL();
      history.push("/search", { image: croppedImage });
    }
  };
  return (
    <Box component="div" className="crop-page-wrapper">
      <Box component="div" className="header">
        <IconButton>
          <CgBell size={30} className="header-icons" />
        </IconButton>
        <Typography component="span" className="header-text">
          Google Photos
        </Typography>
        <IconButton>
          <Avatar src={logo} className="header-icons" />
        </IconButton>
      </Box>
      <Box component="div" className="image-container">
        <Cropper
          ref={cropperRef}
          className="cropper-wrapper"
          // zoomTo={0.5}
          //   style={{ height: 400, width: "100%" }}
          initialAspectRatio={1}
          //   preview={".img-preview"}
          src={photo.dataUrl}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          guides={true}
        />
        <Button className="proceed-button" onClick={getCropData}>
          Proceed to Search
        </Button>
      </Box>
    </Box>
  );
};

export default PhotoCrop;
