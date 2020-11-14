import { Card, Row, Steps, Typography } from 'antd'
import React from 'react'

export const Section2 = () => {
  const { Title } = Typography
  const { Step } = Steps
  return (
    <Row justify="space-around" style={{ width: '100%', marginTop: '50px' }}>
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
          <Steps direction="vertical" current={1} progressDot>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </Row>
      </Card>
    </Row>
  )
}