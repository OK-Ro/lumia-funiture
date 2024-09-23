import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 60px 0 0;
  font-family: Arial, sans-serif;
`;

const FooterContent = styled.div`
  max-width: 160rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10rem;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  margin-bottom: 20px;
  min-width: 200px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #666;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;

  &:hover {
    color: #000;
  }
`;

const CopyrightSection = styled.div`
  background-color: #e8e8e8;
  padding: 20px 0;
  margin-top: 40px;
`;

const CopyrightText = styled.p`
  color: #666;
  font-size: 14px;
  text-align: center;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Customer Service</FooterTitle>
          <FooterLink to="/help-contact">Help & Contact Us</FooterLink>
          <FooterLink to="/returns-refunds">Returns & Refunds</FooterLink>
          <FooterLink to="/online-stores">Online Stores</FooterLink>
          <FooterLink to="/terms-conditions">Terms & Conditions</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Company</FooterTitle>
          <FooterLink to="/what-we-do">What We Do</FooterLink>
          <FooterLink to="/available-services">Available Services</FooterLink>
          <FooterLink to="/latest-posts">Latest Posts</FooterLink>
          <FooterLink to="/faqs">FAQs</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Social Media</FooterTitle>
          <FooterLink to="/twitter">Twitter</FooterLink>
          <FooterLink to="/instagram">Instagram</FooterLink>
          <FooterLink to="/tumblr">Tumblr</FooterLink>
          <FooterLink to="/pinterest">Pinterest</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Profile</FooterTitle>
          <FooterLink to="/account">My Account</FooterLink>
          <FooterLink to="/checkout">Checkout</FooterLink>
          <FooterLink to="/order-tracking">Order Tracking</FooterLink>
          <FooterLink to="/help-support">Help & Support</FooterLink>
        </FooterColumn>
      </FooterContent>
      <CopyrightSection>
        <CopyrightText>
          © {new Date().getFullYear()} Robert. All rights reserved.
        </CopyrightText>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
