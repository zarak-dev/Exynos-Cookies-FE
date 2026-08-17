import type { ColumnsType } from "antd/es/table";

export interface CookieItem {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
  imageUrl: string;
  description: string;
}

export interface HandleAvailabilityChangeParams {
  id: number;
  checked: boolean;
}

export interface InventoryColumnsProps {
  onToggle: (id: number, checked: boolean) => void;
  onDelete: (id: number) => void;
}

export type InventoryColumns = ColumnsType<CookieItem>;
