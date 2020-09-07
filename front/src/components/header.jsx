import React from "react";
import { Text, Box, Flex } from "rebass";
import { Link } from "react-router-dom";

const header = ({ location }) => {
  return (
    <>
      <Flex px={2} p={0} alignItems="center">
        <Text fontWeight="bold">Rebass</Text>
        <Box mx="auto" />
        {location === "/" ? (
          <Link variant="nav" to="/settings">
            Settings
          </Link>
        ) : (
          <Link to="/">back</Link>
        )}
      </Flex>
    </>
  );
};

export default header;
