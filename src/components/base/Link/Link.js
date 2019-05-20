import React from 'react';
import { Link } from 'react-router-dom'
import { func, string, node } from 'prop-types';

const LinkCustom = ({ children, handleClick, url }) =>  (
  <Link to={url} onClick={handleClick}>
    {children}
  </Link>
);

LinkCustom.defaultProps = {
  url: "#",
  handleClick: () => undefined,
};

LinkCustom.propTypes = {
  children: node.isRequired,
  handleClick: func,
  url: string,
};

export default LinkCustom;
