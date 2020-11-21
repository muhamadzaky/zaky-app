import React, { Component } from 'react'
import { Layout, Row } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import { enquireScreen } from 'enquire-js'
import moment from 'moment'
import Landing from './Home/Landing'
import logo from '../assets/image/logo.png'
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
        {/* <Header className="header-custom" style={ isMobile ? { display: 'flex', justifyContent: 'space-around' } : {} }>
          <img className="logo" src={logo} alt="logo" />
        </Header> */}
        <Content>
          <Landing isMobile={isMobile} logo={logo} />
        </Content>
        <Footer style={{ background: 'white', textAlign: isMobile ? 'center' : 'left' }}>
          &copy;{ moment(new Date()).format('YYYY') } - Developed with <HeartFilled /> by Muhamad Zaky
        </Footer>
      </Layout>
    )
  }
}

export default App;
