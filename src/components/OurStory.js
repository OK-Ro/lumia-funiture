import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const StoryContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const ParallaxSection = styled.section`
  height: 50vh;
  background-image: url("path_to_your_parallax_image.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ParallaxOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ParallaxTitle = styled.h1`
  color: white;
  font-size: 5rem;
  text-transform: uppercase;
  z-index: 1;
  animation: ${fadeIn} 2s ease-out;
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const StoryCard = styled.div`
  display: flex;
  margin-bottom: 5rem;
  opacity: 0;
  animation: ${slideIn} 1s ease-out forwards;
  animation-delay: ${(props) => props.delay}s;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StoryImage = styled.img`
  width: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const StoryText = styled.div`
  width: 50%;
  padding: 2rem;
  background-color: ${(props) => props.bgColor || "#f8f8f8"};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TeamSection = styled.section`
  background-color: #f0f0f0;
  padding: 5rem 0;
  margin-bottom: 10rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const OurStory = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StoryContainer>
      <ParallaxSection
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundPositionY: scrollPosition * 0.5,
        }}
      >
        <ParallaxOverlay />
        <ParallaxTitle>Our Journey</ParallaxTitle>
      </ParallaxSection>

      <ContentSection>
        <StoryCard delay={0.2}>
          <StoryImage
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Our Founding"
          />
          <StoryText>
            <h2>Our Humble Beginnings</h2>
            <p>
              In 2010, we started with a simple idea: to bring quality furniture
              to every home. From a small workshop, we've grown into a brand
              that's loved nationwide.
            </p>
          </StoryText>
        </StoryCard>

        <StoryCard delay={0.4}>
          <StoryText bgColor="#e8e8e8">
            <h2>Craftsmanship at Heart</h2>
            <p>
              We believe in the power of handcrafted pieces. Each item in our
              collection is made with care, blending traditional techniques with
              modern design.
            </p>
          </StoryText>
          <StoryImage
            src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Our Craftsmanship"
          />
        </StoryCard>

        <StoryCard delay={0.6}>
          <StoryImage
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Sustainability"
          />
          <StoryText>
            <h2>Committed to Sustainability</h2>
            <p>
              We're dedicated to reducing our environmental impact. From
              sourcing eco-friendly materials to implementing green practices in
              our production, we're working towards a more sustainable future.
            </p>
          </StoryText>
        </StoryCard>
      </ContentSection>

      <TeamSection>
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Meet Our Team
        </h2>
        <TeamGrid>
          <TeamMember>
            <TeamMemberImage
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Team Member 1"
            />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Team Member 2"
            />
            <h3>John Smith</h3>
            <p>Head of Design</p>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Team Member 3"
            />
            <h3>Emily Brown</h3>
            <p>Lead Craftsperson</p>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Team Member 4"
            />
            <h3>Michael Johnson</h3>
            <p>Sustainability Manager</p>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </StoryContainer>
  );
};

export default OurStory;
