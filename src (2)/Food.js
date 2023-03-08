import React from 'react'

// function Food(props) {
//   console.log(props);
//   return (
//     <div>나는 떡볶이를 좋아합니다. {props.propsName} , {props.propsName2},{props.propsName3} </div>
//   )
// }

// function Food(props) { //구조분해할당 1
//   console.log(props);
//   const {propsName,propsName2} = props;
//   return (
//     <div>나는 떡볶이를 좋아합니다. {propsName} , {propsName2}</div>
//   )
// }

function Food({propsName,propsName2}) { //구조분해할당 2
  return (
    <div>나는 떡볶이를 좋아합니다. {propsName} , {propsName2}</div>
  )
}

export default Food