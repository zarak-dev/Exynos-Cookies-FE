import styled from "styled-components";
import {
  Card,
  Button,
  Tabs,
  Typography,
  Flex,
  Image,
  Carousel,
  Tag,
} from "antd";
import Title from "antd/es/typography/Title";
import { StyledTitle } from "../../../components/StyledTitle";

const { Text, Paragraph } = Typography;
const { Meta } = Card;

export const HomeContainer = styled.div`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CoverImage = styled(Image)`
  height: 280px !important;
  object-fit: cover !important;
  padding: 12px !important;
  background: #fafafa !important;
`;

export const CardHeader = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 45px;
`;

export const ExploreSection = styled.div`
  max-width: 500px;
  margin: 0 auto 40px;
  text-align: center;
`;

export const MenuTabs = styled(Tabs)`
  .ant-tabs-nav-wrap {
    justify-content: center;
  }

  .ant-tabs-tab {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.1rem;
    padding: 12px 24px !important;

    &:hover {
      color: #00009c !important;
    }
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #00009c !important;
  }

  .ant-tabs-ink-bar {
    background: #00009c !important;
    height: 3px !important;
  }
`;

export const NoResults = styled(Paragraph)`
  &.ant-typography {
    text-align: center;
    padding: 60px 20px;
    font-size: 1.1rem;
    color: #666;
  }
`;

export const RatingWrapper = styled(Flex)`
  margin: -4px 0 12px;
`;

export const ReviewCountText = styled(Text)`
  margin-left: 8px;
  font-size: 0.8rem;
  color: #666;
`;

export const BestSection = styled.div`
  max-width: 1200px;
  margin: 48px auto 0;
  padding: 0 48px 30px;

  @media (max-width: 768px) {
    padding: 0 16px 20px;
  }
`;

export const BestSectionTitle = styled(Title)`
  &.ant-typography {
    text-align: center;
    color: #00009c;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 1.4rem;
  }
`;

export const BestCarousel = styled(Carousel)`
  .slick-prev,
  .slick-next {
    color: #00009c;
    font-size: 18px;
    z-index: 1;
  }
  .slick-prev {
    left: -32px;
  }
  .slick-next {
    right: -32px;
  }
  .slick-slide {
    background: transparent;
  }
`;
export const BestCoverImage = styled(Image)`
  height: 160px !important;
  object-fit: cover !important;
  padding: 8px !important;
`;

export const BestCardTitle = styled(StyledTitle)`
  &.ant-typography {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
    margin: 0;
  }
`;
export const BestCardHeader = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
export const BestCardBody = styled(Flex)`
  flex-direction: column;
  gap: 10px;
  padding-top: 4px;
  flex: 1;
`;

export const BestCardSlide = styled(Flex)`
  padding: 0 10px 16px;
`;

export const TrendingSection = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

export const TrendingSectionTitle = styled(Title)`
  &.ant-typography {
    text-align: center;
    color: #00009c;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 1.4rem;
  }
`;

export const TrendingStack = styled.div`
  position: relative;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 16px;
  }
`;
export const TrendingCard = styled(Card)<{ $pos: "left" | "center" | "right" }>`
  position: absolute;
  width: 320px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 56, 0.13);

  ${({ $pos }) =>
    $pos === "center" && `transform: translateX(0px) scale(1.05); z-index: 3;`}
  ${({ $pos }) =>
    $pos === "left" &&
    `transform: translateX(-220px) scale(0.88) rotate(-4deg); z-index: 2;`}
  ${({ $pos }) =>
    $pos === "right" &&
    `transform: translateX(220px) scale(0.88) rotate(4deg); z-index: 2;`}

  .ant-card-body {
    padding: 12px 14px;
  }
  img {
    height: 180px;
    object-fit: cover;
    width: 100%;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    transform: none !important;
    rotate: none;
  }
`;
export const TrendingCardHeader = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
`;

export const TrendingMeta = styled(Meta)`
  margin: 2px 0 6px;

  .ant-card-meta-description {
    font-size: 0.78rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
  }
`;
export const TrendingCardBody = styled(Flex)`
  flex-direction: column;
  gap: 6px;
`;

export const ReviewsSection = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

export const ReviewSlide = styled(Flex)`
  padding: 0 10px;
  min-width: 0;
`;
export const ReviewsSectionTitle = styled(Title)`
  &.ant-typography {
    text-align: center;
    color: #00009c;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 1.4rem;
  }
`;

export const ReviewCard = styled(Card)`
  border-radius: 14px;
  min-width: 0;
  word-break: break-word;

  .ant-card-body {
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
  }
`;

export const ReviewText = styled(Paragraph)`
  &.ant-typography {
    font-size: 0.85rem;
    color: #444;
    margin: 0;
    font-style: italic;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const ReviewerName = styled(Text)`
  &.ant-typography {
    font-weight: 700;
    font-size: 0.9rem;
    color: #00009c;
  }
`;
export const ReviewEmail = styled(Text)`
  &.ant-typography {
    font-size: 0.75rem;
    color: #888;
    display: block;
  }
`;
export const SectionBadge = styled(Tag)`
  &.ant-tag {
    border-radius: 20px;
    padding: 4px 16px;
    font-size: 0.85rem;
    display: block;
    width: fit-content;
    margin: 0 auto 12px;
    border: none;
    background: #00009c;
    color: #fff;
  }
`;

export const StyledMeta = styled(Meta)`
  flex: 1;
  min-height: 48px;

  .ant-card-meta-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
