import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { getUsers } from "./request";
import { StyledContainer } from "./styles";
import UserLoginModal from "components/UserLoginModal";

const Login = ({ userData }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleUsers();
  }, []);

  const handleUsers = () => {
    getUsers().then((res) => {
      setUsers([...res]);
    });
  };

  const handleUserLogin = async (user) => {
    localStorage.setItem("logged_in_user", JSON.stringify(user));
    return navigate("/");
  };

  return (
    <StyledContainer>
      {users.length ? (
        <>
          <UserLoginModal
            usersList={users}
            submitUserLogin={handleUserLogin}
          ></UserLoginModal>
        </>
      ) : (
        <Spin style={{ position: "fixed", left: "50%", top: "50%" }}></Spin>
      )}
    </StyledContainer>
  );
};

export default Login;
