import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledFooter = styled.footer`
  background-color: #00009c;
  padding: 60px 40px 20px 40px;
  margin-top: auto;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 32px;
    background-color: #00009c;
    clip-path: ellipse(55% 100% at 50% 100%);
  }
`;

export const LogoImage = styled.img`
  width: 125px;
  border-radius: 8px;
  margin-left: 38px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterBrand = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

export const FooterHeading = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`;

export const FooterLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;
