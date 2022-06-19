function hashCode(string) {
  var hash = 0, i, chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
};

function checkId(arr,id){
  return arr.some((e,i)=>e.id == id);
}

function getMS(days){
  return Number(days)*86400000;
}

let enumObj = {
  all:0,
  active:1,
  completed:2,
  ["все"]: 0,
  ["активные"]: 1,
  ["выполненные"]: 2
}

export {
  hashCode, checkId, enumObj, getMS
}
