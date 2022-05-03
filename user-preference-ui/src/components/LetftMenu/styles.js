import { Anchor, Menu } from "antd";
import styled from "styled-components";

const StyledLayout = styled.div`
  &.ant-btn-primary {
    color: #fdfdfd;
    background-color: #007f00;
  }
`;

const StyledMenu = styled(Menu)`
  background: black 
  &.ant-menu-dark.ant-menu-inline {
    border-right: 0;
    background-color: black !important;
  }
  &.ant-menu.ant-menu-dark {
    background-color: black !important;
  }
  &.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    color: white;
    background-color: black !important;
  }
`;

const StyledMenuItem = styled(Menu.Item)`
    &:hover {
        color: white;
    }
    &.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
        color: white;
        background-color: white !important;
    }
    .ant-anchor-link-title {
        color: white;
    }
    &:hover.ant-anchor-link-title} {
        color: white;
    }
`;

const StyledAnchor = styled(Anchor.Link)`
  background-color: white;
  &:hover {
    color: white;
  }
`;

export { StyledMenu, StyledMenuItem, StyledAnchor, StyledLayout };
