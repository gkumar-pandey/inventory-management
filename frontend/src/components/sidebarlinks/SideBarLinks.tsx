import { Box } from "@chakra-ui/react";
import {
  MdOutlineDashboard,
  MdOutlineInventory,
  MdAnalytics,
  MdShoppingCart,
} from "react-icons/md";

import { NavButton } from "../buttons/Buttons";
const SideBarLinks = () => {
  const sideBarLinks = [
    { icon: <MdOutlineDashboard />, text: "Dashboard", link: "/" },
    { icon: <MdOutlineInventory />, text: "Inventory", link: "/inventory" },
    { icon: <MdShoppingCart />, text: "Sales", link: "sales" },
    { icon: <MdAnalytics />, text: "Analytics", link: "analytics" },
  ];
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={5}>
        {sideBarLinks.map((ele, idx) => (
          <NavButton {...ele} key={idx} />
        ))}
      </Box>
    </>
  );
};

export default SideBarLinks;
