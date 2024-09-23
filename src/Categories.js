import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";

const CategoriesWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 0;
  background-color: #ffffff;
`;

const CategoriesContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  padding: 0 1rem;
`;

const CategoryList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-bottom: 3rem;
`;

const CategoryItem = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "600" : "normal")};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${(props) => (props.active ? "#000" : "#777")};
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductItem = styled.div`
  position: relative;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProductItem}:hover & {
    transform: scale(1.05);
  }
`;

const ProductOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProductItem}:hover & {
    opacity: 1;
  }
`;

const QuickLook = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  margin-right: 1rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const WishlistButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #000;
  transition: color 0.3s ease;

  &:hover {
    color: #777;
  }
`;

const ProductInfo = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
  transition: opacity 0.3s ease;

  ${ProductItem}:hover & {
    opacity: 0;
  }
`;

const AddToCart = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.7rem 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProductItem}:hover & {
    opacity: 1;
  }
`;

const NewLabel = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #000;
  color: #fff;
  padding: 2px 8px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Home Decor",
    "Lighting",
    "Decoration",
    "Vases",
    "Basics",
  ];

  const products = [
    {
      id: 1,
      name: "Basket With Handles",
      price: 160,
      image:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg",
      isNew: true,
    },
    {
      id: 2,
      name: "Flower Vase",
      price: 170,
      originalPrice: 210,
      image:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg",
      isNew: true,
    },
    {
      id: 3,
      name: "Deco Accessory",
      price: 15,
      image:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-600x728.jpg",
    },
    {
      id: 4,
      name: "Wall Clock",
      price: 110,
      image:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg",
      isNew: true,
    },
    {
      id: 5,
      name: "Newspaper Storage",
      price: 90,
      image:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg",
    },
    {
      id: 6,
      name: "Pottery Vase",
      price: 60,
      image:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg",
    },
    {
      id: 7,
      name: "Rose Holdback",
      price: 24,
      originalPrice: 30,
      image:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg",
    },
    {
      id: 8,
      name: "Table Lamp",
      price: 240,
      image:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
      isNew: true,
    },
    {
      id: 9,
      name: "Decorative Plant",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=728&q=80",
    },
    {
      id: 10,
      name: "Wooden Shelf",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=728&q=80",
    },
    {
      id: 11,
      name: "Ceramic Bowl",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=728&q=80",
    },
    {
      id: 12,
      name: "Throw Pillow",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=728&q=80",
    },
  ];

  return (
    <CategoriesWrapper>
      <CategoriesContainer>
        <CategoryList>
          {categories.map((category) => (
            <CategoryItem
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryItem>
          ))}
        </CategoryList>
        <ProductGrid>
          {products.map((product) => (
            <ProductItem key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductOverlay>
                <QuickLook>
                  <FaSearch style={{ marginRight: "5px" }} /> Quick Look
                </QuickLook>
                <WishlistButton>
                  <FaHeart />
                </WishlistButton>
              </ProductOverlay>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>
                  {product.originalPrice && (
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "0.5rem",
                        color: "#777",
                      }}
                    >
                      ${product.originalPrice}
                    </span>
                  )}
                  ${product.price}
                </ProductPrice>
                <AddToCart>
                  <FaShoppingCart style={{ marginRight: "5px" }} /> Add to Cart
                </AddToCart>
              </ProductInfo>
              {product.isNew && <NewLabel>NEW</NewLabel>}
            </ProductItem>
          ))}
        </ProductGrid>
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};

export default Categories;
