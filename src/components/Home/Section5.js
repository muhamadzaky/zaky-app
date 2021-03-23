import React from 'react'
import { Button, Card, Col, Divider, List, Row, Tooltip, Typography } from 'antd'

const Section5 = ({ isMobile, data, openModal }) => {
  const { Title, Text } = Typography
  const { Item } = List
  return (
    <Row className="Projects-Section" justify="space-around" style={{ width: '100%', marginTop: '100px' }}>
      <Col>
        <Row justify="space-around">
          <Title>
            Projects
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid #1890ff' }} />
          </Title>
        </Row>
        <Row className={ isMobile ? "list-project" : "" }>
          <List
            grid={{ gutter: 16, column: isMobile ? 1 : 3 }}
            dataSource={data}
            renderItem={item => (
              <Item>
                <Card 
                  title={<Tooltip title={ item.company }><Text strong>{ item.company }</Text></Tooltip>}
                  style={{ width: '100%' }}
                  extra={<Button type="primary" shape="round" size="small" onClick={ () => openModal(item) }>More</Button>}
                  hoverable
                  bordered={false}
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
                  <Row style={{ marginTop: 20 }}>
                    <Col>
                      <Row>
                        <label>Position</label>
                      </Row>
                      <Row>
                        <Text className="description-value" strong>{ item.jobdesk }</Text>
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

export default Section5