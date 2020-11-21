import React from 'react'
import { Card, Divider, Row, List, Typography, Col, Avatar } from 'antd'

const renderList = (opt) => {
  const { Item } = List
  return (
    <List
      grid={{ gutter: 16, column: opt.isMobile ? 1 : 4 }}
      dataSource={opt.data}
      renderItem={item => (
        <Item>
          <Card 
            title={item.title}
            extra={<Avatar src={ item.logo } />}
          >
            { `${item.progress}%` }
          </Card>
        </Item>
      )}
    />
  )
}

export const Section3 = (opt) => {
  const { Title } = Typography
  return (
    <Row justify="space-around" style={{ width: '100%', marginTop: '100px' }}>
      { 
        opt.isMobile ? 
        <>
          <Row>
            <Col>
              <Title>
                Skill
                <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid blue' }} />
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              { renderList(opt) }
            </Col>
          </Row>
        </>
        :
        <>
          <Col span={2}>
            <Title>
              Skill
              <Divider type="vertical" style={{ margin: 0, marginTop: '5px', borderTop: '1px solid blue' }} />
            </Title>
          </Col>
          <Col span={22}>
            { renderList(opt) }
          </Col>
        </>
      }
    </Row>
  )
}