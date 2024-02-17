import { Button } from "@chakra-ui/react";
import { FC } from "react";

import { INavButton } from "../../types";
import { Link } from "react-router-dom";

const NavButton: FC<INavButton> = ({ icon, text, link }) => {
  const isSelected = true;
  return (
    <Link to={link}>
      <Button
        leftIcon={icon}
        width={'full'}
        size={"lg"}
        display={"flex"}
        justifyContent={"flex-start"}
        colorScheme="teal"
        variant={isSelected ? "solid" : "outline"}
      >
        {text}
      </Button>
    </Link>
  );
};

export { NavButton };
