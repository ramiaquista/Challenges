function stringMerge(string1, string2, letter){
  let w1 = string1.split('')
  let w2 = string2.split('')
  let res = []
  let pos1 = 0
  let pos2 = 0
  for (let i=0;i<w1.length; i++) {
    if (w1[i] === letter) {
      pos1 = i
      break;
    }
  }
  for (let j=0;j<w2.length; j++) {
    if (w2[j] === letter) {
      pos2 = j
      break;
    }
  }
  res = w1.slice(0, pos1).join('') + w2.slice(pos2).join('')
  return res
  
  
}
