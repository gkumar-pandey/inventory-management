import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import AddSalesForm from "../components/forms/AddSalesForm";
import SalesData from "../components/ItemsData/salesData";
import { useEffect, useState } from "react";
import { fetchSales } from "../store/features";
import Loader from "../components/loader/Loader";
import DatePickerRange from "../components/datePicker/DatePIckerRange";
import { filterSalesItemByDate } from "../utils";

const Sales = () => {
  const [filterDateRange, setFilterDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const dispatch = useAppDispatch();
  const { sales, isLoading } = useAppSelector((state) => state.sales);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  const filteredSalesData = filterSalesItemByDate(sales, filterDateRange);

  return (
    <Box width={"full"} p={5}>
      <Container maxW={"container.xl"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Heading>Sales</Heading>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Button
              onClick={onOpen}
              leftIcon={<AddIcon />}
              colorScheme="teal"
              variant="solid"
            >
              Sales
            </Button>
            <DatePickerRange
              filterDateRange={filterDateRange}
              setFilterDateRange={setFilterDateRange}
            />
          </Box>
        </Box>
        <Box>
          {isLoading ? <Loader /> : <SalesData sales={filteredSalesData} />}
        </Box>
      </Container>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Sale</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddSalesForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Sales;
