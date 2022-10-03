# simple-effing-primitive-layout
Simple f*cking primitive layout for React.

# Getting started

```bash
# via yarn
yarn add simple-effing-primitive-layout

# via npm
npm install --save simple-effing-primitive-layout
```

# Usage
```jsx
import { Box } from 'simple-effing-primitive-layout'

ReactDOM.render(
  <Box width="100%" height="100%" display="flex" align="center" justify="center">
    <Box padding={20} width={200} border="1px solid #DDDDDD" display="inline-flex" direction="column">
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
  document.getElementById('root')
)
```

# Parser
```jsx
import { Box } from 'simple-effing-primitive-layout'

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
  document.getElementById('root')
)
```
