import { Card, Row, Steps, Typography } from 'antd'
import React from 'react'

export const Section2 = (opt) => {
  const { data } = opt
  const { Title } = Typography
  const { Step } = Steps
  return (
    <Row className="Education-Section" justify="space-around" style={{ width: '100%', marginTop: '50px' }}>
      <Card  
        title={
          <Title>
            Education
          </Title>
        }
        bordered={false} 
        style={{ width: '100%' }}
      >
        <Row justify="space-around">
          {
            data ?
            <Steps direction="vertical" current={data ? data.length : 0} progressDot >
              {
                data.map((item, i) => {
                  return (
                    <Step key={i} status="finish" title={item.title} subTitle={item.subTitle} description={item.description} />
                    )
                  })
              }
            </Steps> : "No data."
          }
        </Row>
      </Card>
    </Row>
  )
}