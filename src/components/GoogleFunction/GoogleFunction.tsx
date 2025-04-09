import { Box } from "@mui/material";
import { MdImageSearch } from "react-icons/md";
import { MdOutlineTranslate } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";

import './GoogleFunction.css'

interface GoogleFunctionProps {
  googleFunction: string;
  color: string;
  background: string;
  key: number;
}

const GoogleFunction = ({
  googleFunction,
  color,
  background,
  key
}: GoogleFunctionProps) => {
  return (
    <Box
      component={"div"}
      className="google-function"
      sx={(theme) => ({
        backgroundColor: background,
      })}
      key={key}
    >
      {googleFunction === "imageScan" && (
        <MdImageSearch className="google-functions-icon" style={{ color }} />
      )}
      {googleFunction === "translate" && (
        <MdOutlineTranslate className="google-functions-icon" style={{ color }} />
      )}
      {googleFunction === "homework" && (
        <MdOutlineSchool className="google-functions-icon" style={{ color }} />
      )}
      {googleFunction === "music" && (
        <MdMusicNote className="google-functions-icon" style={{ color }} />
      )}
    </Box>
  );
};

export default GoogleFunction;
