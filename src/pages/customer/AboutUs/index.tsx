import React from "react";
import storyIllustration from "../../../assets/images/man-with-cookie.jpg";

import {
  PageWrapper,
  AboutContainer,
  HeroSection,
  LeftColumn,
  RightColumn,
  StoryImage,
  EditorialHeader,
  StoryTitle,
  NarrativeBlock,
  Paragraph,
  HighlightText,
  CoreGrid,
  FeatureCard,
  FoundationsTitle,
} from "./styles";

const AboutUs: React.FC = () => {
  return (
    <PageWrapper>
      <AboutContainer>
        {/* Hero Section */}
        <HeroSection>
          <LeftColumn>
            <EditorialHeader>
              <StoryTitle>Spreading Happiness One Cookie at A Time</StoryTitle>
            </EditorialHeader>

            <NarrativeBlock>
              <Paragraph>
                Welcome to <HighlightText>Exynos Cooky</HighlightText>, Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
                atque sequi, excepturi rerum sapiente illum maiores culpa ipsa
                tempora nemo nostrum iusto tempore? Iure dignissimos doloremque
                nulla ipsam distinctio! Ipsam. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Ab tempore dolore doloremque
                totam, non repellendus animi veniam cupiditate atque quibusdam
                cum eveniet nostrum! Voluptatum, at tenetur omnis aliquam eaque
                praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Voluptatibus itaque, obcaecati magni eaque laudantium
                quaerat accusamus impedit aperiam doloremque magnam, ea
                voluptatum similique assumenda, sed iure qui eligendi quod
                dicta.
              </Paragraph>
            </NarrativeBlock>
          </LeftColumn>

          <RightColumn>
            <StoryImage src={storyIllustration} alt="Exynos Cooky Mascot" />
          </RightColumn>
        </HeroSection>

        {/* Foundations Section */}
        <FoundationsTitle>What Makes Us Special</FoundationsTitle>
        
          <CoreGrid>
            <FeatureCard title="Gourmet Ingredients" variant="borderless">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nisi qui dolore deleniti! Iste rem, eveniet non perspiciatis saepe tempora dolore, aperiam obcaecati nihil ad doloribus natus unde porro praesentium.
            </FeatureCard>

            <FeatureCard title="Weekly Rotating Menu" variant="borderless">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda saepe sequi optio doloribus sapiente odit mollitia, magni, nisi molestias ut iure eveniet, dignissimos earum modi nihil est laborum rem fugit.
            </FeatureCard>

            <FeatureCard title="Baked Fresh Daily" variant="borderless">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, culpa. Dicta velit nostrum quasi. Culpa doloribus temporibus similique consequatur optio non rerum quidem repellendus sequi ab expedita accusamus, officia adipisci.
            </FeatureCard>

            <FeatureCard title="Signature Packaging" variant="borderless">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum, amet quos, ab libero adipisci distinctio recusandae eligendi itaque maiores molestiae maxime consequuntur eum provident ut error? Reiciendis, magnam qui.
            </FeatureCard>
          </CoreGrid>
       
      </AboutContainer>
    </PageWrapper>
  );
};

export default AboutUs;
