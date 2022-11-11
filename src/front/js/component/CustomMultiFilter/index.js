import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Context } from "../../store/appContext";

export const options = [
  { title: "Comida" },
  { title: "Tours" },
  { title: "Conciertos" },
  { title: "Ferias" },
  { title: "Cursos" },
];

export function CustomMultiFilter() {
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
        options={options}
        getOptionLabel={(option) => option.title}
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
