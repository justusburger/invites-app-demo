import React from "react";
import { Container, Title, Illustration, Description } from "./style";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import PropTypes from "prop-types";

function NoJobs({ children }) {
  return (
    <Container>
      <Illustration>
        <BusinessCenterOutlined />
      </Illustration>
      <Title>No jobs</Title>
      <Description>{children}</Description>
    </Container>
  );
}

NoJobs.propTypes = {
  children: PropTypes.any,
};

export default React.memo(NoJobs);
