import React from 'react'
import { Card, Col, Divider, List, Row, Typography } from 'antd'

export const Section5 = () => {
  const { Title } = Typography
  const { Item } = List
  const data = [
    {
      title: '.NET Framework',
    },
    {
      title: 'React JS',
    },
    {
      title: '.NET Core',
    },
    {
      title: 'Angular JS',
    },
  ]
  return (
    <Row justify="space-around" style={{ width: '100%', marginTop: '50px' }}>
      <Col>
        <Row justify="space-around">
          <Title>
            Projects
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid blue' }} />
          </Title>
        </Row>
        <Row>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={item => (
              <Item>
                <Card title={item.title}>Card content</Card>
              </Item>
            )}
          />
        </Row>
      </Col>
    </Row>
  )
}