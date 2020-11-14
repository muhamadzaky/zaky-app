import React from 'react'
import { Button, Col, Divider, List, Row, Tooltip, Typography } from 'antd'
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons'

export const Contact = () => {
  const { Title } = Typography
  const { Item } = List
  const data = [
    {
      icon: <InstagramOutlined />,
      tooltip: "Follow me on Instagram",
      link: "https://instagram.com/zakysteinfeld"
    },
    {
      icon: <FacebookOutlined />,
      tooltip: "Add me on Facebook",
      link: "https://instagram.com/zakysteinfeld"
    },
    {
      icon: <TwitterOutlined />,
      tooltip: "Follow me on Twitter",
      link: "https://instagram.com/zakysteinfeld"
    },
    {
      icon: <InstagramOutlined />,
      tooltip: "Contact me on WhatsApp",
      link: "https://wa.me/6281904546023"
    },
    {
      icon: <MailOutlined />,
      tooltip: "Email me",
      link: "mailto:muhamadzaky2310@gmail.com"
    },
  ]
  return (
    <Row justify="space-around" style={{ width: '100%', padding: '30px 20% 10px', marginTop: 50, background: 'white' }}>
      <Col>
        <Row justify="space-around">
          <Title>
            Contact
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid blue' }} />
          </Title>
        </Row>
        <Row>
          <List
            grid={{ gutter: 16, column: 5 }}
            dataSource={data}
            renderItem={item => (
              <Item>
                <Tooltip title={item.tooltip} placement="bottom">
                  <Button icon={item.icon} href={item.link} target="_blank" shape="circle" />
                </Tooltip>
              </Item>
            )}
          />
        </Row>
      </Col>
    </Row>
  )
}