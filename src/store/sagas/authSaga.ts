import { call, put, select, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  loginRequest,
  loginUser,
  setOpenAuthModal,
  selectRegisteredUsers,
  ADMIN_EMAIL,
} from "@/store/slices/authSlice";
import { SECRET_ADMIN_PASS, ADMIN_DISPLAY_NAME } from "@/constants/pricing";

const isAdminEmail = (email: string) =>
  email.toLowerCase() === ADMIN_EMAIL.toLowerCase();

const findRegisteredUser = (
  users: ReturnType<typeof selectRegisteredUsers>,
  email: string,
  password: string,
) =>
  users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() && u.password === password,
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

export function* watchAuth() {
  yield takeLatest(loginRequest.type, handleLogin);
}
