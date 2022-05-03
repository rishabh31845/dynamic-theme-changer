import React, { useContext, useEffect, useState } from "react";
import PreferenceForm from "../../components/PreferenceForm";
import { message, Spin } from "antd";
import {
  updateUserPreference,
  fetchColorsMasterList,
  fetchUserData,
} from "./request";
import { StyledContainer } from "./styles";
import { ThemeContext } from "global/context";
import updateTheme from "tools/updateTheme";

const Preferences = ({ userData }) => {
  const [colorsList, setColorsList] = useState([]);
  const setTheme = useContext(ThemeContext);

  useEffect(() => {
    handleColorsList();
  }, []);

  const handleColorsList = () => {
    fetchColorsMasterList()
      .then((res) => {
        setColorsList([...res]);
      })
      .catch((err) => {
        message.error(
          "There is some internal error. Please try after sometime",
          5
        );
      });
  };

  const handleUpdatePreference = (values) => {
    const userConfigs = userData.userConfiguration;

    userConfigs.forEach((config) => {
      if (config.configKey === "primary_theme_color") {
        config.configValue = values["primary_theme_color"];
      }
    });

    updateUserPreference(userConfigs[0].id, userConfigs[0])
      .then((res) => {
        message.success("Preference Updated Successfully", 4);
        setTheme(updateTheme({ primary: values["primary_theme_color"] }));
        fetchUserData(userData.id).then((res) => {
          localStorage.setItem("logged_in_user", JSON.stringify(res));
        });
      })
      .catch((err) => {
        message.error(
          "There is some internal error. Please try after sometime",
          5
        );
      });
  };

  return (
    <StyledContainer>
      {colorsList && colorsList.length ? (
        <PreferenceForm
          colorsList={colorsList}
          userData={userData}
          updatePreference={handleUpdatePreference}
        ></PreferenceForm>
      ) : (
        <Spin style={{ position: "fixed", left: "50%", top: "50%" }}></Spin>
      )}
    </StyledContainer>
  );
};

export default Preferences;
