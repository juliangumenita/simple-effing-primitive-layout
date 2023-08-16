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
      {[...Array(100)].map((a, aa) => (
        <Box css="d:inline-flex a:center j:center fw:wrap block">
          {[...Array(100)].map((b, bb) => (
            <Box css="d:inline-flex a:center j:center fw:wrap block">
              {[...Array(1)].map((c, cc) => (
                <Box css="d:inline-flex a:center j:center fw:wrap block" />
              ))}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Screen;
