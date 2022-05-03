import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { maxWidth, minWidth, fontSize, fontWeight, display, lineHeight } from 'styled-system';

const StyledNavLink = styled(RouterNavLink)`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  text-decoration: none;
  appearance: none;
  box-shadow: none;
  outline: none;
  border: none;
  background-color: transparent;
  transition: color 250ms ease-out;
  font-size: 14px;
  padding: 0;
  line-height: 1.25;
  color: ${({ color }) => color || '#00a1fc'};
  ${maxWidth};
  ${minWidth};
  ${fontSize};
  ${fontWeight};
  ${display};
  ${lineHeight};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: blue;
  }

  &:focus {
    outline: none;
  }
`;

const StyledAnchor = StyledNavLink.withComponent('a');

const StyledButton = StyledNavLink.withComponent('button');

const StyledCaption = StyledNavLink.withComponent('span');

export { StyledNavLink, StyledAnchor, StyledButton, StyledCaption };
