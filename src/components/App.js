import React, { Component } from 'react'
import { Layout } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import { enquireScreen } from 'enquire-js'
import { Route, Router, Switch } from 'react-router-dom'
import { uriByENV } from '../common/general-function'
import { NotFound404 } from './Feedback/404'
import moment from 'moment'
import history from '../common/history'
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
    isMobile,
    env: 1,
    isModalVisible: false
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b })
    })
  }

  render() {
    const { Footer, Content } = Layout
    const { env } = this.state
    return (
      <Layout>
        <Content>
          <Router history={history}>
            <Switch>
              <Route exact path={uriByENV(env)} render={props => <Landing {...props} isMobile={isMobile} logo={logo} />} />
              <Route exact path="404" render={props => <NotFound404 {...props} isMobile={isMobile} env={env} />} />
              <Route exact path="*" render={props => <NotFound404 {...props} isMobile={isMobile} env={env} />} />
            </Switch>
          </Router>
        </Content>
        <Footer style={{ background: 'white', textAlign: isMobile ? 'center' : 'left', fontSize: isMobile ? 12 : 14 }}>
          &copy;{ moment(new Date()).format('YYYY') } - Developed with <HeartFilled style={{ color: '#ea4c89' }} /> by Muhamad Zaky
        </Footer>
      </Layout>
    )
  }
}

export default App;
