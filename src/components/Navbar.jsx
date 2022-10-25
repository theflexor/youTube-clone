import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/contants";
import { SearchInput } from "./SearchInput";
export const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        zIndex: 100,
        background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 100%)",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchInput  />
    </Stack>
  );
};
