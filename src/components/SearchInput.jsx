import { Search } from "@mui/icons-material";
import { Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchTerm){
      navigate(`search/${searchTerm}`)
      setSearchTerm('')
    }

  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Search sx={{ p: "10px", color: "red" }} />
    </Paper>
  );
};
