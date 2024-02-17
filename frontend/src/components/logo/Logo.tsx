import { Box, Heading, Image } from "@chakra-ui/react";
import logoImg from "../../assets/inventory.png";

const Logo = () => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box boxSize={"50px"}>
          <Image
            objectFit={"cover"}
            width={"100%"}
            height={"100%"}
            src={logoImg}
          />
        </Box>
        <Heading>Inventory</Heading>
      </Box>
    </>
  );
};

export default Logo;
