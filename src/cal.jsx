import React from 'react'

const add = (a,b) => {
  return (a+b);
}
const sub=(a,b) => {
    return (a-b);
}
const mul = (a,b) => {
    return (a*b);
  }
  const divi=(a,b) => {
      return ((a/b).toFixed(2));
  }


export default add
export {sub,mul,divi}