import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { COOKIE_MOCK_DATA, type Cookie } from "../../utils/mockData";
import { loadFromStorage } from "../../utils/storage";
interface InventoryState {
  items: Cookie[];
}

const initialState: InventoryState = {
  items: loadFromStorage<Cookie[]>("exynos_inventory", COOKIE_MOCK_DATA),
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    // This action handles toggling availability across the entire app
    toggleItemAvailability: (
      state,
      action: PayloadAction<{ id: number; isAvailable: boolean }>,
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.isAvailable = action.payload.isAvailable;
        localStorage.setItem("exynos_inventory", JSON.stringify(state.items));
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("exynos_inventory", JSON.stringify(state.items));
    },
  },
});

export const { toggleItemAvailability, deleteItem } = inventorySlice.actions;
export default inventorySlice.reducer;
