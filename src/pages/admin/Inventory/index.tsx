import React, { useState } from "react";
import { Table, message, Button, Tooltip } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleItemAvailability,
  deleteItem,
} from "../../../store/slices/inventorySlice";
import type { RootState } from "../../../store";
import { StyledCard } from "../../../components/StyledCard";
import { StyledInput } from "../../../components/StyledInput";
import { getInventoryColumns } from "./columns";
import type { HandleAvailabilityChangeParams } from "./types";
import StyledPageHeader from "../../../components/PageHeader";
import { Wrapper } from "../../../components/Wrapper";

const AdminInventory: React.FC = () => {
  const inventory = useSelector((state: RootState) => state.inventory.items);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleAvailabilityChange = ({
    id,
    checked,
  }: HandleAvailabilityChangeParams) => {
    dispatch(toggleItemAvailability({ id, isAvailable: checked }));
    const item = inventory.find((cookie) => cookie.id === id);
    message[checked ? "success" : "warning"](
      checked
        ? `"${item?.name}" is now active on the storefront!`
        : `"${item?.name}" marked as Sold Out.`,
    );
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
    message.success("Cookie removed from inventory.");
  };

  const columns = getInventoryColumns({
    onToggle: (id: number, checked: boolean) =>
      handleAvailabilityChange({ id, checked }),
    onDelete: handleDelete,
  });
  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <StyledPageHeader
        title="Inventory Management"
        breadcrumbs={[{ title: "Admin" }, { title: "Inventory" }]}
        extra={
          <Tooltip title="Adding new cookies is currently unavailable. Coming soon!">
            <Button shape="round" type="primary" icon={<PlusOutlined />} disabled>
              Add Cookie
            </Button>
          </Tooltip>
        }
      />
      <Wrapper>
        <StyledCard
          title="Inventory Details"
          extra={
            <StyledInput
              allowClear
              value={search}
              placeholder="Search..."
              suffix={<SearchOutlined />}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        >
          <Table
            rowKey="id"
            columns={columns}
            dataSource={filteredInventory}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </StyledCard>
      </Wrapper>
    </>
  );
};

export default AdminInventory;
