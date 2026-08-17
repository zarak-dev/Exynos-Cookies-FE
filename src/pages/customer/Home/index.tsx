import React, { useState, useEffect } from "react";
import { Tag, message, Rate, Avatar, Spin, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewUsers } from "../../../store/slices/reviewSlice";
import { type Cookie } from "../../../utils/mockData";
import { type RootState } from "../../../store";
import HomeCarousel from "./components/HomeCarousel";
import { StyledCard } from "../../../components/StyledCard";
import { StyledTitle } from "../../../components/StyledTitle";

import {
  BestSection,
  BestSectionTitle,
  BestCarousel,
  StyledButton,
  BestCoverImage,
  BestCardHeader,
  TrendingSection,
  TrendingSectionTitle,
  TrendingStack,
  TrendingCard,
  TrendingCardHeader,
  ReviewsSection,
  ReviewsSectionTitle,
  ReviewCard,
  ReviewText,
  ReviewerName,
  ReviewEmail,
  SectionBadge,
  BestCardSlide,
  BestCardBody,
  TrendingCardBody,
  TrendingMeta,
  ReviewSlide,
  StyledMeta,
  BestCardTitle,
} from "./styles";
import { addCookieWithFeedback } from "../../../utils/cartActions";

const BEST_COOKIE_IDS = [2, 3, 6, 9, 10, 4];
const TRENDING_COOKIE_IDS = [13, 18, 17];
const REVIEWS = [
  {
    comment:
      "Absolutely divine! The Lotus Biscoff melted in my mouth. Will order every week!",
  },
  {
    comment:
      "Best cookies in town, hands down. The box packaging is so cute too 🍪",
  },
  {
    comment:
      "Tried the Pink Velvet and I was blown away. Super fresh and perfectly soft.",
  },
  {
    comment:
      "Ordered for my daughter's birthday and everyone loved them. 10/10 recommend!",
  },
  {
    comment:
      "Fast delivery, gorgeous packaging, and insane flavors. Exynos Cooky is the real deal.",
  },
  {
    comment:
      "The S'mores cookie is absolutely unreal. Never tasted anything like it!",
  },
  {
    comment:
      "My whole family is obsessed. We order a box every single week now.",
  },
  {
    comment:
      "Gifted a box to my colleague and she immediately placed her own order.",
  },
  {
    comment:
      "The cookies arrived fresh and perfectly packed. Genuinely impressed!",
  },
  {
    comment:
      "Cinnamon Roll cookie is a masterpiece. Warm, soft, and perfectly spiced.",
  },
  {
    comment:
      "I've tried many cookie brands but Exynos Cooky is on another level.",
  },
  { comment: "Ordered the mixed box and every single cookie was incredible." },
  { comment: "The packaging alone made me smile before I even opened it!" },
  { comment: "Brown Butter Toffee is my new addiction. Send help 😂" },
  {
    comment:
      "Perfect for gifting. Everyone I've given these to has loved them.",
  },
  {
    comment:
      "Finally cookies that actually taste homemade but look professional!",
  },
  {
    comment:
      "Speedy delivery and every cookie was still perfectly soft. Impressed!",
  },
  {
    comment:
      "The Red Velvet cookie is everything. Will be back for more for sure.",
  },
  {
    comment:
      "I ordered once and now I can't stop. These cookies are dangerous 🍪",
  },
  {
    comment:
      "Best decision I made this month was trying Exynos Cooky. Highly recommend!",
  },
];
const carouselSettings = {
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  dots: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const { items: cookies } = useSelector((state: RootState) => state.inventory);
  const { items: cartItems, boxSize } = useSelector(
    (state: RootState) => state.cart,
  );
  const [activeTrending, setActiveTrending] = useState<number>(0);
  const { users: reviewUsers, loading: reviewLoading } = useSelector(
    (state: RootState) => state.reviews,
  );

  useEffect(() => {
    dispatch(fetchReviewUsers());
  }, []);

  const carouselCookies = cookies.slice(0, 6);
  // Build a lookup table once — each cookie is instantly accessible by its id
  const cookieMap = new Map(cookies.map((cookie) => [cookie.id, cookie]));
  // Map over the ID list  replacign each id with its matching cookie from the table
  // Filter out any undefined if id doesn't exist in the map, for  TypeScript the result is Cookie[]
  const bestCookies = BEST_COOKIE_IDS.map((id) => cookieMap.get(id)).filter(
    (cookie): cookie is Cookie => !!cookie,
  );
  console.log(bestCookies);

  const trendingCookies = TRENDING_COOKIE_IDS.map((id) =>
    cookieMap.get(id),
  ).filter((cookie): cookie is Cookie => !!cookie);

  const handleAddToCart = (cookie: Cookie) => {
    addCookieWithFeedback(
      cookie,
      cartItems.length,
      boxSize,
      dispatch,
      messageApi,
    );
  };

  return (
    <>
      {contextHolder}
      <HomeCarousel cookies={carouselCookies} onAdd={handleAddToCart} />

      <BestSection>
        <BestSectionTitle level={2}>Our Best Products</BestSectionTitle>
        <SectionBadge>
          🍪 Our most loved cookies, picked just for you
        </SectionBadge>
        <BestCarousel {...carouselSettings}>
          {bestCookies.map((cookie) => (
            <BestCardSlide key={cookie.id}>
              <StyledCard
                hoverable
                $isAvailable={cookie.isAvailable}
                cover={
                  <BestCoverImage
                    src={cookie.imageUrl}
                    alt={cookie.name}
                    preview={false}
                  />
                }
              >
                <BestCardBody>
                  <BestCardHeader>
                    <BestCardTitle level={5}>{cookie.name}</BestCardTitle>
                    <Tag
                      color={cookie.isAvailable ? "blue" : "red"}
                      variant="solid"
                    >
                      {cookie.isAvailable ? `Rs. ${cookie.price}` : "Sold Out"}
                    </Tag>
                  </BestCardHeader>
                  <StyledMeta description={cookie.description} />

                  <StyledButton
                    type="primary"
                    shape="round"
                    size="small"
                    disabled={!cookie.isAvailable}
                    danger={!cookie.isAvailable}
                    onClick={() => handleAddToCart(cookie)}
                  >
                    {cookie.isAvailable ? "Add to Box" : "Unavailable"}
                  </StyledButton>
                </BestCardBody>
              </StyledCard>
            </BestCardSlide>
          ))}
        </BestCarousel>
      </BestSection>
      <TrendingSection>
        <TrendingSectionTitle level={2}>Trending</TrendingSectionTitle>
        <SectionBadge>
          🔥 Discover what everyone is ordering right now
        </SectionBadge>
        <TrendingStack>
          {[
            { cookie: trendingCookies[1], pos: "left" as const, idx: 1 },
            { cookie: trendingCookies[0], pos: "center" as const, idx: 0 },
            { cookie: trendingCookies[2], pos: "right" as const, idx: 2 },
          ].map(({ cookie, pos, idx }) =>
            cookie ? (
              <TrendingCard
                key={cookie.id}
                $pos={
                  activeTrending === idx
                    ? "center"
                    : pos === "center" && activeTrending !== idx
                      ? activeTrending === 1
                        ? "right"
                        : "left"
                      : pos
                }
                onClick={() => setActiveTrending(idx)}
              >
                <img src={cookie.imageUrl} alt={cookie.name} />
                <TrendingCardBody>
                  <TrendingCardHeader>
                    <StyledTitle level={5}>{cookie.name}</StyledTitle>
                    <Tag
                      color={cookie.isAvailable ? "blue" : "red"}
                      variant="solid"
                    >
                      {cookie.isAvailable ? `Rs. ${cookie.price}` : "Sold Out"}
                    </Tag>
                  </TrendingCardHeader>
                  <Rate
                    disabled
                    defaultValue={5}
                    style={{ fontSize: 11, color: "#faad14" }}
                  />
                  <TrendingMeta description={cookie.description} />
                  <StyledButton
                    type="primary"
                    shape="round"
                    size="small"
                    disabled={!cookie.isAvailable}
                    danger={!cookie.isAvailable}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(cookie);
                    }}
                  >
                    {cookie.isAvailable ? "Add to Box" : "Unavailable"}
                  </StyledButton>
                </TrendingCardBody>
              </TrendingCard>
            ) : null,
          )}
        </TrendingStack>
      </TrendingSection>

      <ReviewsSection>
        <ReviewsSectionTitle level={2}>Customer Reviews</ReviewsSectionTitle>
        <SectionBadge>
          ⭐ Real reviews from our happy cookie lovers
        </SectionBadge>

        <Spin spinning={reviewLoading}>
          <BestCarousel
            slidesToShow={4}
            slidesToScroll={2}
            dots={false}
            arrows={true}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1 },
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
              },
              {
                breakpoint: 576,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
              {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ]}
          >
            {REVIEWS.map((review, i) => (
              <ReviewSlide key={i}>
                <ReviewCard>
                  <Flex align="center" gap={10}>
                    <Avatar
                      size={40}
                      src={reviewUsers[i]?.avatar}
                      style={{ background: "#e8eaff", flexShrink: 0 }}
                    />
                    <Flex vertical>
                      <ReviewerName>{reviewUsers[i]?.name ?? "—"}</ReviewerName>
                      <ReviewEmail>{reviewUsers[i]?.email ?? ""}</ReviewEmail>
                    </Flex>
                  </Flex>
                  <Rate
                    disabled
                    defaultValue={5}
                    style={{ fontSize: 12, color: "#faad14" }}
                  />
                  <ReviewText>"{review.comment}"</ReviewText>
                </ReviewCard>
              </ReviewSlide>
            ))}
          </BestCarousel>
        </Spin>
      </ReviewsSection>
    </>
  );
};

export default Home;
