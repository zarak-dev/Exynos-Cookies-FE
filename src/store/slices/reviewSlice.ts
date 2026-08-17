import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ReviewUser {
  name: string;
  avatar: string;
  email: string;
}
interface ReviewState {
  users: ReviewUser[];
  loading: boolean;
}

const initialState: ReviewState = {
  users: [],
  loading: false,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    fetchReviewUsers(state) {
      state.loading = true;
    },
    fetchReviewUsersSuccess(state, action: PayloadAction<ReviewUser[]>) {
      state.users = action.payload;
      state.loading = false;
    },
    fetchReviewUsersFailure(state) {
      state.loading = false;
    },
  },
});

export const { fetchReviewUsers, fetchReviewUsersSuccess, fetchReviewUsersFailure } =
  reviewSlice.actions;

export default reviewSlice.reducer;