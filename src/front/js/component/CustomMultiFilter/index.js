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
        options={events_filters}
        getOptionLabel={(option) => option}
        // defaultValue={[events_filters[2]]}
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

// Tipos de eventos para filtrar
const events_filters = [
  "Comida","Tours",
   "Concierto" ,
   "Feria" ,
];
