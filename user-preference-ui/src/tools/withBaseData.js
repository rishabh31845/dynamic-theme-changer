import React from "react";

const withBaseData = (Component) => {
  const ComponentWithAuthData = (props) => {
    const userDetails = localStorage.getItem("logged_in_user");

    return <Component {...props} userData={JSON.parse(userDetails)}></Component>;
  };

  return ComponentWithAuthData;
};

export default withBaseData;
