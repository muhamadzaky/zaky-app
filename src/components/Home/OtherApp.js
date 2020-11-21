import React from 'react'
import { Button, Col, Divider, Radio, Row, Typography } from 'antd'

export const OtherApp = (opt) => {
  const { Title } = Typography
  console.log(opt)
  return (
    <Row justify="space-around" style={{ width: '100%', marginTop: '100px' }}>
      <Col>
        <Row justify="space-around">
          <Title>
            Other App
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid #1890ff' }} />
          </Title>
        </Row>
        <Row justify="space-around">
          <Radio.Group>
            { opt.data.list.map((item, idx) => { return ( <Button key={idx} href={item.link} target={item.target} htmlType="button">{item.app}</Button> ) }) }
          </Radio.Group>
        </Row>
      </Col>
    </Row>
  )
}