import React from "react";
import Parser from "../Modules/Parser";
import Memorize from "../Modules/Memorize";

const Provider = ({ parse = "", render = () => null }) => {
  const styles = React.useMemo(
    () => (parse ? Parser.parse(parse) : {}),
    [parse]
  );

  return render({ styles, memory: Parser.memory() });
};

export default Provider;
