import React from "react";
import styled from "styled-components";

const ShopContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// New Products Section
const NewProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  height: 70vh;
`;

const MainProduct = styled.div`
  grid-row: span 2;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
`;

const SideProduct = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
`;

const ProductInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #4a4a4a;
`;

// Featured Items Section
const FeaturedSection = styled(Section)`
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 12px;
`;

// Category Section
const CategorySection = styled(Section)`
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 12px;
`;

// Special Collection Section
const SpecialCollectionSection = styled(Section)`
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  padding: 3rem;
  border-radius: 12px;
  color: white;
  text-align: center;
`;

const CollectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CollectionDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ExploreButton = styled.button`
  background-color: white;
  color: #6a11cb;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const Shop = () => {
  return (
    <ShopContainer>
      <Title>Our Collection</Title>

      <Section>
        <SectionTitle>New Arrivals</SectionTitle>
        <NewProductsGrid>
          <MainProduct
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')`,
            }}
          >
            <ProductInfo>
              <ProductName>Luxurious Sofa</ProductName>
              <ProductPrice>$1,299</ProductPrice>
            </ProductInfo>
          </MainProduct>
          <SideProduct
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`,
            }}
          >
            <ProductInfo>
              <ProductName>Modern Dining Table</ProductName>
              <ProductPrice>$799</ProductPrice>
            </ProductInfo>
          </SideProduct>
          <SideProduct
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`,
            }}
          >
            <ProductInfo>
              <ProductName>Cozy Bed Frame</ProductName>
              <ProductPrice>$999</ProductPrice>
            </ProductInfo>
          </SideProduct>
        </NewProductsGrid>
      </Section>

      <FeaturedSection>
        <SectionTitle>Featured Items</SectionTitle>
        {/* Featured component will be imported here */}
      </FeaturedSection>

      <CategorySection>
        <SectionTitle>Living Room</SectionTitle>
        {/* Living Room component will be imported here */}
      </CategorySection>

      <CategorySection>
        <SectionTitle>Bedroom</SectionTitle>
        {/* Bedroom component will be imported here */}
      </CategorySection>

      <CategorySection>
        <SectionTitle>Dining Room</SectionTitle>
        {/* Dining Room component will be imported here */}
      </CategorySection>

      <CategorySection>
        <SectionTitle>Office</SectionTitle>
        {/* Office component will be imported here */}
      </CategorySection>

      <SpecialCollectionSection>
        <CollectionTitle>Summer Collection 2023</CollectionTitle>
        <CollectionDescription>
          Discover our latest collection inspired by the warmth and vibrancy of
          summer. Bring the outdoors in with our nature-inspired designs and
          refreshing color palettes.
        </CollectionDescription>
        <ExploreButton>Explore Collection</ExploreButton>
      </SpecialCollectionSection>
    </ShopContainer>
  );
};

export default Shop;
