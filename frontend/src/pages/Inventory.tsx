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
import { ItemsData } from "../components/ItemsData/ItemsData";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect, useState } from "react";
import { fetchItems } from "../store/features";
import { AddItemsForm } from "../components/forms/Form";
import Loader from "../components/loader/Loader";

const Inventory = () => {
  const dispatch = useAppDispatch();
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { items } = useAppSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  return (
    <>
      <Box width={"full"} p={5}>
        <Container maxW={"container.xl"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            py={4}
          >
            <Heading>Items</Heading>
            <Button
              onClick={onOpen}
              leftIcon={<AddIcon />}
              colorScheme="teal"
              variant="solid"
            >
              New Item
            </Button>
          </Box>
          <Box>
            {items.length === 0 ? (
              <Loader />
            ) : (
              <ItemsData
                setEditItemId={setEditItemId}
                onOpen={onOpen}
                items={items}
              />
            )}
          </Box>
        </Container>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {editItemId ? "Edit Item" : "Add New Item"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddItemsForm editItemId={editItemId} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Inventory;
