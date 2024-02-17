import {
  Box,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { Item } from "../../types";
import { FC } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteItemService } from "../../services/itemServices";
import { useAppDispatch } from "../../store/hook";

interface ItemsdataProps {
  items: Item[];
  onOpen: any;
  setEditItemId: any;
}

export const ItemsData: FC<ItemsdataProps> = ({
  items,
  onOpen,
  setEditItemId,
}) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const deleteBtnHandler = async (item: Item) => {
    await deleteItemService(item, dispatch, toast);
  };

  const tableHeadTitle: string[] = [
    "SI No.",
    "Name",
    "Cost Price",
    "Category",
    "Quantity",
    "Action",
  ];

  return (
    <Box>
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
            {items.map((ele, idx) => (
              <Tr
                _hover={{ backgroundColor: "#eee", cursor: "pointer" }}
                key={ele._id}
              >
                <Td>{idx + 1}</Td>
                <Td>{ele.name}</Td>
                <Td>{ele.price}</Td>
                <Td>{ele.category}</Td>
                <Td>{ele.quantity}</Td>
                <Td display={"flex"} gap={3}>
                  <IconButton
                    aria-label="Delete Item data"
                    icon={<DeleteIcon />}
                    color={"red"}
                    onClick={() => deleteBtnHandler(ele)}
                  />
                  <IconButton
                    color={"green"}
                    aria-label="Edit item data"
                    icon={<EditIcon />}
                    onClick={() => {
                      setEditItemId(ele?._id);
                      onOpen();
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
