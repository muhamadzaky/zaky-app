import React from 'react'
import { Card, Divider, Row, List, Typography } from 'antd'

export const Section3 = () => {
  const { Item } = List
  const { Title } = Typography
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
      <Title>
        Skill
        <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid blue' }} />
      </Title>
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
  )
}