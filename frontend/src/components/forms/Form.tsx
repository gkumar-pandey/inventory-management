import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { Item, ItemFormInitialValue } from "../../types";
import {
  addNewItemService,
  updateItemService,
} from "../../services/itemServices";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { FC } from "react";

interface AddItemsFormProps {
  editItemId: string | null;
}

const AddItemsForm: FC<AddItemsFormProps> = ({ editItemId }) => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.items);
  const editableItemData = items?.find((item) => item._id === editItemId);
  const itemFormInitialValue: ItemFormInitialValue = {
    name: editItemId ? editableItemData?.name : "",
    category: editItemId ? editableItemData?.category : "",
    price: editItemId ? editableItemData?.price : 0,
    quantity: editItemId ? editableItemData?.quantity : 0,
  };
  const categories = [
    "Electronics",
    "Clothing",
    "Sports",
    "Books",
    "Furniture",
  ];
  const handleFormSubmit = async (item: Item) => {
    editItemId
      ? await updateItemService(editItemId,item, dispatch, toast)
      : await addNewItemService(item, dispatch, toast);
  };
  return (
    <Box pb={4}>
      <Formik
        initialValues={itemFormInitialValue}
        onSubmit={async (value, { resetForm }) => {
          await handleFormSubmit(value);
          resetForm({ values: itemFormInitialValue });
        }}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isRequired={true}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Field
                  as={Select}
                  id="category"
                  name="category"
                  placeholder="Select Category"
                >
                  {categories.map((ele, idx) => (
                    <option value={ele} key={idx}>
                      {ele}
                    </option>
                  ))}
                </Field>
                <FormErrorMessage>{errors.category}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="price">Price</FormLabel>
                <Field as={Input} id="price" name="price" type="number" />
                <FormErrorMessage>{errors.price}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="quantity">Quantity</FormLabel>
                <Field as={Input} id="quantity" name="quantity" type="number" />
                <FormErrorMessage>{errors.quantity}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="teal" width="full">
                {editItemId ? "Update" : "Add Item"}
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export { AddItemsForm };
