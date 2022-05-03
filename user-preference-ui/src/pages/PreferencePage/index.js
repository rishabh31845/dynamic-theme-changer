import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "templates";
import withBaseData from "tools/withBaseData";
import withRouter from "tools/withRouter";
import Preferences from "modules/preferences";
import { ThemeContext } from "global/context";
import updateTheme from "tools/updateTheme";

const PreferencePage = (props) => {
  const { userData } = props;
  const navigate = useNavigate();

  const setTheme = useContext(ThemeContext);

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    } else {
      setTheme(
        updateTheme({ primary: userData.userConfiguration[0].configValue })
      );
    }
  }, []);

  return (
    <PageTemplate name="Preference Page" userData={userData}>
      <Preferences userData={userData}></Preferences>
    </PageTemplate>
  );
};

export default withRouter(withBaseData(PreferencePage));
