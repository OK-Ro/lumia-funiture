import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14rem;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-size: 1.4rem;
  height: 200px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
    height: 80px;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 3rem;
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;

  &:hover > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 1.5rem;
    height: auto;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 1.3rem;

  &:hover {
    color: #007bff;
  }
`;

const Logo = styled(Link)`
  font-size: 5rem;
  font-weight: 900;
  color: #333;
  text-decoration: none;
  font-family: "Cormorant Garamond", serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-left: 3rem;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 3px 8px;
  font-size: 1rem;
`;

const NavToggler = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-left: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
  }
`;

const SearchIcon = styled.span`
  display: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MainToggler = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-left: 3rem;
  color: #333;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  z-index: 1000;
  min-width: 250px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    padding-left: 1.5rem;
    display: block;
    opacity: 1;
    visibility: visible;
    transform: none;
  }
`;

const DropdownColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.5rem;
  min-width: 200px;
`;

const DropdownTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #007bff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DropdownItem = styled.li`
  padding: 0.5rem 0;
`;

const DropdownLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const LoginText = styled.span`
  margin-left: 0.8rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  z-index: 1001;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

const MobileMenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MobileMenuItem = styled.li`
  border-bottom: 1px solid #333;
`;

const MobileMenuLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:active {
    background-color: #333;
  }
`;

const MobileMenuItemLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:active {
    background-color: #333;
  }
`;

const MobileSubMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #111;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const MobileSubMenuItem = styled.li`
  border-top: 1px solid #333;
`;

const MobileSubMenuLink = styled(Link)`
  display: block;
  padding: 1rem 3rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:active {
    background-color: #333;
  }
`;

const MobileMenuIcon = styled.span`
  margin-right: 1rem;
`;

const SearchOverlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  z-index: 1001;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: white;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const CloseSearchButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const toggleSubMenu = (key) => {
    setOpenSubMenu((prevState) => (prevState === key ? null : key));
  };

  const toggleSearch = () => {
    setSearchOpen((prevState) => !prevState);
  };

  return (
    <>
      <Navigation>
        <NavSection>
          <MenuList>
            <MenuItem>
              <MenuLink to="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/shop">Shop</MenuLink>
              <DropdownMenu style={{ width: "500px" }}>
                <DropdownColumn>
                  <DropdownTitle>Categories</DropdownTitle>
                  <DropdownItem>
                    <DropdownLink to="/shop/living-room">
                      Living Room
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/shop/bedroom">Bedroom</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/shop/dining-room">
                      Dining Room
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/shop/office">Office</DropdownLink>
                  </DropdownItem>
                </DropdownColumn>
                <DropdownColumn>
                  <DropdownTitle>Collections</DropdownTitle>
                  <DropdownItem>
                    <DropdownLink to="/shop/modern">Modern</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/shop/classic">Classic</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/shop/minimalist">
                      Minimalist
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/shop/rustic">Rustic</DropdownLink>
                  </DropdownItem>
                </DropdownColumn>
              </DropdownMenu>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/about">About</MenuLink>
              <DropdownMenu>
                <DropdownColumn>
                  <DropdownItem>
                    <DropdownLink to="/about/our-story">Our Story</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/about/craftsmanship">
                      Craftsmanship
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/about/sustainability">
                      Sustainability
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/about/showrooms">Showrooms</DropdownLink>
                  </DropdownItem>
                </DropdownColumn>
              </DropdownMenu>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/services">Services</MenuLink>
              <DropdownMenu>
                <DropdownColumn>
                  <DropdownItem>
                    <DropdownLink to="/services/design-consultation">
                      Design Consultation
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/services/custom-furniture">
                      Custom Furniture
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/services/delivery-assembly">
                      Delivery & Assembly
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink to="/services/financing">
                      Financing Options
                    </DropdownLink>
                  </DropdownItem>
                </DropdownColumn>
              </DropdownMenu>
            </MenuItem>
          </MenuList>
        </NavSection>
        <NavSection>
          <Logo to="/">Lumina</Logo>
        </NavSection>
        <NavSection>
          <IconWrapper>
            <Icon onClick={addToCart}>
              <FaShoppingCart />
              {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
            </Icon>
            <Icon>
              <FaUser />
              <LoginText>Login</LoginText>
            </Icon>
            <Icon>
              <FaSearch />
            </Icon>
            <SearchIcon onClick={toggleSearch}>
              <FaSearch />
            </SearchIcon>
            <NavToggler onClick={toggleMenu}>
              <FaBars />
            </NavToggler>
            <MainToggler>
              <FaBars />
            </MainToggler>
          </IconWrapper>
        </NavSection>
      </Navigation>
      <MobileMenu isOpen={menuOpen}>
        <MobileMenuList>
          <MobileMenuItemLink to="/account" onClick={toggleMenu}>
            <MobileMenuIcon>
              <FaUser />
            </MobileMenuIcon>
            Account
          </MobileMenuItemLink>
          <MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuItemLink to="/cart" onClick={toggleMenu}>
                <MobileMenuIcon>
                  <FaShoppingCart />
                </MobileMenuIcon>
                Cart
                {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
              </MobileMenuItemLink>
            </MobileMenuItem>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileMenuItemLink to="/" onClick={toggleMenu}>
              Home
            </MobileMenuItemLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileMenuLink onClick={() => toggleSubMenu("shop")}>
              Shop
              {openSubMenu === "shop" ? <FaAngleDown /> : <FaAngleRight />}
            </MobileMenuLink>
            <MobileSubMenu isOpen={openSubMenu === "shop"}>
              <MobileSubMenuItem>
                <MobileSubMenuLink to="/shop/living-room" onClick={toggleMenu}>
                  Living Room
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink to="/shop/bedroom" onClick={toggleMenu}>
                  Bedroom
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink to="/shop/dining-room" onClick={toggleMenu}>
                  Dining Room
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink to="/shop/office" onClick={toggleMenu}>
                  Office
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink to="/shop/modern" onClick={toggleMenu}>
                  Modern Collection
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink to="/shop/classic" onClick={toggleMenu}>
                  Classic Collection
                </MobileSubMenuLink>
              </MobileSubMenuItem>
            </MobileSubMenu>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileMenuLink onClick={() => toggleSubMenu("about")}>
              About
              {openSubMenu === "about" ? <FaAngleDown /> : <FaAngleRight />}
            </MobileMenuLink>
            <MobileSubMenu isOpen={openSubMenu === "about"}>
              <MobileSubMenuItem>
                <MobileSubMenuLink to="/about/our-story" onClick={toggleMenu}>
                  Our Story
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink
                  to="/about/craftsmanship"
                  onClick={toggleMenu}
                >
                  Craftsmanship
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink
                  to="/about/sustainability"
                  onClick={toggleMenu}
                >
                  Sustainability
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink to="/about/showrooms" onClick={toggleMenu}>
                  Showrooms
                </MobileSubMenuLink>
              </MobileSubMenuItem>
            </MobileSubMenu>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileMenuLink onClick={() => toggleSubMenu("services")}>
              Services
              {openSubMenu === "services" ? <FaAngleDown /> : <FaAngleRight />}
            </MobileMenuLink>
            <MobileSubMenu isOpen={openSubMenu === "services"}>
              <MobileSubMenuItem>
                <MobileSubMenuLink
                  to="/services/design-consultation"
                  onClick={toggleMenu}
                >
                  Design Consultation
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink
                  to="/services/custom-furniture"
                  onClick={toggleMenu}
                >
                  Custom Furniture
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink
                  to="/services/delivery-assembly"
                  onClick={toggleMenu}
                >
                  Delivery & Assembly
                </MobileSubMenuLink>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <MobileSubMenuLink
                  to="/services/financing"
                  onClick={toggleMenu}
                >
                  Financing Options
                </MobileSubMenuLink>
              </MobileSubMenuItem>
            </MobileSubMenu>
          </MobileMenuItem>
        </MobileMenuList>
      </MobileMenu>
      <SearchOverlay isOpen={searchOpen}>
        <CloseSearchButton onClick={toggleSearch}>
          <FaTimes />
        </CloseSearchButton>
        <SearchInput type="text" placeholder="Search..." />
      </SearchOverlay>
    </>
  );
};

export default Nav;
