import { Avatar, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { GoKebabHorizontal } from "react-icons/go";

import "./NewsCard.css";

interface NewsCardProps {
  thumbnail: string;
  title: string;
  sourceLogo?: string;
  sourceName: string;
}

const NewsCard = ({
  thumbnail,
  title,
  sourceLogo,
  sourceName,
}: NewsCardProps) => {
  return (
    <Box component="div" className="news-card-wrapper">
      <Box component={"img"} className="news-card-image" src={thumbnail} />
      <Box component="div" className="news-card-footer">
        <Typography className="news-card-title">
          {title}
        </Typography>
        <Box component={"div"} className="news-card-footer-options">
          <Box component="div" className="news-card-footer-source">
            <Avatar id="source-avatar-logo" />
            <Typography className="source-name">
              {sourceName}
            </Typography>
          </Box>
          <IconButton>
            <GoKebabHorizontal className="menu-icon" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
