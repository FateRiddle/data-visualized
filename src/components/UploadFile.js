import React from 'react'
import { Col, Row, Input, Button, DatePicker, Upload, message, Icon } from 'antd'

const UploadFile = () => (
  <Upload {...Props}>
    <Button>
      <Icon type="upload" /> 上传Excel
    </Button>
  </Upload>
)

const Props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败`)
    }
  },
}

export default UploadFile
