import React from 'react';
import { SignatureData } from '../form-fields';
import { Row, Col, Button } from 'antd';
import { PhoneOutlined, PushpinOutlined, MailOutlined, LinkOutlined, SaveFilled } from '@ant-design/icons'
import html2canvas from 'html2canvas';
import { Content, DataContent, DataContentWrapper, H1, ImageContainer } from './styled-components';

type Props = {
  signatureData: SignatureData | null;
}

export const Signature: React.FC<Props> = ({ signatureData }) => {
  const downloadURI = (uri: string, name: string) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    link.click();
    link.remove()
  }

  const saveToPng = () => {
    const element = document.querySelector('#signature') as HTMLElement;
    if (element) {
      html2canvas(element).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png')
        downloadURI(`data:${dataURL}`, `signature-${signatureData?.name}.png`)
      }).catch((err) => {
        console.error(err);
      })
    }
  };

  return signatureData && (
    <>
      <Row>
        <Col span={3}>
          <H1>Resultado</H1>
        </Col>
        <Col span={3}>
          <Button onClick={saveToPng}>
            <SaveFilled /> Salvar
          </Button>
        </Col>
      </Row>
      <Content id="signature">
        <Row>
          <Col span={12}>
            <DataContent>
              <Row>
                <DataContentWrapper>
                  <strong>Cordialmente,</strong><br /><br />
                  <strong>{signatureData.name}</strong><br />
                  {signatureData.role}
                  <br />
                  <br />
                  <PushpinOutlined /> Unidade {signatureData.city} <br />
                  <PhoneOutlined /> {signatureData.phone} <br />
                  <PhoneOutlined /> {signatureData.cellphone} <br />
                  <MailOutlined /> {signatureData.email} <br />
                  {
                    signatureData.website && <><LinkOutlined /> {signatureData.website} <br /></>
                  }
                  <br />
                  {signatureData.obs}
                </DataContentWrapper>
              </Row>
              <Row>

              </Row>
            </DataContent>
          </Col>
          <Col span={12}>
            <ImageContainer>
              <img width={175} src={signatureData?.base64Image || ''} alt="logo" />
            </ImageContainer>
          </Col>
        </Row>
      </Content>
    </>
  );
};
