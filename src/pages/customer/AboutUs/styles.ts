import styled from "styled-components";
import { Card } from "antd";

export const PageWrapper = styled.div`
  background-color: #e6f0ff;
  width: 100%;
  min-height: 100vh;
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoryImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

export const EditorialHeader = styled.div`
  margin-bottom: 30px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const StoryTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #00009c;
  line-height: 1.2;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
export const NarrativeBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #2c3e50;
  line-height: 1.8;
  margin: 0;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const HighlightText = styled.span`
  color: #00009c;
  font-weight: 700;
`;

export const FoundationsTitle = styled(StoryTitle)`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const CoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled(Card)`
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 156, 0.15);
  }

  .ant-card-head-title {
    color: #00009c;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;
