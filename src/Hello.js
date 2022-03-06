import PropTypes from 'prop-types';
import React from 'react';

const Hello = ({ name = 'World!' }) => <h1> Hello, {name} </h1>;

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: 'World!',
};

export default Hello;
