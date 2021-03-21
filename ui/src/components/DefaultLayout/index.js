import React from "react";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";

function DefaultLayout({ children }) {
  return <Box p={2}>{children}</Box>;
}

DefaultLayout.propTypes = {
  children: PropTypes.any,
};

export default React.memo(DefaultLayout);
