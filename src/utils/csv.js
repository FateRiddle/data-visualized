// take table header and data, output array for <CSVLink data={data} />

// const formatCSV = (header, data) => {
//   const _header = header.map(h => h.title)
//   const _data = Object.entries(data)
//   const result = _header
//   _data.forEach(row => {
//     const _row = []
//     header.forEach(h => {
//       row.forEach(item => {
//         if (h.dataIndex === item[0]) {
//           _row.push(item[1])
//         }
//       })
//     })
//     result.push(_row)
//   })
//   return result
// }

const formatCSV = (data, header) => {
  const _header = header.map(h => h.title)
  const _data = data.map(row => {
    const _row = []
    for (let h of header) {
      for (let key in row) {
        if (h.dataIndex == key) {
          _row.push(row[key])
        }
      }
    }
    return _row
  })
  return [_header, ..._data]
}

export default formatCSV
