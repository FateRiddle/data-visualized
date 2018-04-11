import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'

const { Option } = Select

const SelectFilter = ({ className, placeholder, onChange, data }) => {
  const Options = data.map((d, i) => (
    <Option key={i} value={d.value}>
      {d.text}
    </Option>
  ))
  return (
    <Select className={className} placeholder={placeholder} onChange={onChange}>
      {Options}
    </Select>
  )
}

SelectFilter.defaultProps = {
  className: '',
  placeholder: '',
  onChange: () => {},
  data: [
    { value: 1, text: 'adsf' },
    { value: 2, text: 'adsf' },
    { value: 3, text: 'adsf' },
    { value: 4, text: 'adsf' },
  ],
}

export default SelectFilter
