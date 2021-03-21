import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import NewLeads from "./containers/NewLeads";
import AcceptedLeads from "./containers/AcceptedLeads";
import { GlobalStyles } from "./components/GlobalStyles";
import Theme from "./components/Theme";
import QueryClientProvider from "./components/QueryClientProvider";

function App() {
  return (
    <QueryClientProvider>
      <Theme>
        <Router>
          <Switch>
            <Route path="/leads/new">
              <NewLeads />
            </Route>
            <Route path="/leads/accepted">
              <AcceptedLeads />
            </Route>
            <Route path="/">
              <Redirect to="/leads/new" />
            </Route>
          </Switch>
        </Router>
        <CssBaseline />
        <GlobalStyles />
      </Theme>
    </QueryClientProvider>
  );
}

export default React.memo(App);
