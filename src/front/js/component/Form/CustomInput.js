import React from "react";
import {
  FormControl,
  TextField,
  TextFieldProps,
  MenuItem,
} from "@mui/material";

function CustomInput({ label, error, options, value, ...rest }) {
  return (
    <FormControl sx={{ width: "100%", textAlign: "left" }}>
      {options != null ? (
        <TextField
          sx={{ font: "none", fontWeight: "100" }}
          variant="outlined"
          fullWidth
          select
          label={label}
          margin="dense"
          FormHelperTextProps={{ sx: { fontWeight: "normal", fontSize: 12 } }}
          {...rest}
          error={!!error}
        >
          {options.map(
            (option) =>
              option && (
                <MenuItem
                  key={option.title}
                  value={option.title}
                  sx={{ font: "none", fontWeight: "100" }}
                >
                  {option.title}
                </MenuItem>
              )
          )}
        </TextField>
      ) : (
        <TextField
          sx={{ font: "none", fontWeight: "100" }}
          color="secondary"
          variant="outlined"
          fullWidth
          label={label}
          margin="dense"
          FormHelperTextProps={{ sx: { fontSize: 12 } }}
          {...rest}
          error={!!error}
          defaultValue={rest.defaultValue}
          helperText={error ? error.message : rest.helperText}
        />
      )}
    </FormControl>
  );
}

export default CustomInput;
