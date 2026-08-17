import { useSelector, useDispatch } from "react-redux";
import { getCartColumns } from "./components/cartTableColumns";
import {
  Table,
  Button,
  Row,
  Col,
  Empty,
  message,
  Radio,
  Typography,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { type RootState } from "../../../store";
import {
  removeCookieFromBox,
  setBoxSize,
  addCookieToBox,
} from "../../../store/slices/cartSlice";
import { groupCartItems, type GroupedCartItem } from "../../../utils/cartUtils";
import {
  CartContainer,
  EmptyCartContainer,
  StyledRadioGroup,
  SummaryRow,
  TotalRow,
  RadioGroupWrapper,
  BoxCapacityText,
  SpacedDivider,
} from "./styles";
import { StyledTitle } from "../../../components/StyledTitle";
import { StyledCard } from "../../../components/StyledCard";
import { DELIVERY_FEE } from "../../../constants/pricing";

const { Text } = Typography;

export const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inventory = useSelector((state: RootState) => state.inventory.items);
  const { boxSize, items: cartItems } = useSelector(
    (state: RootState) => state.cart,
  );

  const groupedCartItems = groupCartItems(cartItems);

  const subtotal = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  const deliveryFee = subtotal > 0 ? DELIVERY_FEE : 0;
  const totalAmount = subtotal + deliveryFee;

  const removeCookie = (record: GroupedCartItem, showMessage = false) => {
    const lastIndex = [...cartItems]
      .map((item) => item.name)
      .lastIndexOf(record.name);
    dispatch(removeCookieFromBox(lastIndex));

    if (showMessage) {
      message.success(`One "${record.name}" removed from cart.`);
    }
  };

  const addCookie = (record: GroupedCartItem) => {
    if (cartItems.length >= boxSize) {
      message.warning(`Your ${boxSize}-Pack is already full!`);
      return;
    }

    const originalCookie = inventory.find((c) => c.id === record.id);
    if (!originalCookie) return;

    dispatch(addCookieToBox(originalCookie));
  };

  const checkoutButtonText =
    cartItems.length === boxSize
      ? "PROCEED TO CHECKOUT"
      : `ADD ${boxSize - cartItems.length} MORE TO CHECKOUT`;

  const columns = getCartColumns({
    cartItemsLength: cartItems.length,
    boxSize,
    onAdd: addCookie,
    onRemove: removeCookie,
  });

  if (cartItems.length === 0) {
    return (
      <EmptyCartContainer vertical align="center" justify="center">
        <Empty description="Your shopping cart is empty!" />
        <Button type="primary" onClick={() => navigate("/")}>
          <ArrowLeftOutlined /> Continue Shopping
        </Button>
      </EmptyCartContainer>
    );
  }

  return (
    <CartContainer>
      <StyledTitle level={2}>YOUR CART</StyledTitle>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <StyledCard variant="borderless">
            <Table
              dataSource={groupedCartItems}
              columns={columns}
              rowKey="name"
              pagination={false}
              scroll={{ x: 600 }}
            />
          </StyledCard>
        </Col>

        <Col xs={24} lg={8}>
          <StyledCard
            title={<StyledTitle>Order Summary</StyledTitle>}
            variant="borderless"
          >
            <RadioGroupWrapper vertical>
              <Text type="secondary">BOX SIZE TIER:</Text>
              <StyledRadioGroup
                value={boxSize}
                buttonStyle="solid"
                onChange={(e) => dispatch(setBoxSize(e.target.value))}
              >
                <Radio.Button value={4}>4-Pack</Radio.Button>
                <Radio.Button value={6}>6-Pack</Radio.Button>
                <Radio.Button value={12}>12-Pack</Radio.Button>
              </StyledRadioGroup>
            </RadioGroupWrapper>

            <SummaryRow justify="space-between">
              <Text>Cookies in Box:</Text>
              <BoxCapacityText strong $isFull={cartItems.length === boxSize}>
                {cartItems.length} / {boxSize}
              </BoxCapacityText>
            </SummaryRow>

            <SummaryRow justify="space-between">
              <Text>Subtotal:</Text>
              <Text strong>Rs. {subtotal}</Text>
            </SummaryRow>

            <SummaryRow justify="space-between">
              <Text>Delivery Charges:</Text>
              <Text>Rs. {deliveryFee}</Text>
            </SummaryRow>
            <SpacedDivider />

            <TotalRow justify="space-between" align="center">
              <Text strong>Total:</Text>
              <Text strong>Rs. {totalAmount}</Text>
            </TotalRow>

            <Button
              type="primary"
              block
              size="large"
              disabled={cartItems.length !== boxSize}
              onClick={() => navigate("/checkout")}
            >
              {checkoutButtonText}
            </Button>
          </StyledCard>
        </Col>
      </Row>
    </CartContainer>
  );
};

export default CartPage;
