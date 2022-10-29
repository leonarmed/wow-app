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
    </FormControl>
  );
}

export default CustomInput;
