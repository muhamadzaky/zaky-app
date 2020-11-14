import { Col, Divider, Row, Timeline, Typography } from 'antd'
import React from 'react'

export const Section4 = () => {
  const { Title } = Typography
  const { Item } = Timeline
  return (
    <Row justify="space-around" style={{ width: '100%', marginTop: '50px' }}>
      <Col>
        <Row justify="space-around">
          <Title>
            Experiences
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid blue' }} />
          </Title>
        </Row>
        <Row justify="space-around">
          <Timeline>
            <Item>Create a services site 2015-09-01</Item>
            <Item>Solve initial network problems 2015-09-01</Item>
            <Item>Technical testing 2015-09-01</Item>
            <Item>Network problems being solved 2015-09-01</Item>
          </Timeline>
        </Row>
      </Col>
    </Row>
  )
}