import React from 'react';
import styled from 'styled-components';

const HeaderComponentStyles = styled.header`
  align-items: center;
  background-color: var(--primary-color);
  display: flex;
  height: 100px;
  justify-content: center;
  padding: 10px;

  img {
    height: 100%;
  }
`;

const HeaderComponent = ({ logo }) => {
  return (
    <HeaderComponentStyles>
      <img src={logo} alt="Logo de los power rangers" />
    </HeaderComponentStyles>
  )
}

export default HeaderComponent;
