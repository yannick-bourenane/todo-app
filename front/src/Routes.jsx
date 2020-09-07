import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import TodoList from "./views/TodoList";
import Error404 from "./views/Error404";
import Header from "./components/header";
import { Flex, Box } from "rebass";
import Settings from "./views/Settings";

const Routes = () => {
  let location = useLocation();

  return (
    <Flex flexWrap="wrap" flexDirection="column" width={380}>
      <Box p={3} color="white" bg="primary">
        <Header location={location.pathname} />
      </Box>
      <Box p={3} color="white" bg="secondary">
        <Switch>
          <Route path="/" exact>
            <TodoList />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Box>
    </Flex>
  );
};

export default Routes;
