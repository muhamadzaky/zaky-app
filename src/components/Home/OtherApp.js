import React from 'react'
import { Avatar, Card, Col, Divider, List, Row, Typography } from 'antd'

const OtherApp = ({ isMobile, data }) => {
  const { Title } = Typography
  const { Meta } = Card
  const { Item } = List
  return (
    <Row justify="space-around" style={{ width: '100%', marginTop: '100px' }}>
      <Col style={{ width: '100%' }}>
        <Row justify="space-around">
          <Title>
            Other App
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid #1890ff' }} />
          </Title>
        </Row>
        <Row justify="space-around">
          <List
            grid={{ gutter: 16, column: isMobile ? 1 : 3 }}
            dataSource={data.list}
            style={{ width: '100%' }}
            renderItem={item => {
              const avatarname = () => {
                const array = item.app.split(" ")
                return array.map(([v]) => v)
              }
              return (
                <Item>
                  <Card style={{ width: '100%' }} onClick={ () => window.open(item.link, '_blank') } hoverable>
                    <Meta
                      avatar={<Row justify="space-around" align="middle"><Avatar size="large">{avatarname()}</Avatar></Row>}
                      title={item.app}
                      description={item.desc}
                    />
                  </Card>
                </Item>
              )
            }}
          />
        </Row>
      </Col>
    </Row>
  )
}

export default OtherApp