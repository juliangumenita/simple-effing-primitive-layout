import Memorize from "./Memorize";

class Parser {
  static parse(string = "") {
    const keys = this.keys();
    const statics = this.statics();
    const auto = this.auto();
    const style = {};
    let classes = "";

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

          if (statics.includes(name)) {
            classes += `${item} `;
            return;
          }

          if (auto?.[name]?.includes(value)) {
            classes += `${item} `;
            return;
          }

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

    return { style, classes };
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

  static statics() {
    return ["ws", "ta", "oa", "ox", "oy", "a", "j", "d", "fw", "fd", "f", "p"];
  }

  static auto() {
    return {
      w: ["0", "auto", "inherit", "unset", "100%", "0%"],
      h: ["0", "auto", "inherit", "unset", "100%", "0%"],
      mw: ["0", "auto", "inherit", "unset", "100%", "0%"],
      mh: ["0", "auto", "inherit", "unset", "100%", "0%"],
      mxh: ["0", "auto", "inherit", "unset", "100%", "0%"],
      mxh: ["0", "auto", "inherit", "unset", "100%", "0%"],
      pa: ["0", "auto", "inherit", "unset", "100%", "0%"],
      pt: ["0", "auto", "inherit", "unset", "100%", "0%"],
      pl: ["0", "auto", "inherit", "unset", "100%", "0%"],
      pr: ["0", "auto", "inherit", "unset", "100%", "0%"],
      pb: ["0", "auto", "inherit", "unset", "100%", "0%"],
      ma: ["0", "auto", "inherit", "unset", "100%", "0%"],
      mt: ["0", "auto", "inherit", "unset", "100%", "0%"],
      ml: ["0", "auto", "inherit", "unset", "100%", "0%"],
      mr: ["0", "auto", "inherit", "unset", "100%", "0%"],
      mb: ["0", "auto", "inherit", "unset", "100%", "0%"],
      t: ["0", "auto", "inherit", "unset", "100%", "0%"],
      l: ["0", "auto", "inherit", "unset", "100%", "0%"],
      r: ["0", "auto", "inherit", "unset", "100%", "0%"],
      b: ["0", "auto", "inherit", "unset", "100%", "0%"],
      o: [
        "0",
        "1",
        "0.5",
        "0.75",
        "0.25",
        "0.6",
        "0.6",
        "auto",
        "inherit",
        "unset",
      ],
      br: [
        "0",
        "1",
        "2",
        "3",
        "5",
        "5",
        "10",
        "20",
        "25",
        "auto",
        "inherit",
        "unset",
      ],
      z: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "99",
        "999",
        "9999",
        "auto",
        "inherit",
        "unset",
      ],
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
}

export default Parser;
