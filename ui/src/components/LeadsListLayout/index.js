import React from "react";
import DefaultLayout from "../DefaultLayout";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { NavigationRegion } from "./style";
import PropTypes from "prop-types";

function LeadsListLayout({ children }) {
  return (
    <DefaultLayout>
      <Container maxWidth="sm">
        <NavigationRegion>
          <Card>
            <Button data-testid="invited-tab-button" component={NavLink} activeClassName="active" to="/leads/new">
              Invited
            </Button>
            <Button data-testid="accepted-tab-button" component={NavLink} activeClassName="active" to="/leads/accepted">
              Accepted
            </Button>
          </Card>
        </NavigationRegion>

        {children}
      </Container>
    </DefaultLayout>
  );
}

LeadsListLayout.propTypes = {
  children: PropTypes.any,
};

export default React.memo(LeadsListLayout);
