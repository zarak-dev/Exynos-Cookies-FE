import styled from "styled-components";
import { Flex } from "antd";




export const SlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background: #fafafa;
  padding: 16px;
  border: 1px solid #e8e8e8;
`;

export const CookieSlot = styled(Flex)<{ $filled: boolean }>`
  aspect-ratio: 1;
  border: ${(props) =>
    props.$filled ? "2px solid #00009c" : "2px dashed #ccc"};
  background: ${(props) => (props.$filled ? "#ffffff" : "transparent")};
  overflow: hidden;
  position: relative;
  .ant-image,
  .ant-image-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const DrawerFooter = styled(Flex)`
  margin-top: 40px;
  border-top: 2px solid #f0f0f0;
  padding-top: 20px;
`;

export const TotalRow = styled(Flex)`
  font-size: 1.1rem;
`;