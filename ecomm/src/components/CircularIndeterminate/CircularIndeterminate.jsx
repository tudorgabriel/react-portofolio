import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../CircularIndeterminate/CircularIndeterminate.scss";

export default function CircularIndeterminate() {
  return (
    <Box className="spin">
      <h3 className="load"> Loading..</h3>
      <CircularProgress />
    </Box>
  );
}
