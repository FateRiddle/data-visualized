import React from 'react'
// import PropTypes from 'prop-types'
import { Select } from 'antd'

const { Option } = Select

const SelectFilter = ({ className, placeholder, onChange, data, value }) => {
  const Options = data.map((d, i) => (
    <Option key={i} value={d.value}>
      {d.text}
    </Option>
  ))
  return (
    <Select
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value ? value : undefined}
    >
      {Options}
    </Select>
  )
}

SelectFilter.defaultProps = {
  className: '',
  placeholder: '',
  onChange: () => {},
  data: [],
}

export default SelectFilter
