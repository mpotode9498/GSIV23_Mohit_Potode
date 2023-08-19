import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Wrapper from "../../components/wrapper/Wrapper";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000)
  },[navigate]);

  return (
    <div className="error">
      <Wrapper>
        <span className="bigText">404</span>
        <br />
        <span className="smallText">Page not found!</span>
        <br/>
        <br/>
        <span style={{color: 'red', margin: '30px'}}>Redirecting to homepage in 5 seconds</span>
      </Wrapper>
    </div>
  );
};

export default Error;
