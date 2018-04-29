import React from 'react'
// import PropTypes from 'prop-types'
import { Select } from 'antd'

const { Option } = Select

class SelectFilter extends React.PureComponent {
  render() {
    const {
      className,
      style,
      placeholder,
      onChange,
      data,
      value,
      showSearch,
      filterOption,
    } = this.props
    return (
      <Select
        style={style}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value ? value : undefined}
        showSearch={showSearch}
        filterOption={filterOption}
      >
        {data.map((d, i) => (
          <Option key={i} value={d.value}>
            {d.text}
          </Option>
        ))}
      </Select>
    )
  }
}

SelectFilter.defaultProps = {
  className: '',
  placeholder: '',
  onChange: () => {},
  data: [],
}

export default SelectFilter
