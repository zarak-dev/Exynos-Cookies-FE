export const chartData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 61000 },
  { month: "Apr", revenue: 58000 },
  { month: "May", revenue: 74000 },
  { month: "Jun", revenue: 95000 },
];

export const chartConfig = {
  data: chartData,
  xField: "month",
  yField: "revenue",
  color: "#00009c",

  style: {
    radiusTopLeft: 6,
    radiusTopRight: 6,
  },

  label: {
    text: "revenue",
    position: "top",
    style: {
      fill: "#8c8c8c",
      opacity: 0.8,
      fontWeight: 600,
    },
  },
};

export const pieData = [
  { type: "Chilled Sugar", value: 40 },
  { type: "Triple Chocolate", value: 25 },
  { type: "Classic Chocolate Chip", value: 15 },
  { type: "Red Velvet Classic", value: 12 },
  { type: "Lotus Biscoff", value: 8 },
];

export const pieConfig = {
  data: pieData,
  angleField: "value",
  colorField: "type",
  innerRadius: 0.6,
  label: { text: "value", style: { fontWeight: "bold" } },
  legend: {
    color: { position: "bottom", layout: { justifyContent: "center" } },
  },
};

export const inventoryData = [
  { name: "Chilled Sugar", stock: 120, maxCapacity: 150 },
  { name: "Triple Chocolate", stock: 18, maxCapacity: 150 },
  { name: "Classic Chocolate Chip", stock: 85, maxCapacity: 150 },
  { name: "Red Velvet Classic", stock: 140, maxCapacity: 150 },
  { name: "Lotus Biscoff", stock: 55, maxCapacity: 150 },
];
