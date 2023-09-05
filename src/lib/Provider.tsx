import React from "react";
import Parser from "./Parser.js";

interface ProviderProps {
  parse?: string;
  render?: (props: {
    styles: {
      [key: string]: React.CSSProperties;
    };
    memory: Map<string, unknown>;
  }) => unknown;
}

export const Provider = ({ render, parse }: ProviderProps) => {
  const styles = React.useMemo(
    () => (parse ? Parser.parse(parse) : {}),
    [parse]
  );

  return render?.({ styles, memory: Parser.memory() });
};

export default Provider;
