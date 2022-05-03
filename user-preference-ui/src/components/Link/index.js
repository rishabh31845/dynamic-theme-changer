import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink, StyledAnchor, StyledButton, StyledCaption } from './styles';

const Link = ({ clickHandle, to, href, disabled, ...props }) => {
  if (to) {
    return <StyledNavLink {...props} to={disabled ? '' : to} />;
  }

  if (href) {
    return <StyledAnchor {...props} href={disabled ? '' : href} />;
  }

  if (typeof clickHandle === 'function') {
    return <StyledButton {...props} onClick={disabled ? null : clickHandle} type="button" />;
  }

  return <StyledCaption disabled={disabled} {...props} />;
};

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  clickHandle: PropTypes.func,
  disabled: PropTypes.bool,
};

Link.defaultProps = {
  href: null,
  to: null,
  clickHandle: null,
  disabled: false,
};

export default Link;
