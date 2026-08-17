import type { Cookie } from "./mockData";
import type { MessageInstance } from "antd/es/message/interface";
import type { AppDispatch } from "../store";
import { addCookieToBox } from "../store/slices/cartSlice";

const NEXT_SIZE: Record<number, number | null> = { 4: 6, 6: 12, 12: null };

export function addCookieWithFeedback(
  cookie: Cookie,
  cartLength: number,
  boxSize: number,
  dispatch: AppDispatch,
  messageApi: MessageInstance,
) {
  const willUpgrade = cartLength >= boxSize && NEXT_SIZE[boxSize] !== null;
  const isFull = cartLength >= boxSize && NEXT_SIZE[boxSize] === null;

  if (isFull) {
    messageApi.error("Your 12-Pack is full! Please checkout first.");
    return;
  }

  dispatch(addCookieToBox(cookie));

  if (willUpgrade) {
    messageApi.info(
      `Box upgraded to ${NEXT_SIZE[boxSize]}-Pack to fit your cookie! 🍪`,
    );
  } else {
    messageApi.success(`Added ${cookie.name} to your box! 🍪`);
  }
}
