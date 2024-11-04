import React from "react";
import Parser from "../Modules/Parser";

const apply = (styles = {}, operations = []) => {
  operations.forEach((operation) => {
    const [rule = "", value = null, defaults = null] = operation;

    if (value) {
      styles[rule] = value;
    } else {
      if (defaults) {
        styles[rule] = defaults;
      }
    }
  });

  return styles;
};

const Box = ({
  children,
  top,
  left,
  bottom,
  right,
  flex,
  align,
  justify,
  direction,
  wrap,
  color,
  radius,
  shadow,
  height,
  width,
  style,
  press,
  opacity,
  padding,
  margin,
  mode = "margin",
  position,
  overflow,
  display,
  border,
  css,
  layer,
  image,
  id,
  reference = false,
  parse = false,
  native = {},
  element = "div",
}) => {
  const parsed = parse
    ? Parser.parse(parse)
    : {
      style: {},
      classes: "",
    };

  const styles = {
    ...apply({}, [
      ["height", height],
      ["width", width],
      ["opacity", opacity],
      ["overflow", overflow],
      ["display", display],
      ["border", border],
      ["position", position],
      ["cursor", press ? "pointer" : undefined],
      ["backgroundColor", color],
      ["borderRadius", radius],
      ["flex", flex],
      ["flexDirection", direction],
      ["flexWrap", wrap],
      ["alignItems", align],
      ["justifyContent", justify],
      ["paddingTop", padding || mode === "padding" ? top : undefined],
      ["paddingLeft", padding || mode === "padding" ? left : undefined],
      ["paddingBottom", padding || mode === "padding" ? bottom : undefined],
      ["paddingRight", padding || mode === "padding" ? right : undefined],
      ["marginTop", margin || mode === "margin" ? top : undefined],
      ["marginLeft", margin || mode === "margin" ? left : undefined],
      ["marginBottom", margin || mode === "margin" ? bottom : undefined],
      ["marginRight", margin || mode === "margin" ? right : undefined],
      ["top", mode === "position" ? top : undefined],
      ["left", mode === "position" ? left : undefined],
      ["bottom", mode === "position" ? bottom : undefined],
      ["right", mode === "position" ? right : undefined],
      ["boxShadow", shadow],
      ["boxSizing", top || left || right || bottom ? "border-box" : undefined],
      ["zIndex", layer],
      ["backgroundImage", image],
      ["backgroundRepeat", image ? "no-repeat" : undefined],
      ["backgroundSize", image ? "cover" : undefined],
      ["backgroundPosition", image ? "center" : undefined],
    ]),
    ...parsed.style,
    ...style,
  };

  const Element = `${element}`;

  return (
    <Element
      ref={reference || undefined}
      id={id}
      onClick={press}
      style={styles}
      className={
        css ? `${String(parsed?.classes)}${css}` : `${String(parsed?.classes)}`
      }
      {...native}
    >
      {children}
    </Element>
  );
};

export default Box;
