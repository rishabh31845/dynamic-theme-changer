import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "templates";
import withBaseData from "tools/withBaseData";
import withRouter from "tools/withRouter";
import Login from "modules/login";

const LoginPage = (props) => {
  const { userData } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, []);

  return <Login></Login>;
};

export default withRouter(withBaseData(LoginPage));
