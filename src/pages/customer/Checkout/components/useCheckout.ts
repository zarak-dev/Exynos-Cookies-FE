import { useState } from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type RootState } from "../../../../store";
import { DELIVERY_FEE } from "../../../../constants/pricing";
import { clearBox } from "../../../../store/slices/cartSlice";
import { placeNewOrder, type Order } from "../../../../store/slices/orderSlice";
import {
  groupCartItems,
  buildContentsString,
} from "../../../../utils/cartUtils";
import type { FormValues, PaymentMethod } from "../types";

function generateOrderId(): string {
  return `EXY-${Math.floor(10000 + Math.random() * 90000)}`;
}

export function useCheckout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");
  const user = useSelector((state: RootState) => state.auth.user);
  const { items: cartItems, boxSize } = useSelector(
    (state: RootState) => state.cart,
  );

 const groupedCartItems = groupCartItems(cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0),
    0,
  );

  const deliveryFee = cartItems.length > 0 ? DELIVERY_FEE : 0;
  const totalAmount = subtotal + deliveryFee;

  function handleSubmit(values: FormValues) {
    const orderId = generateOrderId();

    const order: Order = {
      id: orderId,
      customerName: `${values.firstName} ${values.lastName}`,
      customerEmail: values.email || user?.email || "",
      boxSize: `${boxSize}-Pack Custom Box`,
      contents: buildContentsString(groupedCartItems),
      totalPrice: totalAmount,
      status: "Pending",
      timestamp: new Date().toISOString(),
    };

    dispatch(placeNewOrder(order));
    dispatch(clearBox());
    setConfirmedOrderId(orderId);
    setConfirmedOrder(order);
    messageApi.success("Order dispatched successfully! 🍪");
  }
  return {
    contextHolder,
    confirmedOrderId,
    confirmedOrder,
    isOrdered: confirmedOrderId !== null,
    paymentMethod,
    setPaymentMethod,
    cartItems,
    groupedCartItems,
    boxSize,
    subtotal,
    deliveryFee,
    totalAmount,
    handleSubmit,
    navigate,
  };
}
