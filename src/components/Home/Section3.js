import React from 'react'
import { Card, Divider, Row, List, Typography, Col, Avatar, Popover } from 'antd'

const Section3 = ({ isMobile, data }) => {
  const { Title } = Typography
  const { Item } = List
  const renderList = () => {
    return (
      <List
        grid={{ gutter: 16, column: isMobile ? 2 : 5 }}
        dataSource={data}
        renderItem={item => (
          <Item>
            <Card 
              title={isMobile ? <Popover content={item.title} trigger="hover">{item.title}</Popover> : item.title}
              extra={<Avatar src={ item.logo } />}
              bordered={false}
              bodyStyle={{ display: 'none' }}
            />
          </Item>
        )}
      />
    )
  }
  return (
    <Row className="Skill-Section" justify="space-around" style={{ width: '100%', marginTop: '100px' }}>
      { 
        isMobile ? 
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
              { renderList() }
            </Col>
          </Row>
        </>
        :
        <>
          <Col span={3}>
            <Title>
              Skill
              <Divider type="vertical" style={{ margin: 0, marginTop: '5px', borderTop: '1px solid blue' }} />
            </Title>
          </Col>
          <Col span={21}>
            { renderList() }
          </Col>
        </>
      }
    </Row>
  )
}

export default Section3