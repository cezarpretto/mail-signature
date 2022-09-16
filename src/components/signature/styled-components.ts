import styled from 'styled-components';
import { Col } from 'antd';

export const Content = styled.div`
  width: 520px;
  height: 200px;
  margin: 15px 0px 15px 15px;
  padding-top: 10px;
  background-color: #FFF;
  height: 200px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DataContent = styled.div`
  height: 100%;
  padding: 5px;
  border-right: double;
`;

export const DataContentWrapper = styled(Col)`
  padding-left: 10px;
  font-size: 12px;
  line-height: 1;
`;

export const H1 = styled.h1`
  padding: 0 5px 5px 5px;
`;
