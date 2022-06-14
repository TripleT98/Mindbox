
function maxLength(max){
  return (str)=>str.length <= max || `Maximum length is ${max}`;
}

function minLength(min){
  return (str)=>str.length >= min || `Minimal length is ${min}`;
}

function isEmpty(str){
  return str.length != 0 || "Empty field";
}

export {
  maxLength, minLength, isEmpty
}
