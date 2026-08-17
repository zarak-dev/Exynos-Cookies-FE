import React from "react";
import { Divider, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  OrderSummarySticky,
  SummaryRow,
  TotalRow,
  TotalText,
  SubmitButton,
} from "../styles";
import type { GroupedCartItem } from "../../../../utils/cartUtils";

const { Text } = Typography;

interface OrderSummaryProps {
  groupedCartItems: GroupedCartItem[];
  boxSize: number | string;
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  groupedCartItems,
  boxSize,
  subtotal,
  deliveryFee,
  totalAmount,
}) => (
  <OrderSummarySticky
    title={
      <>
        <ShoppingCartOutlined /> Order Summary
      </>
    }
    variant="borderless"
  >
    {groupedCartItems.map((item) => (
      <SummaryRow key={item.name} justify="space-between">
        <Text type="secondary">
          {item.quantity}x <Text strong>{item.name}</Text>
        </Text>
        <Text type="secondary">Rs. {item.totalPrice}</Text>
      </SummaryRow>
    ))}

    <Divider />

    <SummaryRow justify="space-between">
      <Text>Box Size:</Text>
      <Text strong>{boxSize}-Pack</Text>
    </SummaryRow>
    <SummaryRow justify="space-between">
      <Text>Subtotal:</Text>
      <Text strong>Rs. {subtotal}</Text>
    </SummaryRow>
    <SummaryRow justify="space-between">
      <Text>Delivery:</Text>
      <Text>Rs. {deliveryFee}</Text>
    </SummaryRow>

    <Divider />

    <TotalRow justify="space-between" align="center">
      <TotalText level={4}>Total:</TotalText>
      <TotalText level={4}>Rs. {totalAmount}</TotalText>
    </TotalRow>

    <SubmitButton type="primary" htmlType="submit" block size="large">
      Place Order — Rs. {totalAmount}
    </SubmitButton>
  </OrderSummarySticky>
);
