import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Context } from "../../store/appContext";

export default function CustomMultiFilter() {
  const { actions, store } = React.useContext(Context);
  return (
    <Stack
      spacing={3}
      sx={{
        width: { xs: "80%", sm: "400px" },
        display: "flex",
        justifyContent: "center",
        margin: "20px auto",
      }}
    >
      <Autocomplete
        multiple
        onChange={(event, newValue) => actions.saveFilter(newValue)}
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
  { title: "Tours" },
  { title: "Conciertos" },
  { title: "Ferias" },
];
