import React from "react";
import Parser from "../Modules/Parser";

const apply = (styles = {}, rule = "", value = null, defaults = null) => {
  if (value) {
    styles[rule] = value;
  } else {
    if (defaults) {
      styles[rule] = defaults;
    }
  }
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
  const styles = React.useMemo(() => {
    const parsed = parse ? Parser.parse(parse) : {};

    let _styles = {};

    _styles = apply(_styles, "height", height);
    _styles = apply(_styles, "width", width);
    _styles = apply(_styles, "opacity", opacity);
    _styles = apply(_styles, "over", overflow);
    _styles = apply(_styles, "display", display);
    _styles = apply(_styles, "border", border);
    _styles = apply(_styles, "position", position);
    _styles = apply(_styles, "cursor", press ? "pointer" : undefined);
    _styles = apply(_styles, "backgroundColor", color);
    _styles = apply(_styles, "borderRadius", radius);
    _styles = apply(_styles, "flex", flex);
    _styles = apply(_styles, "flexDirection", direction);
    _styles = apply(_styles, "flexWrap", wrap);
    _styles = apply(_styles, "alignItems", align);
    _styles = apply(_styles, "justifyContent", justify);
    _styles = apply(
      _styles,
      "paddingTop",
      padding || mode === "padding" ? top : undefined
    );
    _styles = apply(
      _styles,
      "paddingLeft",
      padding || mode === "padding" ? left : undefined
    );
    _styles = apply(
      _styles,
      "paddingBottom",
      padding || mode === "padding" ? bottom : undefined
    );
    _styles = apply(
      _styles,
      "paddingRight",
      padding || mode === "padding" ? right : undefined
    );
    _styles = apply(
      _styles,
      "marginTop",
      margin || mode === "margin" ? top : undefined
    );
    _styles = apply(
      _styles,
      "marginLeft",
      margin || mode === "margin" ? left : undefined
    );
    _styles = apply(
      _styles,
      "marginBottom",
      margin || mode === "margin" ? bottom : undefined
    );
    _styles = apply(
      _styles,
      "marginRight",
      margin || mode === "margin" ? right : undefined
    );
    _styles = apply(_styles, "top", mode === "position" ? top : undefined);
    _styles = apply(_styles, "left", mode === "position" ? left : undefined);
    _styles = apply(
      _styles,
      "bottom",
      mode === "position" ? bottom : undefined
    );
    _styles = apply(_styles, "right", mode === "position" ? right : undefined);
    _styles = apply(_styles, "boxShadow", shadow);
    _styles = apply(
      _styles,
      "boxSizing",
      top || left || right || bottom ? "border-box" : undefined
    );
    _styles = apply(_styles, "zIndex", layer);
    if (image) {
      _styles = apply(_styles, "backgroundImage", image);
      _styles = apply(_styles, "backgroundRepeat", "no-repeat");
      _styles = apply(_styles, "backgroundSize", "cover");
      _styles = apply(_styles, "backgroundPosition", "center");
    }

    _styles = {
      ..._styles,
      ...parsed,
      ...style,
    };

    return _styles;
  }, [
    height,
    width,
    opacity,
    overflow,
    display,
    border,
    position,
    press,
    color,
    radius,
    flex,
    direction,
    wrap,
    align,
    justify,
    padding,
    margin,
    mode,
    top,
    left,
    bottom,
    right,
    shadow,
    layer,
    image,
    parse,
    style,
  ]);

  const Element = `${element}`;

  return (
    <Element
      ref={reference || undefined}
      id={id}
      onClick={press}
      style={styles}
      className={`${css ? ` ${css}` : ""}`}
      {...native}
    >
      {children}
    </Element>
  );
};

export default Box;
