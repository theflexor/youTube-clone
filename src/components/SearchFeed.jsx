import {  Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/FetchFromApi";
import { Videos } from "./Videos";

export const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search results for: <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
    </Stack>
  );
};
