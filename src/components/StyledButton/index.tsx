import { Button } from "antd";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 0px;
  background-color: #00009c;
  border-color: #00009c;
  font-weight: 700;
  text-transform: uppercase;
  height: 45px;

  &:hover, &:focus {
    background-color: #000066;
    border-color: #000066;
  }
`;