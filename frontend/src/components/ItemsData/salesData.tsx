import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Sales } from "../../types";
import { FC } from "react";
import { getDateInFormatDDMMYY, getTotalRevenueOnAnItem } from "../../utils";

interface SalesDataProps {
  sales: Sales[];
}

export const SalesData: FC<SalesDataProps> = ({ sales }) => {
  const tableHeadTitle: string[] = [
    "SI NO.",
    "Name",
    "Cost Price",
    "Sales Price",
    "Category",
    "Quantity",
    "Revenue",
    "Date",
  ];
  return (
    <Box my={4}>
      <TableContainer
        borderRadius={"md"}
        boxShadow={"xs"}
        border={"1px solid #eee"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              {tableHeadTitle.map((ele, idx) => (
                <Td key={idx}>
                  <Text as={"b"}>{ele}</Text>
                </Td>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {sales.map((ele, idx) => (
              <Tr
                _hover={{ backgroundColor: "#eee", cursor: "pointer" }}
                key={ele._id}
              >
                <Td>{idx + 1}</Td>
                <Td>{ele?.item?.name}</Td>
                <Td>{ele?.item?.price}</Td>
                <Td>{ele?.salesPrice}</Td>
                <Td>{ele?.item?.category}</Td>
                <Td>{ele.quantity}</Td>
                <Td>{getTotalRevenueOnAnItem(ele)}</Td>
                <Td>{getDateInFormatDDMMYY(ele?.createdAt)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SalesData;
