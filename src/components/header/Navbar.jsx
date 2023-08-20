import React, { useState } from "react";
import { PrimaryNav, Menu, SearchInput } from "./styled";
import { useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    if (!inputValue) return;
    navigate(`/search/${inputValue}`);

    setTimeout(() => {
      setInputValue("");
    }, 2000);
  };

  return (
    <>
      <PrimaryNav>
        <Menu>
          <SearchInput
            type="text"
            value={inputValue}
            placeholder=" Search..."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={searchHandler}
            style={{ width: "50px", marginLeft: "10px" }}
          >
            <AiOutlineSearch />
          </button>
        </Menu>
        <AiFillHome
          style={{ width: "40px", height: "50px" }}
          onClick={() => navigate("/")}
          data-testid='home-icon'
        />
      </PrimaryNav>
    </>
  );
};
export default Navbar;
