import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";

function Search() {
  return (
    <Stack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search..." />
      </InputGroup>
    </Stack>
  );
}

export default Search;
