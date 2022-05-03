import React from "react";
import PropTypes from "prop-types";
import withRouter from "tools/withRouter";
import { HomeOutlined, ProfileOutlined } from "@ant-design/icons";
import { StyledRoot, StyledLayout, StyledContent } from "./styles";
import LetftMenu from "components/LetftMenu";
import { Spin } from "antd";

const PageTemplate = ({
  children,
  name,
  position,
  userData,
  scrollContent,
}) => {
  let menuItems = [
    {
      key: 1,
      id: "home",
      path: "/",
      title: "Home",
      icon: HomeOutlined,
    },
    {
      key: 2,
      id: "preference",
      path: "/preference",
      title: "Preference",
      icon: ProfileOutlined,
    },
  ];

  return (
    <StyledRoot>
      {name && userData ? (
        <>
          <LetftMenu menuItems={menuItems} />
          <StyledLayout className="styled-layout">
            <StyledContent scroll={scrollContent ? 1 : 0} position={position}>
              {children}
            </StyledContent>
          </StyledLayout>
        </>
      ) : (
        <Spin style={{ position: "fixed", left: "50%", top: "50%" }}></Spin>
      )}
    </StyledRoot>
  );
};

PageTemplate.propTypes = {
  scrollContent: PropTypes.bool,
  children: PropTypes.node.isRequired,
  sideBarCollapsed: PropTypes.bool,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  suffix: PropTypes.node,
  hideProfileBarButtons: PropTypes.bool,
  position: PropTypes.string,
};

PageTemplate.defaultProps = {
  scrollContent: false,
  rightSideContainer: null,
  dummyLoginStore: {},
  sideBarCollapsed: false,
  withoutHeader: false,
  title: "",
  suffix: null,
  hideProfileBarButtons: false,
  position: "relative",
};

export default withRouter(PageTemplate);
