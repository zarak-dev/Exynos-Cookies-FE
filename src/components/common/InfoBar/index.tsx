import React from "react";
import { Col, Row, Typography } from "antd";
import {
  AimOutlined,
  PhoneOutlined,
  SafetyOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  InfoBarWrapper,
  InfoBarCard,
  InfoBarIcon,
  InfoBarText,
} from "./styles";

const { Text, Paragraph } = Typography;

const ITEMS = [
  {
    icon: <AimOutlined />,
    title: "Track Your Order",
    desc: "Click here for quick update and info",
    functional: true,
    path: "/track-order",
  },
  {
    icon: <PhoneOutlined />,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day, 7 days a week",
    functional: false,
  },
  {
    icon: <SafetyOutlined />,
    title: "100% Payment Secure",
    desc: "We ensure secure payment with PEV",
    functional: false,
  },
  {
    icon: <CreditCardOutlined />,
    title: "Payment Methods",
    desc: "COD, Credit Card: Visa, Master Card",
    functional: false,
  },
];

const InfoBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <InfoBarWrapper>
      <Row gutter={[24, 24]}>
        {ITEMS.map((item, i) => (
          <Col xs={24} sm={12} md={6} key={i}>
            <InfoBarCard
              $clickable={item.functional}
              onClick={() => item.functional && navigate(item.path!)}
            >
              <InfoBarIcon>{item.icon}</InfoBarIcon>
              <InfoBarText>
                <Text strong style={{ color: "#00009c" }}>
                  {item.title}
                </Text>
                <Paragraph
                  style={{ margin: 0, fontSize: "0.85rem", color: "#666" }}
                >
                  {item.desc}
                </Paragraph>
              </InfoBarText>
            </InfoBarCard>
          </Col>
        ))}
      </Row>
    </InfoBarWrapper>
  );
};

export default InfoBar;
