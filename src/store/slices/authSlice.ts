import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadFromStorage } from "@/utils/storage";

export type UserRole = "customer" | "admin";

export interface UserProfile {
  name: string;
  email: string;
  role: UserRole;
}

export interface RegisteredUser extends UserProfile {
  password?: string;
}

interface AuthState {
  isAuthModalOpen: boolean;
  isLoggedIn: boolean;
  user: UserProfile | null;
  registeredUsers: RegisteredUser[];
}

export const ADMIN_EMAIL = "admin@exynoscooky.com";

const initialState: AuthState = {
  isAuthModalOpen: false,
  isLoggedIn: false,
  user: null,
  registeredUsers: loadFromStorage<RegisteredUser[]>("exynos_users", []),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOpenAuthModal: (state, action: PayloadAction<boolean>) => {
      state.isAuthModalOpen = action.payload;
    },

    // Signal only — saga listens and shows success message
    registerRequest: (_state, _action: PayloadAction<RegisteredUser>) => {},

    registerUser: (state, action: PayloadAction<RegisteredUser>) => {
      state.registeredUsers.push(action.payload);
      localStorage.setItem(
        "exynos_users",
        JSON.stringify(state.registeredUsers),
      );
    },

    // Signal only — saga listens and does the work
    loginRequest: (
      _state,
      _action: PayloadAction<{ email: string; password: string }>,
    ) => {},

    loginUser: (
      state,
      action: PayloadAction<{ name?: string; email: string }>,
    ) => {
      const assignedRole: UserRole =
        action.payload.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()
          ? "admin"
          : "customer";

      state.isLoggedIn = true;
      state.user = {
        name:
          action.payload.name ||
          (assignedRole === "admin" ? "System Administrator" : "Valued Guest"),
        email: action.payload.email,
        role: assignedRole,
      };
      state.isAuthModalOpen = false;
    },

    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const {
  setOpenAuthModal,
  registerRequest,
  registerUser,
  loginRequest,
  loginUser,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;

export const selectRegisteredUsers = (state: { auth: AuthState }) =>
  state.auth.registeredUsers;
