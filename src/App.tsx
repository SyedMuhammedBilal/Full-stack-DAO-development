import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Web3 from "web3";
import Dashboard from "./layout/Dashboard";
import { routes } from "./routes/routes";

function App() {
  return (
    <div>
      <RoutedApp />
    </div>
  );
};

const RoutedApp = () => {

  return (
    <Router>
      <Dashboard>
      <Box bgcolor={"#121315"} style={{ marginLeft: '17em' }} height="100%">
        <Switch>
          {routes?.map(({ path, element, index }: any) => {
            return <Route exact={index} path={path} component={element} />
          })}
        </Switch>
        </Box>
      </Dashboard>
    </Router>
  )
}

export default App;
