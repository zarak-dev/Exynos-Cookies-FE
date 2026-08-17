import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  type UserHistoryRow,
} from "../slices/userHistorySlice";

interface RandomUser {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  phone: string;
  gender: string;
  location: { country: string };
  picture: { thumbnail: string };
}

const fetchUsersApi = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?results=100&seed=exynos",
  );
  if (!response.ok) throw new Error("Failed to fetch user history");
  return response.json();
};

function* handleFetchUsers(): Generator<
  unknown,
  void,
  { results: RandomUser[] }
> {
  try {
    const data = yield call(fetchUsersApi);

    const formattedUsers: UserHistoryRow[] = data.results.map(
      (user: RandomUser, index: number) => ({
        index: index + 1,
        uuid: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        country: user.location.country,
        thumbnail: user.picture.thumbnail,
      }),
    );

    yield put(fetchUsersSuccess(formattedUsers));
  } catch (error) {
    yield put(fetchUsersFailure((error as Error).message));
  }
}

export function* watchUserHistory() {
  yield takeLatest(fetchUsersStart.type, handleFetchUsers);
}
