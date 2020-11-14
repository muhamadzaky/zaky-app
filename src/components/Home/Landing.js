import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Section1 } from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { Section4 } from './Section4'
import { Section5 } from './Section5'
import { Contact } from './Contact'

class Landing extends Component {
  render() {
    return (
      <Row>
        <img className="banner-img" src="https://www.honda.co.jp/CBR600RR/assets/images/top/image-03.png" />
        <Row className="banner-text">
          <Col>
            <Row>
              <p className="hello">Hi! I'm Muhamad Zaky.</p>
            </Row>
            <Row>
              <p className="position">Frontend & Backend Developer</p>
            </Row>
          </Col>
        </Row>
        <Row justify="space-around" align="center" style={{ width: '100%', textAlign: 'center' }}>
          <Col>
            <Row>
              Scroll Down!
            </Row>
            <Row justify="center">
              <DownOutlined />
            </Row>
          </Col>
        </Row>
        <Row style={{ margin: '0 20%' }}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </Row>
        <Contact />
      </Row>
    )
  }
}

export default Landing