import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

function FormattedDate({ children }) {
  if (!children) return null;
  return moment(children).format("MMMM DD @ h:mm a");
}

FormattedDate.propTypes = {
  children: PropTypes.any,
};

export default React.memo(FormattedDate);
