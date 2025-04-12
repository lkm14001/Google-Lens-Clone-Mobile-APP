import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { IMAGES, SEARCH_SEGMENTS } from "../../util/constants";
import Typography from "@mui/material/Typography";

import "./SearchPage.css";

import { PiFlaskFill } from "react-icons/pi";
import Avatar from "@mui/material/Avatar";
import { IconButton, InputBase, Skeleton } from "@mui/material";
import logo from "../../../assets/Google__G__logo.svg.webp";
import { HiOutlineSearch } from "react-icons/hi";
import { IonContent, useIonRouter } from "@ionic/react";

import MIC from "../../../assets/google-mic.png";
import LENS from "../../../assets/google-lens.png";
import { useLocation } from "react-router";

import { Keyboard } from "@capacitor/keyboard";

interface TextSearchResult {
  url: string;
  title: string;
  description: string;
  position: number;
}
type ImageSearchResult = string;

interface VideoSearchResult {
  title: string;
  description: string;
  views: string;
  publishedTimeText: string;
  thumbnail: string;
  channelThumbnail: string;
}

interface NewsSearchResult {
  title: string;
  name: string;
  url: string;
  language: string;
  category: string;
  description: string;
  logo: string;
  favicon: string;
  links: any;
}

interface LocationState {
  image: string;
}

const SearchPage = () => {
  //   type ResultType = TextSearchResult[] | ImageSearchResult[];
  type SegmentType = "All" | "News" | "Videos" | "Images";

  const SEGMENTS = {
    ALL: "All",
    NEWS: "News",
    VIDEOS: "Videos",
    IMAGES: "Images",
  };
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState();
  const [selectedSegment, setSelectedSegment] = useState<SegmentType>("All");
  const [reverseImageSearch, setReverseImageSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const router = useIonRouter();
  const location = useLocation();

  const handleGoogleFunctions = (func: string) => {
    if (func === "mic") {
      router.push("/listen", "back");
    }

    if (func === "lens") {
      console.log("LENS");
    }
  };

  const handleTextSearch = async (searchTerm: string) => {
    const url = `${import.meta.env.VITE_TEXT_SEARCH}?query=${encodeURIComponent(
      searchTerm
    )}&limit=20&related_keywords=true`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": "google-web-search1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchResult(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVideosSearch = async (searchTerm: string) => {
    const url = `${
      import.meta.env.VITE_VIDEO_SEARCH
    }?query=${searchTerm}&order=relevance&type=video`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": "youtube-video-and-shorts-downloader.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const videoResults = result.data.map((ele: any) => {
        return {
          title: ele.title,
          description: ele.description,
          views: ele.viewCountText,
          publishedTimeText: ele.publishedTimeText,
          thumbnail: ele.thumbnail[0].url,
          channelThumbnail: ele.channelThumbnail[0].url,
        };
      });
      setSearchResult(videoResults);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImagesSearch = async (searchTerm: string) => {
    const url = `${import.meta.env.VITE_IMAGE_SEARCH}?q=${searchTerm}&hl=en`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": "image-search19.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const imagesArray = result.response.images.map(
        (ele: any) => ele?.image?.url
      );
      setSearchResult(imagesArray);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewsSearch = async (searchTerm: string) => {
    const url = `${import.meta.env.VITE_NEWS_SEARCH}?query=${searchTerm}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": "news-api14.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchResult(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApiResults = (resultType: string, searchTerm: string): void => {
    if (resultType === SEGMENTS.ALL) {
      handleTextSearch(searchTerm);
    } else if (resultType === SEGMENTS.NEWS) {
      handleNewsSearch(searchTerm);
    } else if (resultType === SEGMENTS.IMAGES) {
      handleImagesSearch(searchTerm);
    } else if (resultType === SEGMENTS.VIDEOS) {
      handleVideosSearch(searchTerm);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (location.state) {
      const image = (location.state as any).image;
      if (image) {
        setReverseImageSearch(image);
        setLoading(false);
      }
    } else {
      const queryParams = new URLSearchParams(location.search);
      const searchTerm = queryParams.get("searchTerm");
      setSearchText(searchTerm ?? "");
      setLoading(true);
      handleTextSearch(searchTerm ?? "");
      setLoading(false);
    }
  }, []);

  return (
    <IonContent>
      <Box component="div" className="search-page-wrapper">
        <Box component={"div"} className="search-page-header">
          <IconButton>
            <PiFlaskFill className="header-icons header-flask" />
          </IconButton>
          <Typography
            component={"span"}
            className="header-title"
            onTouchEnd={() => router.push("/tabs/home", "back", "replace")}
          >
            Google
          </Typography>
          <Avatar className="header-icons" src={logo} />
        </Box>
        <Box
          component={"div"}
          className={`search-bar ${
            reverseImageSearch ? "reverseimage-search" : ""
          }`}
        >
          <IconButton>
            <HiOutlineSearch className="searchbar-icons" />
          </IconButton>
          {reverseImageSearch ? (
            <Box
              component={"img"}
              src={reverseImageSearch}
              className="searchbar-reverse-image"
            />
          ) : (
            <InputBase
              sx={{ flex: 1, pl: 1 }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-bar-text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleApiResults(selectedSegment, searchText);
                  Keyboard.hide();
                }
              }}
            />
          )}
          <Box
            component="div"
            className={reverseImageSearch ? "searchbar-google-functions" : ""}
          >
            <IconButton
              aria-label="Microphone !"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleGoogleFunctions("mic");
              }}
              disableFocusRipple
            >
              <Box component={"img"} src={MIC} className="searchbar-icons" />
            </IconButton>
            <IconButton
              aria-label="Google Lens"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleGoogleFunctions("lens");
              }}
              disableFocusRipple
            >
              <Box
                component={"img"}
                sx={(theme) => ({
                  width: "100%",
                  height: "100%",
                })}
                src={LENS}
                className="searchbar-icons"
              />
            </IconButton>
          </Box>
        </Box>
        {!reverseImageSearch && (
          <Box component="div" className="search-segments">
            <Box component={"div"} className="segment-links">
              {SEARCH_SEGMENTS.map((ele) => (
                <Typography
                  key={ele.id}
                  component="span"
                  sx={{ cursor: "pointer" }}
                  className={
                    selectedSegment === ele.name ? "selected-segment" : ""
                  }
                  onClick={() => {
                    setSelectedSegment(ele.name as SegmentType);
                    handleApiResults(ele.name, searchText);
                  }}
                >
                  {ele.name}
                </Typography>
              ))}
            </Box>
          </Box>
        )}
        {loading ? (
          <>
            {selectedSegment === "All" ||
              (selectedSegment === "News" &&
                [...Array(10).keys()].map((ele) => (
                  <Box component="div" sx={{ px: 2, py: 1 }}>
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "1.5rem",
                        background:
                          "var(--var-search-page-search-bar-background)",
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "0.8rem",
                        background:
                          "var(--var-search-page-search-bar-background)",
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "0.8rem",
                        background:
                          "var(--var-search-page-search-bar-background)",
                      }}
                    />
                  </Box>
                )))}
            {selectedSegment === "Images" &&
              [...Array(10).keys()].map((ele) => (
                <Box
                  component="div"
                  sx={{ px: 2, py: 1 }}
                  className="image-search-list"
                >
                  <Skeleton
                    variant="rounded"
                    // width={'210'}
                    height={100}
                    className="image-result"
                    sx={{
                      background:
                        "var(--var-search-page-search-bar-background)",
                    }}
                  />
                </Box>
              ))}
            {selectedSegment === "Videos" && (
              <Box component={"div"} className="videos-list">
                {[...Array(10).keys()].map((ele) => (
                  <Box component={"div"} className="videos-list-item">
                    <Skeleton variant="rounded" className="video-thumbnail" />
                    <Box component="div" className="video-details">
                      <Skeleton
                        variant="text"
                        sx={{
                          fontSize: "1.5rem",
                          background:
                            "var(--var-search-page-search-bar-background)",
                        }}
                        className="video-title"
                      />
                      <Skeleton
                        variant="text"
                        sx={{
                          fontSize: "0.8rem",
                          background:
                            "var(--var-search-page-search-bar-background)",
                        }}
                        className="video-description"
                      />
                      <Box component={"div"} className="channel-details">
                        <Skeleton variant="circular" className="channel-img" />
                        <Skeleton
                          variant="text"
                          sx={{
                            fontSize: "0.8rem",
                            background:
                              "var(--var-search-page-search-bar-background)",
                              width: '100%'
                          }}
                          className="channel-views"
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </>
        ) : (
          <>
            {/* <Box component="div" className="top-stories">
            {SEARCH_RESULTS.slice(0, 11).map((ele, key) => (
              <>
                <Box component={"div"} className="top-stories-card">
                    <Box component="div" className=""></Box>
                </Box>
              </>
            ))}
          </Box> */}
            {reverseImageSearch && (
              <>
                {IMAGES?.map((ele, key) => (
                  <Box component="div" className="image-search-list">
                    <Box
                      component="img"
                      className="image-result"
                      src={(ele as ImageSearchResult) && ele}
                    />
                  </Box>
                ))}
              </>
            )}
            {selectedSegment === "All" && (
              <Box component="div" className="search-list">
                {searchResult &&
                  (searchResult as TextSearchResult[]).map((ele, key) => (
                    <Box
                      component="a"
                      className="individual-search-result"
                      href={ele.url}
                    >
                      <Typography
                        component="a"
                        href={ele.url}
                        className="result-title"
                      >
                        {"title" in ele && ele.title}
                      </Typography>
                      <Typography
                        component="span"
                        className="result-description"
                      >
                        {"description" in ele && ele.description}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            )}

            {selectedSegment === "Images" && (
              <>
                {searchResult &&
                  (searchResult as ImageSearchResult[])?.map((ele, key) => (
                    <Box component="div" className="image-search-list">
                      <Box
                        component="img"
                        className="image-result"
                        src={(ele as ImageSearchResult) && ele}
                      />
                    </Box>
                  ))}
              </>
            )}

            {selectedSegment === "Videos" && (
              <Box component={"div"} className="videos-list">
                {searchResult &&
                  (searchResult as VideoSearchResult[]).map((ele) => (
                    <Box component={"div"} className="videos-list-item">
                      <Box
                        component="img"
                        src={ele.thumbnail}
                        className="video-thumbnail"
                      />
                      <Box component="div" className="video-details">
                        <Typography component="span" className="video-title">
                          {ele.title}
                        </Typography>
                        <Typography
                          component="span"
                          className="video-description"
                        >
                          {ele.description}
                        </Typography>
                        <Box component={"div"} className="channel-details">
                          <Box
                            component="img"
                            className="channel-img"
                            src={ele.channelThumbnail}
                          />
                          <Typography
                            component={"span"}
                            className="channel-views"
                          >
                            {ele.views}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
              </Box>
            )}

            {selectedSegment === "News" && (
              <Box component="div" className="search-list">
                {searchResult &&
                  (searchResult as NewsSearchResult[]).map((ele, key) => (
                    <Box
                      component="a"
                      className="individual-search-result"
                      href={ele.url}
                    >
                      <Typography
                        component="a"
                        href={ele.url}
                        className="result-title"
                      >
                        {"title" in ele && ele.title}
                      </Typography>
                      <Box component={"div"} className="news-desctiption">
                        <Box
                          component="img"
                          className="news-favicon"
                          src={ele.favicon ?? ""}
                        />
                        <Typography
                          component="span"
                          className="result-description"
                        >
                          {"description" in ele && ele.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
              </Box>
            )}
          </>
        )}
      </Box>
    </IonContent>
  );
};

export default SearchPage;
