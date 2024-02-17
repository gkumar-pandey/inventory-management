import axios from "axios";
import { Item } from "../types";
import {
  addNewItem,
  removeItem,
  updateItem,
} from "../store/features/items/itemSlice";
const url = "http://localhost:5000/api/v1";

export const addNewItemService = async (
  itemData: Item,
  dispatch: any,
  toast: any
) => {
  try {
    const { data } = await axios.post(`${url}/items`, { ...itemData });
    dispatch(addNewItem(data.item));
    toast({
      status: "success",
      description: "Item added to inventory successfully.",
      position: "top",
      duration: 2000,
    });
  } catch (error: any) {
    console.error(error);
    toast({
      status: "error",
      description: error?.message,
      position: "top",
      duration: 2000,
    });
  }
};

export const deleteItemService = async (
  itemData: Item,
  dispatch: any,
  toast: any
) => {
  try {
    const res = await axios.delete(`${url}/items/${itemData._id}`);
    if (res.status === 200) {
      dispatch(removeItem(itemData));
      toast({
        status: "success",
        description: "Item deleted successfully.",
        duration: 2000,
        position: "top",
      });
    }
  } catch (error: any) {
    console.error(error);
    toast({
      status: "error",
      description: error.message,
      duration: 3000,
      position: "top",
    });
  }
};

export const updateItemService = async (
  updateItemId: string,
  updatedItemData: Item,
  dispatch: any,
  toast: any
) => {
  try {
    const res = await axios.post(`${url}/items/${updateItemId}`, {
      ...updatedItemData,
    });

    if (res.status === 200) {
      dispatch(updateItem(res?.data?.item));
      toast({
        status: "success",
        description: "Item updated.",
        duration: 3000,
        position: "top",
      });
    }
  } catch (error: any) {
    console.log(error);
    toast({
      status: "error",
      description: error?.message,
      duration: 3000,
      postion: "top",
    });
  }
};
