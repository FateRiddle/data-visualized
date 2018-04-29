export const convertNum = string =>
  string && !isNaN(parseInt(string)) ? parseInt(string) : 0

export const formatCSV = (data, header) => {
  const _header = header.map(h => h.title)
  const _data = data.map(row => {
    const _row = []
    for (let h of header) {
      for (let key in row) {
        if (h.dataIndex === key) {
          _row.push(row[key])
        }
      }
    }
    return _row
  })
  return [_header, ..._data]
}
