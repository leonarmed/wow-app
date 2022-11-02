import React from "react";
import { Control, Controller } from "react-hook-form";
import CustomInput, { CustomInputProps } from "./CustomInput";

function CustomInputForm({name, control, ...rest}) {
  // console.log(rest.defaultValue)
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={rest.defaultValue}
      render={({ field: { onChange, value } }) => (
        <CustomInput onChange={onChange} value={value} {...rest} />
      )}
    />
  );
}

export default CustomInputForm;
