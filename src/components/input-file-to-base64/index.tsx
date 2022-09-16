import React, { ChangeEvent, useState } from 'react';
import { Row, Col, Image } from 'antd';

type Props = {
  onChange: (data: string) => void;
}

export const InputFileToBase64: React.FC<Props> = ({ onChange }) => {
  const [base64Image, setBase64Image] = useState<string | null>(null)
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    const file = files.length ? files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        setBase64Image(reader.result as string);
        onChange(reader.result as string);
      };
    }
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <input type="file" onChange={handleOnChange} />
        </Col>
      </Row>
      {
        base64Image && (
          <Row>
            <Col span={12}>
              <Image
                width={100}
                src={base64Image}
              />
            </Col>
          </Row>
        )
      }
    </>
    
  )
};
