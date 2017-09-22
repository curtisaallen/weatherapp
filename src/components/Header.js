import React from 'react';

const Header = ({city, region}) => (
 <h1 id="title">{`${city}, ${region}`}</h1>
);

export default Header;
