import React from 'react'
import { Button, Col, Divider, List, Row, Tooltip, Typography } from 'antd'
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons'

const Contact = ({ isMobile }) => {
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
    // {
    //   icon: <img style={{ width: '18px', display: 'inherit' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNLjA1NyAyNGwxLjY4Ny02LjE2M2MtMS4wNDEtMS44MDQtMS41ODgtMy44NDktMS41ODctNS45NDYuMDAzLTYuNTU2IDUuMzM4LTExLjg5MSAxMS44OTMtMTEuODkxIDMuMTgxLjAwMSA2LjE2NyAxLjI0IDguNDEzIDMuNDg4IDIuMjQ1IDIuMjQ4IDMuNDgxIDUuMjM2IDMuNDggOC40MTQtLjAwMyA2LjU1Ny01LjMzOCAxMS44OTItMTEuODkzIDExLjg5Mi0xLjk5LS4wMDEtMy45NTEtLjUtNS42ODgtMS40NDhsLTYuMzA1IDEuNjU0em02LjU5Ny0zLjgwN2MxLjY3Ni45OTUgMy4yNzYgMS41OTEgNS4zOTIgMS41OTIgNS40NDggMCA5Ljg4Ni00LjQzNCA5Ljg4OS05Ljg4NS4wMDItNS40NjItNC40MTUtOS44OS05Ljg4MS05Ljg5Mi01LjQ1MiAwLTkuODg3IDQuNDM0LTkuODg5IDkuODg0LS4wMDEgMi4yMjUuNjUxIDMuODkxIDEuNzQ2IDUuNjM0bC0uOTk5IDMuNjQ4IDMuNzQyLS45ODF6bTExLjM4Ny01LjQ2NGMtLjA3NC0uMTI0LS4yNzItLjE5OC0uNTctLjM0Ny0uMjk3LS4xNDktMS43NTgtLjg2OC0yLjAzMS0uOTY3LS4yNzItLjA5OS0uNDctLjE0OS0uNjY5LjE0OS0uMTk4LjI5Ny0uNzY4Ljk2Ny0uOTQxIDEuMTY1LS4xNzMuMTk4LS4zNDcuMjIzLS42NDQuMDc0LS4yOTctLjE0OS0xLjI1NS0uNDYyLTIuMzktMS40NzUtLjg4My0uNzg4LTEuNDgtMS43NjEtMS42NTMtMi4wNTktLjE3My0uMjk3LS4wMTgtLjQ1OC4xMy0uNjA2LjEzNC0uMTMzLjI5Ny0uMzQ3LjQ0Ni0uNTIxLjE1MS0uMTcyLjItLjI5Ni4zLS40OTUuMDk5LS4xOTguMDUtLjM3Mi0uMDI1LS41MjEtLjA3NS0uMTQ4LS42NjktMS42MTEtLjkxNi0yLjIwNi0uMjQyLS41NzktLjQ4Ny0uNTAxLS42NjktLjUxbC0uNTctLjAxYy0uMTk4IDAtLjUyLjA3NC0uNzkyLjM3MnMtMS4wNCAxLjAxNi0xLjA0IDIuNDc5IDEuMDY1IDIuODc2IDEuMjEzIDMuMDc0Yy4xNDkuMTk4IDIuMDk1IDMuMiA1LjA3NiA0LjQ4Ny43MDkuMzA2IDEuMjYzLjQ4OSAxLjY5NC42MjYuNzEyLjIyNiAxLjM2LjE5NCAxLjg3Mi4xMTguNTcxLS4wODUgMS43NTgtLjcxOSAyLjAwNi0xLjQxMy4yNDgtLjY5NS4yNDgtMS4yOS4xNzMtMS40MTR6Ii8+PC9zdmc+" />,
    //   tooltip: "Contact me on WhatsApp",
    //   link: "https://wa.me/6281904546023"
    // },
    {
      icon: <MailOutlined />,
      tooltip: "Email me",
      link: "mailto:muhamadzaky2310@gmail.com?cc=zakysteinfeld@outlook.com&subject=Hi! I'm interested with you.&body="
    }
  ]
  
  return (
    <Row className="Contact-Section" justify="space-around" style={{ width: '100%', padding: '30px 20% 10px', marginTop: 50, background: 'white' }}>
      <Col>
        <Row justify="space-around">
          <Title style={ isMobile ? { fontSize: 36 } : {} }>
            Reach Me On
            <Divider style={{ margin: 0, marginTop: '5px', borderTop: '1px solid #1890ff' }} />
          </Title>
        </Row>
        <Row justify="space-around">
          <List
            grid={{ gutter: 16, column: data.length }}
            dataSource={data}
            renderItem={item => (
              <Item>
                <Tooltip title={item.tooltip} placement="bottom">
                  <Button className="btn-sns" icon={item.icon} href={item.link} target="_blank" shape="circle" size="large" />
                </Tooltip>
              </Item>
            )}
          />
        </Row>
      </Col>
    </Row>
  )
}

export default Contact