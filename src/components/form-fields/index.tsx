import React, { useState } from 'react';
import { Button, Input, Space, Form, Row, Col } from 'antd';
import styled from 'styled-components';
import { MaskedInput } from "antd-mask-input";
import { InputFileToBase64 } from '../input-file-to-base64';

const ButtonFullWidth = styled(Button)`
  margin-top: 10px;
  width: 100%;
`;

const H1 = styled.h1`
  padding: 0 5px 5px 5px;
`;

export type SignatureData = {
  name: string;
  email: string;
  phone?: string;
  cellphone: string;
  city: string;
  obs?: string;
  website?: string;
  role: string;
  base64Image: string | null;
}

type Props = {
  onSave: (data: SignatureData) => void;
}

export const FormFields: React.FC<Props> = ({ onSave }) => {
  const [base64Image, setBase64Image] = useState<string | null>(null);

  const onFinish = (data: SignatureData) => {
    data.base64Image = base64Image;
    onSave(data);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleOnChangeFile = (data: string) => {
    setBase64Image(data)
    console.log({ data });
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <H1>Dados da assinatura</H1>
        </Col>
      </Row>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Form
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
          labelAlign="left"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Cargo"
            name="role"
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Telefone"
            name="phone"
            rules={[{ required: false }]}
          >
            <MaskedInput mask="(00) 0000-0000" />
          </Form.Item>

          <Form.Item
            label="Celular"
            name="cellphone"
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <MaskedInput mask="(00) 00000-0000" />
          </Form.Item>

          <Form.Item
            label="Site"
            name="website"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Cidade"
            name="city"
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Obs"
            name="obs"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Row>
            <Col span={24}>
              <InputFileToBase64 onChange={handleOnChangeFile} />
            </Col>
          </Row>

          <Form.Item wrapperCol={{}}>
            <ButtonFullWidth type="primary" htmlType="submit" >
              Gerar Assinatura
            </ButtonFullWidth>
          </Form.Item>
        </Form>
      </Space>
    </>
  );
};
