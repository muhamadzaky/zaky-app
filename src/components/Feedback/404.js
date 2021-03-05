import React from 'react'
import { Button, Result, Row } from 'antd'
import history from '../../common/history'
import { uriByENV } from '../../common/general-function'

export const NotFound404 = ({ env }) => {
  return (
    <Row justify="space-around">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={() => history.push(uriByENV(env))}>Back Home</Button>}
      />
    </Row>
  )
}