import React from 'react'
import Select from './Select'

class SearchSelect extends React.PureComponent {
  render() {
    return (
      <Select
        {...this.props}
        showSearch
        filterOption={(input, option) =>
          option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      />
    )
  }
}

export default SearchSelect
