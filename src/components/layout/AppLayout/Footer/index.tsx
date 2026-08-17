import React from "react";
import logoSvg from "../../../../assets/images/exynos-icon-footer.png";
import {
  StyledFooter,
  FooterGrid,
  FooterColumn,
  FooterBrand,
  LogoImage,
  FooterText,
  FooterHeading,
  FooterLink,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterGrid>
        {/* Column 1: Brand details */}
        <FooterColumn>
          <FooterBrand>
            <LogoImage src={logoSvg} alt="Exynos Cooky Logo" />
          </FooterBrand>
        </FooterColumn>

        {/* Column 2: Quick Explore links */}
        <FooterColumn>
          <FooterHeading>Explore</FooterHeading>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">Our Story</FooterLink>
          <FooterLink to="/buy-cooky">Buy Cooky</FooterLink>
          <FooterLink to="/careers">Careers</FooterLink>
        </FooterColumn>

        {/* Column 3: Corporate/Gifting links */}
        <FooterColumn>
          <FooterHeading>Services</FooterHeading>
          <FooterLink to="#">Nationwide Shipping</FooterLink>
          <FooterLink to="#">Corporate Gifting</FooterLink>
          <FooterLink to="#">Catering</FooterLink>
          <FooterLink to="#">Franchising</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Support</FooterHeading>
          <FooterText>Email: support@exynoscooky.com</FooterText>
          <FooterText>Phone: +92 (051) 123-4567</FooterText>
        </FooterColumn>
      </FooterGrid>
    </StyledFooter>
  );
};

export default Footer;
