import React from "react";
import { Result } from "antd";
import { CenteredContainer, BrandButton } from "../styles";

interface EmptyCartProps {
  onFillBox: () => void;
}

export const EmptyCart: React.FC<EmptyCartProps> = ({ onFillBox }) => (
  <CenteredContainer>
    <Result
      status="warning"
      title="Your cart is empty"
      subTitle="Add some cookies to your box before checking out."
      extra={
        <BrandButton type="primary" size="large" onClick={onFillBox}>
          Fill Your Box
        </BrandButton>
      }
    />
  </CenteredContainer>
);
