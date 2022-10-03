import React from "react";

const Component = ({
  size = 16,
  family = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  lines = false,
  press,
  style,
  children,
  right,
  left,
  top,
  bottom,
  margin = false,
  padding = false,
  mode = "margin",
  display = "inline",
  opacity,
  color = "#000000",
  line = false,
  align,
  weight = "400",
  to,
  target,
  css,
  id,
  referrer,
}) => {
  return to ? (
    <a
      href={to}
      target={target}
      onClick={press}
      style={{
        display,
        opacity,
        color,
        textAlign: align,
        fontSize: size,
        fontFamily: family,
        fontWeight: weight,
        lineHeight: line ? line + "px" : undefined,
        cursor: press ? "pointer" : undefined,
        paddingTop: padding || mode === "padding" ? top : undefined,
        paddingLeft: padding || mode === "padding" ? left : undefined,
        paddingBottom: padding || mode === "padding" ? bottom : undefined,
        paddingRight: padding || mode === "padding" ? right : undefined,
        marginTop: margin || mode === "margin" ? top : undefined,
        marginLeft: margin || mode === "margin" ? left : undefined,
        marginBottom: margin || mode === "margin" ? bottom : undefined,
        marginRight: margin || mode === "margin" ? right : undefined,
        top: mode === "position" ? top : undefined,
        left: mode === "position" ? left : undefined,
        bottom: mode === "position" ? bottom : undefined,
        right: mode === "position" ? right : undefined,
        ...style,
      }}
      className={css}
      id={id}
      ref={referrer}
    >
      {children}
    </a>
  ) : (
    <span
      onClick={press}
      style={{
        display,
        opacity,
        color,
        textAlign: align,
        fontSize: size,
        fontFamily: family,
        fontWeight: weight,
        lineHeight: line ? line + "px" : undefined,
        cursor: press ? "pointer" : undefined,
        paddingTop: padding || mode === "padding" ? top : undefined,
        paddingLeft: padding || mode === "padding" ? left : undefined,
        paddingBottom: padding || mode === "padding" ? bottom : undefined,
        paddingRight: padding || mode === "padding" ? right : undefined,
        marginTop: margin || mode === "margin" ? top : undefined,
        marginLeft: margin || mode === "margin" ? left : undefined,
        marginBottom: margin || mode === "margin" ? bottom : undefined,
        marginRight: margin || mode === "margin" ? right : undefined,
        top: mode === "position" ? top : undefined,
        left: mode === "position" ? left : undefined,
        bottom: mode === "position" ? bottom : undefined,
        right: mode === "position" ? right : undefined,
        ...style,
      }}
      className={css}
      id={id}
      ref={referrer}
    >
      {children}
    </span>
  );
};

export default Component;
