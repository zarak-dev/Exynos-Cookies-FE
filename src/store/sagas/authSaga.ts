import { call, put, select, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  loginRequest,
  loginUser,
  registerRequest,
  registerUser,
  setOpenAuthModal,
  selectRegisteredUsers,
  ADMIN_EMAIL,
} from "@/store/slices/authSlice";
import { SECRET_ADMIN_PASS, ADMIN_DISPLAY_NAME } from "@/constants/pricing";
import type { RegisteredUser } from "@/store/slices/authSlice";

const normalizeEmail = (email: string) => email.toLowerCase();

const isAdminEmail = (email: string) =>
  normalizeEmail(email) === normalizeEmail(ADMIN_EMAIL);

const findRegisteredUser = (
  users: ReturnType<typeof selectRegisteredUsers>,
  email: string,
  password: string,
) =>
  users.find(
    (u) =>
      normalizeEmail(u.email) === normalizeEmail(email) &&
      u.password === password,
  );

function* handleLogin(
  action: PayloadAction<{ email: string; password: string }>,
): Generator {
  const { email, password } = action.payload;
  const trimmedEmail = email.trim();

  if (isAdminEmail(trimmedEmail)) {
    if (password !== SECRET_ADMIN_PASS) {
      yield call([message, message.error], "Invalid admin password");
      return;
    }

    yield put(loginUser({ name: ADMIN_DISPLAY_NAME, email: trimmedEmail }));
    yield put(setOpenAuthModal(false));
    yield call([message, message.success], "Logged in");
    return;
  }

  const users: any = yield select(selectRegisteredUsers);
  const matchedUser = findRegisteredUser(users, trimmedEmail, password);

  if (!matchedUser) {
    yield call([message, message.error], "Invalid email or password");
    return;
  }

  yield put(loginUser(matchedUser));
  yield put(setOpenAuthModal(false));
  yield call([message, message.success], `Welcome back, ${matchedUser.name}!`);
}

function* handleRegister(action: PayloadAction<RegisteredUser>): Generator {
  yield put(registerUser(action.payload));
  yield put(setOpenAuthModal(false));
  yield call([message, message.success], "Account created");
}

export function* watchAuth() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(registerRequest.type, handleRegister);
}
