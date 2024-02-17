import { Avatar, Box,  Flex } from "@chakra-ui/react";
import Search from "../search/Search";

const Header = () => {
  return (
    <Box boxShadow={"md"} p={2}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Search />
        </Box>
        <Box>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
