import React from "react";
import { Col, Form, Input, Radio, Row, Tooltip } from "antd";
import { CarOutlined, CreditCardOutlined } from "@ant-design/icons";
import { OrderSummary } from "./components/OrderSummary";
import { OrderConfirmed } from "./components/OrderConfirmed";
import { EmptyCart } from "./components/EmptyCart";
import { useCheckout } from "./components/useCheckout";
import { type FormValues } from "./types";
import { deleteOrder } from "../../../store/slices/orderSlice";
import {
  CheckoutContainer,
  FullWidthRadioGroup,
  PaymentLabel,
  PaymentMethodCard,
  SectionTitle,
  StyledCard,
} from "./styles";
import { useDispatch } from "react-redux";

export const CheckoutPage: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const dispatch = useDispatch();
  const {
    contextHolder,
    confirmedOrderId,
    isOrdered,
    confirmedOrder,
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
  } = useCheckout();

  if (isOrdered && confirmedOrderId && confirmedOrder) {
    return (
      <>
        {contextHolder}
        <OrderConfirmed
          orderId={confirmedOrderId}
          order={confirmedOrder}
          onBackToShop={() => navigate("/")}
          onDelete={() => {
            dispatch(deleteOrder(confirmedOrderId));
            navigate("/");
          }}
        />
      </>
    );
  }

  if (cartItems.length === 0) {
    return (
      <>
        {contextHolder}
        <EmptyCart onFillBox={() => navigate("/")} />
      </>
    );
  }

  return (
    <CheckoutContainer>
      {contextHolder}
      <SectionTitle level={2}>Delivery & Checkout</SectionTitle>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={14}>
            <StyledCard title="1. Delivery Address" variant="borderless">
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                      { required: true, message: "Required" },
                      { pattern: /^[a-zA-Z\s]+$/, message: "Letters only" },
                    ]}
                  >
                    <Input size="large" placeholder="First Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                      { required: true, message: "Required" },
                      { pattern: /^[a-zA-Z\s]+$/, message: "Letters only" },
                    ]}
                  >
                    <Input size="large" placeholder="Last Name" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: "Required" },
                      { type: "email", message: "Invalid email" },
                    ]}
                  >
                    <Input size="large" placeholder="you@example.com" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[
                      { required: true, message: "Required" },
                      { pattern: /^[0-9]+$/, message: "Numbers only" },
                      { min: 10, message: "Too short" },
                    ]}
                  >
                    <Input size="large" placeholder="03001234567" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="address"
                label="Street Address"
                rules={[{ required: true, message: "Address required" }]}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="Apartment, area, street…"
                />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="city"
                    label="City"
                    rules={[{ required: true, message: "Required" }]}
                    initialValue="Islamabad"
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item name="zipCode" label="Postal Code">
                    <Input size="large" placeholder="44000" />
                  </Form.Item>
                </Col>
              </Row>
            </StyledCard>

            <StyledCard title="2. Payment Method" variant="borderless">
              <FullWidthRadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <PaymentMethodCard
                      hoverable
                      $isActive={paymentMethod === "cod"}
                    >
                      <Radio value="cod">
                        <PaymentLabel strong>
                          <CarOutlined /> Cash on Delivery
                        </PaymentLabel>
                      </Radio>
                    </PaymentMethodCard>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Tooltip title="This payment method is currently unavailable">
                      <PaymentMethodCard hoverable={false} $isActive={false}>
                        <Radio value="card" disabled>
                          <PaymentLabel disabled strong>
                            <CreditCardOutlined /> Card Payment
                          </PaymentLabel>
                        </Radio>
                      </PaymentMethodCard>
                    </Tooltip>
                  </Col>
                </Row>
              </FullWidthRadioGroup>
            </StyledCard>
          </Col>

          <Col xs={24} lg={10}>
            <OrderSummary
              groupedCartItems={groupedCartItems}
              boxSize={boxSize}
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              totalAmount={totalAmount}
            />
          </Col>
        </Row>
      </Form>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
