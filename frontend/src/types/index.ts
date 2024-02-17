export interface INavButton {
  text: string;
  icon: any;
  link: string;
}

export interface Item {
  _id?: string;
  name?: string;
  category?: string;
  price?: number;
  quantity?: number;
}

// Sales Type
export interface ISales {
  _id?: string;
  item?: Item | string;
  quantity: number;
  salesPrice: number;
}

// Store
export interface ItemsState {
  items: Item[];
  isLoading: boolean;
  error: string;
}

export interface InitialSalesState {
  sales: Sales[];
  isLoading: boolean;
  error: string;
}

export interface ItemFormInitialValue {
  name?: string | undefined;
  category?: string;
  price?: number;
  quantity?: number;
}

export interface Sales {
  _id: string;
  item?: {
    _id: string;
    name?: string;
    quantity?: number;
    price: number;
    category?: string;
  };
  salesPrice: number;
  quantity: number;
  createdAt: string;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}
