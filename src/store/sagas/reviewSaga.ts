import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchReviewUsers,
  fetchReviewUsersSuccess,
  fetchReviewUsersFailure,
} from "../slices/reviewSlice";

function* handleFetchReviewUsers(): Generator {
  try {
    const response: Response = yield call(
      fetch,
      "https://randomuser.me/api/?results=20&inc=name,picture,email&nat=us",
    );
    const data: any = yield call([response, response.json]);
    const users = data.results.map((u: any) => ({
      name: `${u.name.first} ${u.name.last}`,
      avatar: u.picture.thumbnail,
      email: u.email,
    }));
    yield put(fetchReviewUsersSuccess(users));
  } catch {
    yield put(fetchReviewUsersFailure());
  }
}

export function* reviewSaga() {
  yield takeLatest(fetchReviewUsers.type, handleFetchReviewUsers);
}
