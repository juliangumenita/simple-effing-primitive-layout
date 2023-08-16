import { Box, Text, Parser } from "../../Library/";
import { useEffect, useState } from "react";

const Screen = ({ children }) => {
  const [loaded, _loaded] = useState(false);

  useEffect(() => {
    Parser.declare({
      "#primary": "#F7F7F7",
      "#shadow": "0px 1px 4px rgba(10, 15, 13, 0.2)",
      "-bs": "boxShadow",
    });
    _loaded(true);
  }, []);

  return !loaded ? null : (
    <Box parse="w:100% h:100% d:flex a:center j:center">
      <Box parse="w:100 h:100 br:5 c:#primary -bs:#shadow" />
      <Text tag="h1" native={{ data: "title" }}>
        hello
      </Text>
      <Box element="a" native={{ href: "https://google.com" }}>
        google.com
      </Box>
    </Box>
  );
};

export default Screen;
