import React, { Component } from 'react'
import { Layout, Row } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import { enquireScreen } from 'enquire-js'
import moment from 'moment'
import Landing from './Home/Landing'
import '../assets/scss/App.scss'
import 'antd/dist/antd.css'

let isMobile

enquireScreen((b) => {
  isMobile = b
})

class App extends Component {
  state = {
    isMobile
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b
      })
    })
  }

  render() {
    const { Header, Footer, Content } = Layout
    return (
      <Layout>
        <Header className="header-custom">
          <Row>
            &lt;ざき&#47;&gt;
          </Row>
        </Header>
        <Content>
          <Landing isMobile={isMobile} />
        </Content>
        <Footer style={{ background: 'white' }}>
          &copy;{ moment(new Date()).format('YYYY') } - Developed with <HeartFilled /> by Muhamad Zaky
        </Footer>
      </Layout>
    )
  }
}

export default App;
