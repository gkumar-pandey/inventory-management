import { Box, Container, Spinner, Text } from "@chakra-ui/react";

const Loader = () => {
  return (
    <>
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Spinner size={"md"} />
          <Text>Loading..</Text>
        </Box>
      </Container>
    </>
  );
};

export default Loader;
