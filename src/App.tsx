import React, { useState } from 'react';
import { FormFields, SignatureData } from './components/form-fields';
import { Signature } from './components/signature';
import { Layout, Col, Row } from 'antd';
import styled from 'styled-components';
import { Header } from './components/header';

const { Content } = Layout;

const LogoWrapper = styled.div`
  img {
    width: 50px;
    background-color: white;
    border-radius: 50px;
  }
`;

const StyledContent = styled(Content)`
  padding: 15px;
`;

const App: React.FC = () => {
  const [signatureData, setSignatureData] = useState<SignatureData | null>(null)

  const handleOnSave = (data: SignatureData) => {
    console.log(data);
    setSignatureData(data)
  }
  return (
    <>
      <Layout>
        <Header />
        <StyledContent>
          <Row>
            <Col span={12}>
              <FormFields onSave={handleOnSave} />
            </Col>
            <Col span={12}>
              <Signature signatureData={signatureData} />  
            </Col>
          </Row>
        </StyledContent>
      </Layout>
    </>
  );
}

export default App;
