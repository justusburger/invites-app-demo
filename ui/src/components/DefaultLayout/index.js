import React from "react";
import { Box } from "@material-ui/core";

function DefaultLayout({ children }) {
  return <Box p={2}>{children}</Box>;
}

export default React.memo(DefaultLayout);
