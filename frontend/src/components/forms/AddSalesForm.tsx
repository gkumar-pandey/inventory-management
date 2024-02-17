import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { useAppSelector } from "../../store/hook";
import { ISales } from "../../types";
import { addNewSaleService } from "../../services/salesServices";

const AddSalesForm = () => {
  const initialFormValues: ISales = {
    item: "",
    salesPrice: 0,
    quantity: 0,
  };
  const { items } = useAppSelector((state) => state.items);
  const onSubmitHandler = async (value: ISales) => {
    await addNewSaleService(value);
  };
  return (
    <Box pb={5}>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(value: ISales) => {
          onSubmitHandler(value);
        }}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isRequired={true}>
                <FormLabel htmlFor="item">Item</FormLabel>
                <Field
                  as={Select}
                  id="item"
                  name="item"
                  placeholder="Select Item"
                >
                  {items.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </Field>
                <FormErrorMessage>{errors.item}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="salesPrice">Sales Price</FormLabel>
                <Field
                  as={Input}
                  id="salesPrice"
                  name="salesPrice"
                  type="number"
                />
                <FormErrorMessage>{errors.salesPrice}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="quantity">Quantity</FormLabel>
                <Field as={Input} id="quantity" name="quantity" type="number" />
                <FormErrorMessage>{errors.quantity}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="teal" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddSalesForm;
