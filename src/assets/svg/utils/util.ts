// 将svg中的style字符串转化成对象
const styleStrToObject = (str:string) => {
  const obj = {}
  const s = str.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  }).replace(/;\s?$/g,"").split(/:|;/g)
  for (let i = 0; i < s.length; i += 2) {
    // @ts-ignore
    obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"")
  }

  return obj;
}

export default styleStrToObject