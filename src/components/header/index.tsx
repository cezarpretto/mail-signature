import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  img {
    width: 50px;
    background-color: #FFF;
    border-radius: 50px;
  }
`;

export const Header: React.FC = () => {
  return (
    <>
      <Layout.Header>
        <LogoWrapper>
          <img src="logo.png" alt="logo" />
        </LogoWrapper>
      </Layout.Header>
    </>
  );
}