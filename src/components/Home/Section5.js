import React from 'react'
import { Button, Card, Col, Divider, List, Row, Tooltip, Typography } from 'antd'

export const Section5 = (opt) => {
  const { Title, Text } = Typography
  const { Item } = List
  return (
    <Row justify="space-around" style={{ width: '100%', marginTop: '100px' }}>
      <Col>
        <Row justify="space-around">
          <Title>
            Projects
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid #1890ff' }} />
          </Title>
        </Row>
        <Row>
          <List
            grid={{ gutter: 16, column: opt.isMobile ? 1 : 3 }}
            dataSource={opt.data}
            renderItem={item => (
              <Item>
                <Card 
                  title={<Tooltip title={ item.company }>{ item.company }</Tooltip>}
                  style={{ width: opt.isMobile ? '81.5%' : '350px' }}
                  extra={<Button type="primary" shape="round" size="small" onClick={ () => opt.openModal(item) }>More</Button>}
                >
                  <Row>
                    <Col>
                      <Row>
                        <label>Description</label>
                      </Row>
                      <Row>
                        <Text className="description-value" strong>{ item.description }</Text>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col>
                      <Row>
                        <label>Working Date</label>
                      </Row>
                      <Row>
                        <Text className="description-value" strong>{ `${item.start} - ${item.end ? item.end : 'Present'}` }</Text>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Item>
            )}
          />
        </Row>
      </Col>
    </Row>
  )
}