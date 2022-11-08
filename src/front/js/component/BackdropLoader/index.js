import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Context } from "../../store/appContext";

export default function SimpleBackdrop() {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={store.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
