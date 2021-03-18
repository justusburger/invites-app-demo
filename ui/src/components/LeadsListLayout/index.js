import React from "react";
import DefaultLayout from "../DefaultLayout";
import { Button, ButtonGroup, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { NavigationRegion } from "./style";

function LeadsListLayout({ children }) {
  return (
    <DefaultLayout>
      <Container maxWidth="sm">
        <NavigationRegion>
          <ButtonGroup fullWidth>
            <Button
              component={NavLink}
              activeClassName="active"
              to="/leads/new"
            >
              Invited
            </Button>
            <Button
              component={NavLink}
              activeClassName="active"
              to="/leads/accepted"
            >
              Accepted
            </Button>
          </ButtonGroup>
        </NavigationRegion>
        {children}
      </Container>
    </DefaultLayout>
  );
}

export default React.memo(LeadsListLayout);
