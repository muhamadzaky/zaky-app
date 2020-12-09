import React from 'react'
import { Col, Divider, Row, Timeline, Typography } from 'antd'
import moment from 'moment'

export const Section4 = (opt) => {
  const { Title, Text } = Typography
  const { Item } = Timeline
  return (
    <Row className="Experiences-Section" justify="space-around" style={{ width: '100%', marginTop: '100px' }}>
      <Col style={{ width: '100%' }}>
        <Row justify="space-around">
          <Title>
            Experiences
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid #1890ff' }} />
          </Title>
        </Row>
        <Row justify="space-around" style={{ marginTop: 20 }}>
          <Timeline mode={ opt.isMobile ? "left" : "right" } style={{ width: '100%' }}>
            {
              opt.data.map((item, idx) => {
                if (opt.isMobile) {
                  return (
                    <Item key={ idx }>
                      <Text style={{ fontSize: 20 }} strong>
                        { item.position }
                        <Divider style={{ margin: 0, margin: '5px 0' }} />
                      </Text>
                      <Text style={{ fontSize: 18 }} strong>
                        { item.company }
                      </Text>
                      <br/>
                      <Text style={{ fontSize: 16 }}>
                        {`${moment(item.start).format("ll")} - ${item.end ? moment(item.end).format("ll") : "Present"}`}
                      </Text>
                    </Item>
                  )
                } else {
                  return (
                    <Item key={ idx } label={`${ item.position } - ${ item.company }`}>
                      {`${moment(item.start).format("ll")} - ${item.end ? moment(item.end).format("ll") : "Present"}`}
                    </Item>
                  )
                }
              })
            }
          </Timeline>
        </Row>
      </Col>
    </Row>
  )
}