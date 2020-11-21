import React from 'react'
import { Col, Divider, Row, Typography } from 'antd'

export const Section1 = () => {
  const { Title, Paragraph } = Typography
  return (
    <Row justify="space-around" style={{ width: '100%', marginTop: '100px', marginBottom: '50px' }}>
      <Col>
        <Row justify="space-around">
          <Title>
            About
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid #1890ff' }} />
          </Title>
        </Row>
        <Row style={{ margin: '10px 0 40px' }}>
          <Paragraph style={{ textAlign: 'justify', fontSize: '16px' }}>
            Hello! My name is <b>Muhamad Zaky</b>. I'm currently <b>Frontend Developer</b> using ReactJS and .NET on the back.
          </Paragraph>
        </Row>
      </Col>
    </Row>
  )
}