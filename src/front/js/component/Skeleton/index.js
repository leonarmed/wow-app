import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media({ lenght }) {
  return (
    <Grid container wrap="nowrap">
      {Array.from(new Array(lenght)).map((item, index) => (
        <Box key={index} sx={{ width: 190, marginRight: 20, my: 5 }}>
          <Skeleton variant="rectangular" width={300} height={210} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton width="60%" />
            <Skeleton />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

function MediaJumbo() {
  return (
    <Grid container wrap="nowrap">
      <Box sx={{ width: "100%", paddingLeft: 18, my: 5 }}>
        <Box sx={{ display: "flex" }}>
          <Skeleton variant="rectangular" width={490} height={550} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              mx: 5,
            }}
          >
            <Skeleton width="70%" />
            {Array.from(new Array(15)).map((item, index) => (
              <Skeleton key={index} />
            ))}
          </Box>
        </Box>
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton />
        </Box>
      </Box>
    </Grid>
  );
}

export function CustomSkeleton({ cant }) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media lenght={cant} />
    </Box>
  );
}

export function CustomSkeletonJumbotron({ cant }) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <MediaJumbo />
    </Box>
  );
}
