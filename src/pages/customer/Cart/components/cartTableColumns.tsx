import { Button, Avatar, Flex, Typography } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { QuantityControl } from "../styles";
import type { GroupedCartItem } from "../../../../utils/cartUtils";
const { Text } = Typography;

type Props = {
  cartItemsLength: number;
  boxSize: number;
  onAdd: (record: GroupedCartItem) => void;
  onRemove: (record: GroupedCartItem, showMessage?: boolean) => void;
};

export const getCartColumns = ({
  cartItemsLength,
  boxSize,
  onAdd,
  onRemove,
}: Props) => [
  {
    title: "COOKIE",
    dataIndex: "name",
    render: (name: string, record: GroupedCartItem) => (
      <Flex align="center" gap="middle">
        {record.imageUrl && (
          <Avatar shape="square" size={60} src={record.imageUrl} />
        )}
        <Text strong>{name}</Text>
      </Flex>
    ),
  },
  {
    title: "QTY",
    dataIndex: "quantity",
    align: "center" as const,
    width: 160,
    render: (quantity: number, record: GroupedCartItem) => (
      <QuantityControl align="center" justify="space-between">
        <Button
          type="text"
          size="small"
          icon={<MinusOutlined />}
          onClick={() => onRemove(record)}
        />

        <Text>{quantity}</Text>

        <Button
          type="text"
          size="small"
          icon={<PlusOutlined />}
          disabled={cartItemsLength >= boxSize}
          onClick={() => onAdd(record)}
        />
      </QuantityControl>
    ),
  },
  {
    title: "TOTAL",
    dataIndex: "totalPrice",
    render: (price: number) => <Text>Rs. {price}</Text>,
  },
  {
    title: "REMOVE",
    width: 140,
    align: "center" as const,
    render: (_: unknown, record: GroupedCartItem) => (
      <Button
        type="text"
        danger
        icon={<DeleteOutlined />}
        onClick={() => onRemove(record, true)}
      />
    ),
  },
];
