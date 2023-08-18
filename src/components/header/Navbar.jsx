import React, { useState } from "react";
import { PrimaryNav, MenuLink, Menu } from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = () => {
    navigate(`/search/${query}`);
  };

  return (
    <>
      <PrimaryNav>
        <Menu>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={searchQueryHandler}>
            <AiOutlineSearch />
          </button>
          <AiFillHome style={{ width: 50, height: 50, marginLeft: 600 }} onClick={() => navigate('/')} />
          {/* <MenuLink to="/blog" activeStyle>
            Movies
          </MenuLink> */}
        </Menu>
      </PrimaryNav>
    </>
  );
};
export default Navbar;
