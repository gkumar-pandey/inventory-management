import { Box, Button, Text } from "@chakra-ui/react";
import { FC } from "react";

interface DatePickerProps {
  filterDateRange: {
    startDate: string;
    endDate: string;
  };
  setFilterDateRange: any;
}
const DatePickerRange: FC<DatePickerProps> = ({
  filterDateRange,
  setFilterDateRange,
}) => {
  const onChangeHandler = (e: any) => {
    setFilterDateRange((pre: any) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const resetFilterRange = () => {
    setFilterDateRange(() => ({ startDate: "", endDate: "" }));
  };
  return (
    <>
      <Box
        p={1}
        borderRadius={4}
        display={"flex"}
        gap={2}
        border={"1px solid #999"}
        boxShadow={"md"}
      >
        <Box border={"1px solid #eee"}>
          <input
            value={filterDateRange.startDate}
            type="date"
            name="startDate"
            onChange={onChangeHandler}
          />
        </Box>
        <Text fontSize={"md"} as={"b"}>
          To
        </Text>
        <Box border={"1px solid #eee"}>
          <input
            value={filterDateRange.endDate}
            type="date"
            name="endDate"
            onChange={onChangeHandler}
          />
        </Box>
      </Box>
      <Button onClick={resetFilterRange} colorScheme="yellow">
        Clear
      </Button>
    </>
  );
};

export default DatePickerRange;
