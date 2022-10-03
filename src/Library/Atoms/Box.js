import React, { useEffect, useRef } from "react";
import Parser from "../Modules/Parser";

const Box = ({
  children,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  flex,
  align,
  justify,
  direction,
  wrap,
  color = "transparent",
  radius = 0,
  shadow = false,
  height,
  width,
  style,
  press,
  opacity = 1,
  padding = false,
  margin = false,
  mode = "margin",
  position = "static",
  overflow,
  display = "block",
  all = false,
  border,
  css,
  layer,
  image,
  id,
  scroll = false,
  ref,
  parse = false,
}) => {
  const reference = useRef(null);

  useEffect(() => {
    try {
      if (reference.current && scroll) {
        if (scroll.left) {
          reference.current.scrollLeft = scroll.left;
        }
        if (scroll.top) {
          reference.current.scrollTop = scroll.top;
        }
      }
    } catch (Error) {
      console.error(Error);
    }
  }, [reference, scroll]);

  let parsed = {};
  if (parse) {
    parsed = Parser.parse(parse);
  }

  return (
    <div
      ref={ref || reference}
      id={id}
      onClick={press}
      style={{
        height,
        width,
        opacity,
        overflow,
        display,
        border,
        position,
        cursor: press ? "pointer" : undefined,
        backgroundColor: color,
        backgroundImage: image || undefined,
        borderRadius: radius,
        flex: flex ? flex : undefined,
        flexDirection: direction,
        flexWrap: wrap,
        alignItems: align,
        justifyContent: justify,
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
        boxShadow: shadow,
        boxSizing: "border-box",
        zIndex: layer,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...parsed,
        ...style,
      }}
      className={css}
    >
      {children}
    </div>
  );
};

export default Box;
