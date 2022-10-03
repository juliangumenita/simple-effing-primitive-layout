class Parser {
  static parse(string = "") {
    const keys = this.keys();
    const style = {};

    if (typeof string === "string") {
      const items = string.split(" ");
      items.map((item) => {
        const values = item.split(":");
        const name = values[0] || "";
        const value = values[1] || "";

        if (keys[name]) {
          style[keys[name]] = isNaN(value) ? value : parseFloat(value, 10);
        }
      });
    }

    return style;
  }

  static keys() {
    return {
      i: "zIndex",
      w: "width",
      ws: "whiteSpace",
      t: "top",
      ta: "textAlign",
      r: "right",
      p: "position",
      pt: "paddingTop",
      pr: "paddingRight",
      pl: "paddingLeft",
      pb: "paddingBottom",
      pa: "padding",
      oa: "overflow",
      ox: "overflowX",
      oy: "overflowY",
      o: "opacity",
      mw: "minWidth",
      mh: "minHeight",
      mxw: "maxWidth",
      mxh: "maxHeight",
      mt: "marginTop",
      mr: "marginRight",
      ml: "marginLeft",
      mb: "marginBottom",
      ma: "margin",
      l: "left",
      b: "bottom",
      a: "alignItems",
      j: "justifyContent",
      h: "height",
      d: "display",
      fw: "flexWrap",
      fd: "flexDirection",
      f: "flex",
      c: "backgroundColor",
    };
  }
}

export default Parser;
