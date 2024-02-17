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
import { FC } from "react";
import { Item, Sales } from "../../types";
import { useAppSelector } from "../../store/hook";
import {
  getTotalExpensesOnInventory,
  getTotalRevenue,
  getTotalRevenueOnAnItem,
  getTotalSales,
  getTotalStocks,
} from "../../utils";

interface ReportDataTableProps {
  generateReport: string;
}

interface TableBodyDataProps {
  data: Item[] | Sales[];
  generateReport: string;
}

interface ReportData {
  key: string;
  value: number;
}

interface ReportTableProps {
  generateReport: string;
  reportData: ReportData[];
}

const TableBodyData: FC<TableBodyDataProps> = ({ data, generateReport }) => {
  if (generateReport === "inventory") {
    return (
      <Tbody>
        {data?.map((ele, idx) => (
          <Tr>
            <Td>{idx + 1}</Td>
            <Td>{"name" in ele && ele.name}</Td>
            <Td>{"price" in ele && ele?.price}</Td>
            <Td>{"quantity" in ele && ele?.quantity}</Td>
            <Td>{"category" in ele && ele?.category}</Td>
          </Tr>
        ))}
      </Tbody>
    );
  } else if (generateReport === "sales") {
    return (
      <Tbody>
        {data.map((ele: any, idx) => {
          const { item } = ele;
          return (
            <Tr key={ele?._id}>
              <Td>{idx + 1}</Td>
              <Td>{item.name}</Td>
              <Td>{"salesPrice" in ele && ele?.salesPrice}</Td>
              <Td>{ele?.quantity}</Td>
              <Td>{getTotalRevenueOnAnItem(ele)}</Td>
            </Tr>
          );
        })}
      </Tbody>
    );
  }
};

const ReportTable: FC<ReportTableProps> = ({ generateReport, reportData }) => {
  if (generateReport === "inventory") {
    return reportData?.map((ele, idx) => (
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        key={idx}
        display={"flex"}
        gap={5}
      >
        <Text as={"b"}>{ele.key}</Text>
        <Text as={"b"}>{ele.value}</Text>
      </Box>
    ));
  } else if (generateReport === "sales") {
    return reportData?.map((ele, idx) => (
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        key={idx}
        display={"flex"}
        gap={5}
      >
        <Text as={"b"}>{ele.key}</Text>
        <Text as={"b"}>{ele.value}</Text>
      </Box>
    ));
  }
};

const ReportDataTable: FC<ReportDataTableProps> = ({ generateReport }) => {
  let tableHead: string[] = [];
  let data: Item[] | Sales[] = [];
  let reportData: ReportData[] = [];
  const { items, sales } = useAppSelector((state) => state);
  const inventoryTableHead: string[] = [
    "SI NO.",
    "Name",
    "Cost Price",
    "Quantity",
    "Category",
  ];
  const inventoryReport = [
    { key: "Total Stocks in Inventory.", value: getTotalStocks(items.items) },
    {
      key: "Total Stocks Expenses.",
      value: getTotalExpensesOnInventory(items.items),
    },
  ];
  const salesReport = [
    { key: "Total stocks sales", value: getTotalSales(sales.sales) },
    { key: "Total Revenue", value: getTotalRevenue(sales.sales) },
  ];
  const salesTableHead: string[] = [
    "SI NO",
    "Name",
    " Sales Price",
    "Quantity",
    "Revenue",
  ];
  if (generateReport === "inventory") {
    tableHead = inventoryTableHead;
    data = items.items;
    reportData = inventoryReport;
  } else if (generateReport === "sales") {
    tableHead = salesTableHead;
    data = sales.sales;
    reportData = salesReport;
  }

  return (
    <Box>
      <Box
        p={2}
        width={"fit-content"}
        display={"flex"}
        flexDirection={"column"}
        border={"1px solid #999"}
        borderRadius={5}
      >
        <ReportTable generateReport={generateReport} reportData={reportData} />
      </Box>
      <TableContainer
        borderRadius={"md"}
        my={3}
        boxShadow={"xs"}
        border={"1px solid #eee"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              {tableHead.map((ele, idx) => (
                <Td key={idx}>
                  <Text as={"b"}>{ele}</Text>
                </Td>
              ))}
            </Tr>
          </Thead>
          <TableBodyData data={data} generateReport={generateReport} />
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ReportDataTable;
