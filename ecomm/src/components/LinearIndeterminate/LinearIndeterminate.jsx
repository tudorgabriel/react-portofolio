import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import "../LinearIndeterminate/LinearIndeterminate.scss";

export default function LinearIndeterminate() {
  return (
    <Box className="linear" sx={{ width: "50%" }}>
      <LinearProgress color="secondary" className="linear" />
    </Box>
  );
}
