import React from 'react'
import { upload_url } from 'api/api'
import { Button, Upload, message, Icon } from 'antd'

const UploadFile = () => (
  <Upload {...Props}>
    <Button>
      <Icon type="upload" /> 上传Excel
    </Button>
  </Upload>
)

const Props = {
  name: 'file',
  action: upload_url,
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
  // onSuccess(result, file) {
  //   console.log(file)
  //   // if (result.out_Flag) {
  //   //   message.error(`${file.name}上传失败`)
  //   // } else {
  //   //   message.success(`${file.name}上传成功`)
  //   // }
  // },
}

export default UploadFile
