import React from "react";
import { Col, Flex, Row } from "antd";

import {
  HeroContent,
  HeroDescription,
  HeroImage,
  HeroTitle,
  ImageWrapper,
  OrderButton,
  Price,
  PriceLabel,
  PriceWrapper,
  SlideContainer,
  StyledCarousel,
} from "./styles";
import { type Cookie } from "../../../../../utils/mockData";

interface HomeCarouselProps {
  cookies: Cookie[];
  onAdd: (cookie: Cookie) => void;
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ cookies, onAdd }) => {
  return (
    <StyledCarousel autoplay autoplaySpeed={4000} infinite>
      {cookies.map((cookie) => (
        <SlideContainer key={cookie.id}>
          <Row
            align="middle"
            gutter={[48, 0]}
            style={{ width: "100%", height: "100%" }}
          >
            <Col xs={24} lg={12}>
              <HeroContent vertical justify="center">
                <HeroTitle level={1}>{cookie.name}</HeroTitle>
                <HeroDescription>{cookie.description}</HeroDescription>
                <PriceWrapper>
                  <PriceLabel>Starting from</PriceLabel>
                  <Price level={2}>Rs {cookie.price.toLocaleString()}</Price>
                </PriceWrapper>
                <Flex gap={16}>
                  <OrderButton type="primary" onClick={() => onAdd(cookie)}>
                    Add to Box
                  </OrderButton>
                </Flex>
              </HeroContent>
            </Col>

            <Col xs={24} lg={12}>
              <ImageWrapper>
                <HeroImage src={cookie.imageUrl} alt={cookie.name} />
              </ImageWrapper>
            </Col>
          </Row>
        </SlideContainer>
      ))}
    </StyledCarousel>
  );
};

export default HomeCarousel;
