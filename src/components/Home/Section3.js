import React from 'react'
import { Card, Divider, Row, List, Typography, Col, Avatar } from 'antd'

export const Section3 = (opt) => {
  const { Item } = List
  const { Title } = Typography
  return (
    <Row justify="space-around" style={{ width: '100%', marginTop: '100px' }}>
      <Col span={2}>
        <Title style={ opt.isMobile ? { writingMode: 'vertical-rl', textOrientation: 'upright', margin: 0 } : {} }>
          Skill
          <Divider type="vertical" style={{ margin: 0, marginTop: '5px', borderTop: '1px solid blue' }} />
        </Title>
      </Col>
      <Col span={22}>
        <List
          grid={{ gutter: 16, column: opt.isMobile ? 1 : 4 }}
          dataSource={opt.data}
          renderItem={item => (
            <Item>
              <Card 
                title={item.title}
                style={{ width: opt.isMobile ? '350px' : '250px' }}
                extra={<Avatar src={ item.logo } />}
              >
                { `${item.progress}%` }
              </Card>
            </Item>
          )}
        />
      </Col>
    </Row>
  )
}