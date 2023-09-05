import React from "react";

interface TextProps {
  size?: number;
  family?: string;
  press?: React.MouseEventHandler<HTMLAnchorElement>;
  style?: React.CSSProperties;
  children?:
    | JSX.Element
    | React.JSX.Element
    | React.ReactElement
    | React.ReactNode
    | string
    | number
    | null
    | undefined
    | (
        | JSX.Element
        | React.JSX.Element
        | React.ReactElement
        | React.ReactNode
        | string
        | number
        | null
        | undefined
      )[];
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
  margin?: boolean;
  padding?: boolean;
  mode?: "margin" | "padding" | "position";
  display?: "inline" | "block" | "inline-block" | "flex" | "none";
  opacity?: number;
  color?: string;
  line?: number;
  align?: "left" | "center" | "right";
  weight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  to?: string;
  target?: string;
  css?: string;
  id?: string;
  referrer?: React.Ref<HTMLElement>;
  tag?: string;
  native?: {
    [key: string]: unknown;
  };
}

export const Text = ({
  size = 16,
  family = "inherit",
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
  line,
  align,
  weight = "400",
  to,
  target,
  css,
  id,
  referrer,
  tag = "span",
  native = {},
}: TextProps) => {
  const Tag = `${tag}` as keyof JSX.IntrinsicElements;

  const extra: {
    [key: string]: unknown;
  } = {
    ref: referrer,
  };

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
      {...native}
    >
      {children}
    </a>
  ) : (
    <Tag
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
      {...extra}
      {...native}
    >
      {children}
    </Tag>
  );
};

export default Text;
