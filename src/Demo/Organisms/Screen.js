import { Box, Text } from "../../Library/";

const Screen = ({ children }) => {
  return (
    <Box parse="w:100% h:100% d:flex a:center j:center">
      <Box
        parse="pa:20 br:10 d:inline-flex fd:column mw:200"
        border="1px solid #DDDDDD"
      >
        <Text color="#505050" size={16} weight="600">
          John Doe
        </Text>
        <Text color="#909090" size={14} weight="500">
          @username
        </Text>
      </Box>
    </Box>
  );
};

export default Screen;
