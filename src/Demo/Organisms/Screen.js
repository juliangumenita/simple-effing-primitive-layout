import { Box } from "../../Library/";

const Screen = ({ children }) => {
  return (
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
          <b> John Doe</b>
        </font>
        <font color="#909090" size={3} face="Verdana, Geneva, sans-serif">
          @username
        </font>
      </Box>
    </Box>
  );
};

export default Screen;
