import React, { useState } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100%;
  font-family: "Arial", sans-serif;
  color: #333;
`;

const BannerSection = styled.section`
  width: 100%;
  height: 50vh;
  background-image: url("https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
`;

const BannerTitle = styled.h1`
  color: white;
  font-size: 4rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
`;

const ContentSection = styled.section`
  display: flex;
  padding: 5rem 2rem;
  max-width: 100vh;
  height: 40vh;
  margin: 0 auto 8rem;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 14rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 2rem;
  }
`;

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#333" : "#777")};
  border-bottom: ${(props) => (props.active ? "3px solid #333" : "none")};
  transition: all 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
`;

const ContentText = styled.p`
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #555;
`;

const ContentList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
`;

const ContentListItem = styled.li`
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #555;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #333;
  }
`;

const LearnMoreButton = styled.button`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border-radius: 5px;
  align-self: flex-start;
  margin-top: auto;

  &:hover {
    background-color: #555;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const LumiaSection = styled.section`
  background-color: #f0f0f0;
  padding: 5rem 2rem;
  margin-bottom: 14rem;
  height: 60vh;
  width: 100%;
`;

const LumiaContent = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LumiaText = styled.div`
  flex: 1;
`;

const LumiaTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const LumiaImage = styled.img`
  flex: 1;
  max-width: 100%;
  height: 90vh;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ClientFeedbackSection = styled.section`
  background-color: #f8f8f8;
  padding: 5rem 2rem;
  margin-bottom: 10rem;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const About = () => {
  const [activeTab, setActiveTab] = useState("About Us");

  const tabContent = {
    "About Us": (
      <>
        <ContentText>
          At our furniture company, we believe in the power of beautiful,
          functional spaces. For over a decade, we've been crafting high-quality
          furniture that transforms houses into homes. Our passion for design
          and commitment to sustainability drive everything we do.
        </ContentText>
        <ContentText>
          From our skilled artisans to our customer service team, every member
          of our company is dedicated to bringing your vision to life. We're not
          just selling furniture; we're helping you create the backdrop for your
          life's most precious moments.
        </ContentText>
      </>
    ),
    Services: (
      <>
        <ContentText>
          We offer a wide range of services to meet all your furniture needs:
        </ContentText>
        <ContentList>
          <ContentListItem>
            Custom furniture design and manufacturing
          </ContentListItem>
          <ContentListItem>Interior design consultations</ContentListItem>
          <ContentListItem>Furniture restoration and repair</ContentListItem>
          <ContentListItem>Home staging services</ContentListItem>
          <ContentListItem>Delivery and installation</ContentListItem>
        </ContentList>
        <ContentText>
          Our team of experts is committed to providing top-notch service and
          ensuring your complete satisfaction with every project.
        </ContentText>
      </>
    ),
    History: (
      <>
        <ContentText>
          Founded in 2010, our company started as a small workshop with a big
          dream. The founders, John and Jane Doe, combined their passion for
          craftsmanship and design to create unique, high-quality furniture
          pieces.
        </ContentText>
        <ContentText>
          Over the years, we've grown from a local favorite to a nationally
          recognized brand. Our commitment to quality, innovation, and customer
          satisfaction has remained constant throughout our journey, driving our
          success and earning the trust of homeowners across the country.
        </ContentText>
      </>
    ),
  };

  return (
    <AboutContainer>
      <BannerSection>
        <BannerTitle>About Us</BannerTitle>
      </BannerSection>

      <ContentSection>
        <ImageSection>
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="About Us"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </ImageSection>
        <TextSection>
          <TabsContainer>
            {Object.keys(tabContent).map((tab) => (
              <Tab
                key={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Tab>
            ))}
          </TabsContainer>
          {tabContent[activeTab]}
          <LearnMoreButton>Learn More</LearnMoreButton>
        </TextSection>
      </ContentSection>

      <LumiaSection>
        <LumiaContent>
          <LumiaText>
            <LumiaTitle>Lumia Furniture: Illuminating Your Space</LumiaTitle>
            <ContentText>
              At Lumia Furniture, we believe that furniture should do more than
              just fill a room—it should illuminate your life. Our unique
              designs blend form and function, creating pieces that are not only
              beautiful but also enhance your daily living experience.
            </ContentText>
            <ContentText>
              Inspired by the play of light and shadow, our furniture
              incorporates innovative lighting elements that transform your
              space throughout the day. From subtle ambient glows to statement
              pieces that command attention, Lumia Furniture brings a new
              dimension to interior design.
            </ContentText>
            <ContentText>
              Crafted with sustainable materials and cutting-edge technology,
              each Lumia piece is a testament to our commitment to quality,
              creativity, and environmental responsibility. Experience the Lumia
              difference and let your furniture shine.
            </ContentText>
          </LumiaText>
          <LumiaImage
            src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Lumia Furniture"
          />
        </LumiaContent>
      </LumiaSection>

      <ClientFeedbackSection>
        <SectionContent>
          <SectionTitle>What They're Saying</SectionTitle>
        </SectionContent>
      </ClientFeedbackSection>
    </AboutContainer>
  );
};

export default About;
