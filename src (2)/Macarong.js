// 클래스형 컴포넌트 rce
// import React, { Component } from 'react'

// export class Macarong extends Component {
//   render() {
//     return (
//       <div>Macarong</div>
//     )
//   }
// }

// export default Macarong

// 함수형 컴포넌트 rfce
import React from 'react'

// function Macarong(props) {
//   console.log(props);
//   const {propsid,propsname,propsimage} = props;
//   return (
//     <div>
//       <h1>No.{propsid} </h1>
//       <h2>Name.{propsname}</h2>
//       <img src={propsimage} alt={propsname}/>
//     </div>
//   )
// }
//구조분해 할당2
function Macarong({propsid,propsname,propsimage}) {
  return (
    <div>
      <h1>No.{propsid} </h1>
      <h2>Name.{propsname}</h2>
      <img src={propsimage} alt={propsname}/>
    </div>
  )
}
export default Macarong