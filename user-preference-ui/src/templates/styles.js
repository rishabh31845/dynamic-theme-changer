import { Layout, Popover } from "antd";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// import { Block, Text } from 'components/atoms';
// import { WHITE, GREY200 } from 'theme';

const { Content, Header } = Layout;

const font = themeGet("font.mainSet", "Titillium Web, sans-serif");

const StyledRoot = styled(Layout)`
  font-family: ${font};
  min-height: 100%;
  height: 100%;
  max-height: 100vh;
  overflow-y: hidden;
  flex-direction: row !important;
`;

const StyledLayout = styled(Layout)`
  vertical-align: top;
  // padding-top: 24px;
  margin-bottom: -40px;
  &.ant-layout {
    position: relative;
    background-color: grey;
    flex-direction: row;
  }
  margin-left: 0px;
  transition: all 0.2s ease 0s;
`;

const StyledContent = styled(Content)`
  font-family: ${font};
  background-color: grey
  padding: 30px;
  padding-bottom: 0px;
  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "hidden")};
  position: ${({ position }) => (!position ? "relative" : position)};
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  max-width: 100%;
  max-height: 95vh;
  // margin: 30px auto;
  margin-bottom: 0px;
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 30px;
    align-self: flex-end;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

const StyledTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
`;

export { StyledRoot, StyledLayout, StyledContent, StyledTitle };
