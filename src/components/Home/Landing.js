import React, { Component } from 'react'
import { BackTop, Button, Col, message, Modal, Popover, Row, Space, Tag, Typography } from 'antd'
import { DownloadOutlined, MailOutlined, MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-scroll'
import { Section1 } from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { Section4 } from './Section4'
import { Section5 } from './Section5'
import { OtherApp } from './OtherApp'
import { Contact } from './Contact'
import { api } from '../../common/service/api'
import Animate from 'rc-animate'
import logoReact from '../../assets/image/logo.svg'
import Banner from '../../assets/image/banner-1.jpg'
import moment from 'moment'

class Landing extends Component {
  state = {
    isLoading: false,
    dataLoaded: false,
    about: {},
    education: [],
    skill: [],
    experience: [],
    project: [],
    otherapp: [],
    projectModalData: {},
    projectModalVisibility: false,
    menuMobileVisible: false,
    listMenu: [
      {
        key: "About-Section",
        value: "About"
      },
      {
        key: "Education-Section",
        value: "Education"
      },
      {
        key: "Skill-Section",
        value: "Skill"
      },
      {
        key: "Experiences-Section",
        value: "Experience"
      },
      {
        key: "Projects-Section",
        value: "Project"
      },
      {
        key: "Contact-Section",
        value: "Contact"
      },
    ]
  }

  componentWillMount() {
    this.setState({ isLoading: true })
    api.get()
    .then(res => {
      this.setState({
        about: res.data.about,
        education: res.data.education,
        skill: res.data.skill,
        experience: res.data.experience,
        project: res.data.project,
        otherapp: res.data.otherApp,
        isLoading: false,
        dataLoaded: true
      })
    })
    .catch(() => {
      this.setState({ isLoading: false, dataLoaded: false })
      message.error('Failed to get data', 2.5).then(() => message.loading('Page will be reloaded in 5 secs', 5)).then(() => { message.destroy(); window.location.reload() })
    })
  }

  openModal = (data) => {
    this.setState({ projectModalData: data }, () => { this.setState({ projectModalVisibility: !this.state.projectModalVisibility }) })
  }

  closeModal = () => {
    this.setState({ projectModalVisibility: !this.state.projectModalVisibility })
  }

  menuMobileVisibility = () => {
    this.setState({ menuMobileVisible: !this.state.menuMobileVisible })
  }

  renderModalProject = () => {
    const { projectModalData, projectModalVisibility } = this.state
    const { Text } = Typography
    const item = projectModalData
    const calculateMonths = Math.round(moment(item.end ? item.end : new Date()).diff(moment(item.start), 'months'))
    return (
      <Modal
          title="Project Detail"
          visible={projectModalVisibility}
          onOk={this.openModal}
          onCancel={this.closeModal}
          footer={false}
          afterClose={ () => this.setState({ projectModalData: {} }) }
          className="custom-modal"
        >
          <Row>
            <Col span={12}>
              <Row>
                <label>Name</label>
              </Row>
              <Row>
                <Text className="description-value" strong>{ item.description }</Text>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <label>Duration</label>
              </Row>
              <Row>
                <Text className="description-value" strong>{ `${ calculateMonths } month${ calculateMonths > 1 ? 's' : '' }` }</Text>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col span={12}>
              <Row>
                <label>Company</label>
              </Row>
              <Row>
                <Text className="description-value" strong>{ item.company }</Text>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <label>Position</label>
              </Row>
              <Row>
                <Text className="description-value" strong>{ item.jobdesk }</Text>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col>
              <Row>
                <label>Tags</label>
              </Row>
              <Row>
                {
                  item.tech ? item.tech.map(item => {
                    return (
                      <Tag>{item}</Tag>
                    )
                  }) : null
                }
              </Row>
            </Col>
          </Row>
        </Modal>
    )
  }

  menu = () => {
    const { listMenu } = this.state
    const { isMobile } = this.props
    const { Text } = Typography
    if (isMobile) {
      return (
        listMenu.map(item => {
          return (
            <Row className="menu-item-mobile">
              <Text>
                <Link to={item.key} spy={true} smooth="easeInOutQuad" duration={500} offset={-50} onClick={this.menuMobileVisibility}>
                  {item.value}
                </Link>
              </Text>
            </Row>
          )
        })
      )
    } else {
      return (
        listMenu.map(item => {
          return (
            <Text>
              <Link to={item.key} spy={true} smooth="easeInOutQuad" duration={500} offset={-50}>
                {item.value}
              </Link>
            </Text>
          )
        })
      )
    }
  }
  
  render() {
    const { education, skill, experience, project, otherapp, isLoading, dataLoaded, menuMobileVisible } = this.state
    const { isMobile, logo } = this.props
    const { Title, Text } = Typography
    if (isLoading) {
      return (
        <Animate transitionName="fade" transitionAppear>
          <Row key="1" justify="space-around" align="middle" style={{ height: '92vh' }}>
            <Col>
              <Row>
                <img src={logoReact} className="App-logo" alt="logo" />
              </Row>
              <Row justify="space-around" align="middle">
                <Text style={{ color: '#61dafb', fontSize: 24 }} strong>Loading ...</Text>
              </Row>
            </Col>
          </Row>
        </Animate>
      )
    } else {
      return (
        <Animate transitionName="fade" transitionAppear>
          <Row key="2">
            <img className="logo" src={logo} alt="logo" />
            <Row className="list-menu-mobile" style={ !isMobile && { display: 'none' } }>
              <Popover className="list-menu-mobile" placement="bottomRight" content={this.menu} trigger="click" visible={menuMobileVisible} onClick={this.menuMobileVisibility}>
                <MenuOutlined />
              </Popover>
            </Row>
            <Row className="list-menu" style={ isMobile && { display: 'none' } }>
              { this.menu() }
            </Row>
            <img className="banner-img" src={Banner} alt="banner" />
            <Row className={ isMobile ? "banner-text-mobile" : "banner-text" }>
              <Row>
                <p className="hello">Hi!</p>&nbsp;
                <p className="name">I'm Zaky.</p>
              </Row>
              <Row>
                <p className="position">Frontend Developer</p>
              </Row>
              <Row style={ isMobile ? { marginTop: 50, background: 'white', padding: '10px 10px', borderRadius: 35 } : { marginTop: 10 }}>
                <Space className="btn-banner" size="large">
                  <Button className="btn-pink" shape="round" icon={<MailOutlined />} href="mailto:muhamadzaky1023@gmail.com?cc=zakysteinfeld@outlook.com&subject=Hi! I'm interested with you.&body=" target="_blank" size="large">
                    Mail me!
                  </Button>
                  <Button className="btn-green" shape="round" icon={<DownloadOutlined />} href="https://drive.google.com/drive/folders/1IQ0Vc28mkXClsFYPOrKhhfCP6rPn7o2-?usp=sharing" target="_blank" size="large">
                    Download CV
                  </Button>
                </Space>
              </Row>
            </Row>
            {
              dataLoaded ?
              <>
                <Row style={{ margin: `0 ${ isMobile ? '3%' : '20%'}`, width: isMobile ? '94%' : '100%' }}>
                  <Section1 />
                  <Section2 data={education} />
                  <Section3 data={skill} isMobile={isMobile} />
                  <Section4 data={experience} isMobile={isMobile} />
                  <Section5 data={project} openModal={this.openModal} closeModal={this.closeModal} isMobile={isMobile} />
                  {
                    otherapp.show && <OtherApp data={otherapp} isMobile={isMobile} />
                  }
                </Row>
                <Contact isMobile={isMobile} />
              </>
              :
              <Row style={{ margin: `0 ${ isMobile ? '3%' : '20%'}`, width: isMobile ? '94%' : '100%' }}>
                <Title>Data not loaded correctly.</Title>
                <Title level={2}>Page will be reloaded after 5 seconds.</Title>
                <Title level={2}>If page doesn't automatically reloaded. Click <Button type="link" onClick={() => window.location.reload()}>here</Button>.</Title>
              </Row>
            }
            { this.renderModalProject() }
            <BackTop />
          </Row>
        </Animate>
      )
    }
  }
}

export default Landing