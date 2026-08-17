import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadFromStorage } from "../../utils/storage";

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  boxSize: string;
  contents: string;
  totalPrice: number;
  status: "Pending" | "Baking" | "Dispatched" | "Delivered";
  timestamp: string;
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: loadFromStorage<Order[]>("exynos_orders", []),
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeNewOrder: (state, action: PayloadAction<Order>) => {
      state.orders.unshift(action.payload);
      localStorage.setItem("exynos_orders", JSON.stringify(state.orders));
    },
    updateOrderStatus: (
      state,
      action: PayloadAction<{ id: string; status: Order["status"] }>,
    ) => {
      const order = state.orders.find((order) => order.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
        localStorage.setItem("exynos_orders", JSON.stringify(state.orders));
      }
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload,
      );
      localStorage.setItem("exynos_orders", JSON.stringify(state.orders));
    },
  },
});

export const { placeNewOrder, updateOrderStatus, deleteOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
