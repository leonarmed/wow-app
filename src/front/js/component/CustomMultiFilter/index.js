import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function CustomMultiFilter() {
  return (
    <Stack
      spacing={3}
      sx={{
        width: "450px",
        display: "flex",
        justifyContent: "center",
        margin: "20px auto",
      }}
    >
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[2]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Selecciona entre estas opciones"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Comida" },
  { title: "Escapes o vida nocturna" },
  { title: "Tours" },
  { title: "Viajes" },
  { title: "Lecturas" },
  { title: "Series o películas" },
  { title: "Conciertos" },
  { title: "Motor Fest" },
  { title: "Ferias" },
];
