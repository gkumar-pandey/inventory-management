import axios from "axios";
import { ISales } from "../types";
const url = "http://localhost:5000/api/v1";


export const addNewSaleService = async (salesData: ISales) => {
  try {
    const res = await axios.post(`${url}/sales`, { ...salesData });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
