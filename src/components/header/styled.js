import styled from "styled-components";

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 50px;
  display: flex;
  background: #9b9b9b;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
`;

export const Menu = styled.div`
  display: flex;
  align-items: left;
  margin-right: -25px;
  @media screen and (max-width: 208px) {
    margin-left: none;
  }
`;

export const SearchInput = styled.input`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 380px;
`;
