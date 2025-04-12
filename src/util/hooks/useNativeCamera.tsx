import { useState } from "react";

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";

const useNativeCamera = () => {
  const [photo, setPhoto] = useState<Photo | null>();

  /**
   * Capture a photo and set it in state to be avialable for crop
   */
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      quality: 100,
      //   allowEditing: true,
      height: window.screen.height,
      width: window.screen.width,
      //   saveToGallery: true,
      source: CameraSource.Camera,
    });
    setPhoto(photo);
  };

  /**
   * Remove the photo from state
   */
  const removePhoto = () => {
    setPhoto(null);
  };

  return {
    photo,
    takePhoto,
    removePhoto,
  };
};

export default useNativeCamera;
