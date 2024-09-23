import React from "react";
import styled from "styled-components";
import {
  FaCouch,
  FaPencilRuler,
  FaTruck,
  FaPalette,
  FaRulerCombined,
  FaHandsHelping,
  FaRecycle,
  FaTree,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

const ServicesContainer = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;
`;

const BannerSection = styled.div`
  background-image: url("https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerTitle = styled.h1`
  font-size: 72px;
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ContentSection = styled.div`
  max-width: 1800px;
  margin: 100px auto;
  padding: 0 15px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

const ServiceColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ServiceCard = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  transition: all 0.3s ease;
  height: 15vh;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 48px;
  color: #4caf50;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
  color: #333;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const CentralImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CentralImage = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const StrategySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 100px;
  background-color: #f9f9f9;
  padding: 50px;
  border-radius: 10px;
  height: 40vh;
  margin-bottom: 30rem;
`;

const StrategyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const StrategyContent = styled.div`
  padding: 20px 0;
`;

const StrategyTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: 600;
  color: #333;
`;

const StrategyDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const StrategyStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
`;

const StatItem = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const StatIcon = styled.span`
  margin-right: 10px;
  color: #4caf50;
`;

const StatBar = styled.div`
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  position: relative;
`;

const StatProgress = styled.div`
  height: 100%;
  background-color: #4caf50;
  border-radius: 3px;
  width: ${(props) => props.percentage}%;
`;

const StatPercentage = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
  color: #4caf50;
`;

const StrategiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const StrategyCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StrategyCardTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const StrategyCardIcon = styled.span`
  margin-right: 10px;
  color: #4caf50;
  font-size: 24px;
`;

const StrategyCardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const Services = () => {
  const services = [
    {
      icon: <FaCouch />,
      title: "Custom Furniture",
      description:
        "Tailor-made furniture pieces designed to fit your unique style and space.",
    },
    {
      icon: <FaPencilRuler />,
      title: "Interior Design",
      description:
        "Expert interior design services to transform your living spaces.",
    },
    {
      icon: <FaTruck />,
      title: "Delivery & Assembly",
      description:
        "Prompt delivery and professional assembly of your furniture.",
    },
    {
      icon: <FaPalette />,
      title: "Color Consultation",
      description:
        "Professional advice on color schemes to enhance your interiors.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Space Planning",
      description:
        "Optimize your living spaces with our expert space planning services.",
    },
    {
      icon: <FaHandsHelping />,
      title: "After-Sales Support",
      description:
        "Dedicated support for all your post-purchase needs and queries.",
    },
  ];

  const stats = [
    { icon: <FaPencilRuler />, label: "Custom Designs", percentage: 92 },
    { icon: <FaTruck />, label: "On-Time Delivery", percentage: 98 },
    { icon: <FaPalette />, label: "Color Matching", percentage: 95 },
    {
      icon: <FaHandsHelping />,
      label: "Customer Satisfaction",
      percentage: 99,
    },
  ];

  const strategies = [
    {
      icon: <FaRecycle />,
      title: "Sustainable Materials",
      description:
        "We prioritize the use of eco-friendly and sustainable materials in our furniture production, reducing our environmental impact.",
    },
    {
      icon: <FaTree />,
      title: "Responsible Sourcing",
      description:
        "Our wood is sourced from responsibly managed forests, ensuring the preservation of natural resources for future generations.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance",
      description:
        "Rigorous quality control measures are in place to ensure that every piece of furniture meets our high standards of craftsmanship.",
    },
    {
      icon: <FaUserFriends />,
      title: "Collaborative Design",
      description:
        "We involve our customers in the design process, creating furniture that truly reflects their personal style and needs.",
    },
  ];

  return (
    <ServicesContainer>
      <BannerSection>
        <BannerTitle>Our Services</BannerTitle>
      </BannerSection>

      <ContentSection>
        <ServicesGrid>
          <ServiceColumn>
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServiceColumn>
          <CentralImageContainer>
            <CentralImage
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Furniture Showcase"
            />
          </CentralImageContainer>
          <ServiceColumn>
            {services.slice(3).map((service, index) => (
              <ServiceCard key={index + 3}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServiceColumn>
        </ServicesGrid>

        <StrategySection>
          <StrategyImage
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Interior Design Strategy"
          />
          <StrategyContent>
            <StrategyTitle>Our Furniture Design Strategy</StrategyTitle>
            <StrategyDescription>
              At our furniture company, we blend timeless craftsmanship with
              modern design principles. Our strategy focuses on creating pieces
              that not only beautify your space but also enhance your daily
              living experience. From custom designs to efficient delivery, we
              ensure every step of your furniture journey is exceptional.
            </StrategyDescription>
            <StrategyStats>
              {stats.map((stat, index) => (
                <StatItem key={index}>
                  <StatLabel>
                    <StatIcon>{stat.icon}</StatIcon>
                    {stat.label}
                  </StatLabel>
                  <StatBar>
                    <StatProgress percentage={stat.percentage} />
                  </StatBar>
                  <StatPercentage>{stat.percentage}%</StatPercentage>
                </StatItem>
              ))}
            </StrategyStats>
            <StrategiesGrid>
              {strategies.map((strategy, index) => (
                <StrategyCard key={index}>
                  <StrategyCardTitle>
                    <StrategyCardIcon>{strategy.icon}</StrategyCardIcon>
                    {strategy.title}
                  </StrategyCardTitle>
                  <StrategyCardDescription>
                    {strategy.description}
                  </StrategyCardDescription>
                </StrategyCard>
              ))}
            </StrategiesGrid>
          </StrategyContent>
        </StrategySection>
      </ContentSection>
    </ServicesContainer>
  );
};

export default Services;
