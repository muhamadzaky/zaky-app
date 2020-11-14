import React, { Component } from 'react'
import { Layout } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import moment from 'moment'
import Landing from './Home/Landing'
import '../assets/scss/App.scss'
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    const { Header, Footer, Content } = Layout
    return (
      <Layout>
        <Header className="header-custom">
          Muhamad Zaky
        </Header>
        <Content>
          <Landing />
        </Content>
        <Footer style={{ background: 'white' }}>
          &copy;{ moment(new Date()).format('YYYY') } - Developed with <HeartFilled /> by Muhamad Zaky
        </Footer>
      </Layout>
    )
  }
}

export default App;
