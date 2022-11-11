import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {Share as ShareIcon, WhatsApp as WhatsAppIcon} from "@mui/icons-material";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  ".MuiSpeedDialAction-fab":{
    backgroundColor: "#46b74f",
    color:"white",
    "&:hover":{
      backgroundColor: "#0cda70"
    }
  }
}));

const actions = [{ icon: <WhatsAppIcon />, name: "WhatsApp" }];

export default function PlaygroundSpeedDial({ to }) {
  return (
    <Box sx={{ position: 'relative', mb: 3 }}>
      <StyledSpeedDial
        ariaLabel="SpeedDial"
        icon={<ShareIcon />}
        direction={"left"}
        FabProps={{
          color: "secondary",
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {window.open(to, "_blank")}}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}
