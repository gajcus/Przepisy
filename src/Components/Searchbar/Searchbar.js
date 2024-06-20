import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import "./Searchbar.css";

export default function Searchbar({ setRecipes }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") {
      alert("Proszę wprowadzić termin wyszukiwania");
      return;
    }

    const appId = "1cc3a40f";
    const appKey = "6b4cc5e3d8f8296aabf95b03f46240c6";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

    axios
      .get(url)
      .then((response) => {
        setRecipes(response.data.hits);
      })
      .catch((error) => {
        console.error("Error fetching data from Edamam API:", error);
        alert(
          "Wystąpił błąd podczas pobierania danych. Proszę spróbować ponownie później.",
        );
      });
  };

  return (
    <div>
      <div className="search-container">
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            className="search-field"
            fullWidth
            label="Wyszukaj"
            id="fullWidth"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </div>
    </div>
  );
}
