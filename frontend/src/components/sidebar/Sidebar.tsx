import { Box } from "@chakra-ui/react";
import Logo from "../logo/Logo";
import SideBarLinks from "../sidebarlinks/SideBarLinks";

const Sidebar = () => {
  return (
    <>
      <Box
        p={4}
        display="flex"
        gap={10}
        height={"full"}
        flexDirection={"column"}
        justifyContent={"start"}
      >
        <Logo />
        <SideBarLinks />
      </Box>
    </>
  );
};

export default Sidebar;
