import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserHistoryRow {
  index: number;
  uuid: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
  thumbnail: string;
}

interface UserHistoryState {
  users: UserHistoryRow[];
  loading: boolean;
  error: string | null;
}

const initialState: UserHistoryState = {
  users: [],
  loading: false,
  error: null,
};

const userHistorySlice = createSlice({
  name: "userHistory",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<UserHistoryRow[]>) {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    addUser(state, action: PayloadAction<UserHistoryRow>) {
      state.users = [action.payload, ...state.users];
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.uuid !== action.payload);
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  deleteUser,
} = userHistorySlice.actions;

export default userHistorySlice.reducer;
