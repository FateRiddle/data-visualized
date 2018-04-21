//{ leibCode:"A0101", leibName:"普通坐便器" }

const leim = leimArr => {
  const leim1 = leimArr.filter(i => i.leibCode.length === 1).map(i => ({ value: i.leibName, text:i.leibName}))
  const leim2 = leimArr.filter(i => i.leibCode.length === 3).map(i => ({ value: i.leibName, text:i.leibName}))
  const leim3 = leimArr.filter(i => i.leibCode.length === 5).map(i => ({ value: i.leibName, text: i.leibName}))
  return [leim1,leim2,leim3]
}

export default leim
