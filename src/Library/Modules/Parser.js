import Memorize from "./Memorize";

class Parser {
  static parse(string = "") {
    const keys = this.keys();
    const style = {};

    if (typeof string === "string") {
      const items = string.split(" ");

      const _items = [];

      items.map((item, b) => {
        if (item.includes("@")) {
          return this.transform(item)
            .split(" ")
            .map((i) => _items.push(i));
        }
        return _items.push(item);
      });

      _items.map((item) => {
        const values = item.split(":");

        if (values.length === 2) {
          const name = values[0] || "";
          const value = values[1] || "";
          const _value =
            value.includes("#") && Memorize.has(value)
              ? Memorize.get(value)
              : value;

          if (Memorize.has(name) && name.includes("-")) {
            style[Memorize.get(name)] = isNaN(_value)
              ? _value
              : parseFloat(_value, 10);
          } else {
            if (value.includes("?")) {
              style[keys[name]] = `var(--${value.replaceAll("?", "")})`;
            } else if (keys[name]) {
              style[keys[name]] = isNaN(_value)
                ? _value
                : parseFloat(_value, 10);
            }
          }
        }
      });
    }

    return style;
  }

  static transform(item = "") {
    if (Memorize.has(item)) {
      return Memorize.get(item);
    }

    return (
      {
        fc: "d:flex a:center j:center",
        ifc: "d:inline-flex a:center j:center",
      }[item.replaceAll("@", "")] || ""
    );
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
      br: "borderRadius",
    };
  }

  static declare(items = {}) {
    Object.entries(items).map(([key, value]) => {
      Memorize.set(key, String(value));
    });
  }

  static memory() {
    return Memorize;
  }

  static push(css) {
    if (window !== undefined) {
      const exists = document.getElementById("simple-effing-css");

      if (exists) {
        exists.innerHTML += css;
      } else {
        const style = document.createElement("style");
        style.id = "simple-effing-css";
        style.innerHTML = css;
        document.head.appendChild(style);
      }
    }
  }
}

export default Parser;
