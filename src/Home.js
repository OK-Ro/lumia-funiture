import React from "react";
import styled from "styled-components";

import HeroComponent from "./components/HeroComponent";
import Categories from "./Categories";

const MainSection = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

const Section = styled.section`
  width: 100%;
`;

const HeroSection = styled(Section)`
  width: 100%;
  height: 60vh;
  padding: 0;
  overflow: hidden;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const CategoriesSection = styled(Section)`
  width: 100%;
  height: 100vh;
  padding: 0;
  overflow: hidden;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const ClientFeedbackSection = styled(Section)`
  min-height: 60vh;
  background-color: #e0e0e0;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    min-height: 50vh;
  }
`;

const PartnersSection = styled(Section)`
  min-height: 30vh;
  background-color: #d0d0d0;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    min-height: 25vh;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
const ComingSoonText = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <MainSection>
      <HeroSection>
        <HeroComponent />
      </HeroSection>

      <CategoriesSection>
        <Categories />
      </CategoriesSection>

      <ClientFeedbackSection>
        <SectionContent>
          <SectionTitle>Client Feedback</SectionTitle>
          <ComingSoonText>
            We're excited to share our clients' experiences with you soon. Stay
            tuned for heartfelt testimonials and success stories from our valued
            customers.
          </ComingSoonText>
        </SectionContent>
      </ClientFeedbackSection>

      <PartnersSection>
        <SectionContent>
          <SectionTitle>Our Partners</SectionTitle>
          <ComingSoonText>
            We're working on building strong partnerships to enhance your
            shopping experience. Check back soon to discover the premium brands
            and services we'll be collaborating with.
          </ComingSoonText>
        </SectionContent>
      </PartnersSection>
    </MainSection>
  );
};

export default Home;
