<a href="https://github.com/juliangumenita/simple-effing-primitive-layout"><img alt="simple-effing-primitive-layout" src="https://raw.githubusercontent.com/juliangumenita/simple-effing-primitive-layout/main/src/demo/assets/header.svg"/></a>
<br />

<div align="center"><strong>Simple f*cking primitive layout for React.</strong></div>
<div align="center">Lightweight, customizable and super fast.</div>
<br />
<div align="center">
<a href="https://gumenita.com/">Website</a>
<span> · </span>
<a href="https://github.com/juliangumenita/simple-effing-primitive-layout">Documentation</a>
<span> · </span>
<a href="https://www.instagram.com/juliangumenita/">Instagram</a>
</div>
<br />
<div align="center">
  <sub>Made by <a href="https://gumenita.com/">Julian Gumenita</a>‍</sub>
</div>
<br />

# Features

# Getting started

```bash
# via yarn
yarn add simple-effing-primitive-layout

# via npm
npm install --save simple-effing-primitive-layout
```

# Usage

```jsx
import { Box } from "simple-effing-primitive-layout";

ReactDOM.render(
  <Box
    width="100%"
    height="100%"
    display="flex"
    align="center"
    justify="center"
  >
    <Box
      padding={20}
      width={200}
      border="1px solid #DDDDDD"
      display="inline-flex"
      direction="column"
    >
      <font
        color="#505050"
        size={4}
        face="Verdana, Geneva, sans-serif"
        weight="600"
      >
        <b>John Doe</b>
      </font>
      <font color="#909090" size={3} face="Verdana, Geneva, sans-serif">
        @username
      </font>
    </Box>
  </Box>,
  document.getElementById("root")
);
```

# Parser

```jsx
import { Box } from "simple-effing-primitive-layout";

ReactDOM.render(
  <Box parse="w:100% h:100% d:flex a:center j:center">
    <Box
      parse="pa:20 br:10 d:inline-flex fd:column mw:200"
      border="1px solid #DDDDDD"
    >
      <font
        color="#505050"
        size={4}
        face="Verdana, Geneva, sans-serif"
        weight="600"
      >
        <b>John Doe</b>
      </font>
      <font color="#909090" size={3} face="Verdana, Geneva, sans-serif">
        @username
      </font>
    </Box>
  </Box>,
  document.getElementById("root")
);
```
