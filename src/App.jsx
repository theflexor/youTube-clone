import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components";

import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
