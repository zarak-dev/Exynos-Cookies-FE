import styled from "styled-components";
import { Tag, Image, Flex } from "antd";

export const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CookieImage = styled(Image)`
  .ant-image-img {
    border-radius: 6px;
    object-fit: cover;
  }
`;

export const StatusTag = styled(Tag)`
  font-weight: 600;
`;
export const SearchWrapper = styled(Flex)`
  justify-content: flex-end;
  margin-bottom: 8px;

  .ant-input-affix-wrapper {
    width: 260px;
  }
`;
