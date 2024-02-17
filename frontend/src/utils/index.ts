import { DateRange, ISales, Item, Sales } from "../types";

export const getTotalStocks = (items: Item[]) => {
  return items.reduce((total, { quantity }) => {
    if (quantity !== undefined) {
      return total + quantity;
    } else {
      return total;
    }
  }, 0);
};

export const getTotalSales = (sales: Sales[]) => {
  return sales.reduce((total, { quantity }) => total + quantity, 0);
};

export const getTotalProfit = (sales: Sales[]) => {
  const totalCostPrice = sales.reduce((total, { item, quantity }) => {
    if (item && item.price !== undefined) {
      return total + quantity * item.price;
    } else {
      return total;
    }
  }, 0);
  const totalSalesPrice = getTotalRevenue(sales);
  const profit = totalSalesPrice - totalCostPrice;
  return profit;
};

export const getTotalRevenue = (sales: ISales[]) => {
  return sales.reduce(
    (total, { salesPrice, quantity }) => total + quantity * salesPrice,
    0
  );
};

export const getTotalRevenueOnAnItem = (sales: Sales) => {
  if (sales.item?.price !== undefined) {
    return sales.quantity * (sales.salesPrice - sales.item?.price);
  } else {
    return 0;
  }
};

export const getTotalExpensesOnInventory = (items: Item[]) => {
  return items.reduce((total, { price }) => {
    if (price !== undefined) {
      return total + price;
    } else {
      return total;
    }
  }, 0);
};

export const getDateInFormatDDMMYY = (createdAt: string) => {
  const date = new Date(createdAt);
  const DD = date.getDate();
  const MM = date.getMonth() + 1;
  const YYYY = date.getFullYear();
  return `${DD}/${MM}/${YYYY}`;
};

export const filterSalesItemByDate = (sales: Sales[], dateRange: DateRange) => {
  if (dateRange.startDate === "" && dateRange.endDate === "") {
    return sales;
  } else {
    return sales.filter((item) => {
      const date = new Date(item.createdAt).toLocaleDateString();
      return (
        date >= new Date(dateRange.startDate).toLocaleDateString() &&
        date <= new Date(dateRange.endDate).toLocaleDateString()
      );
    });
  }
};
