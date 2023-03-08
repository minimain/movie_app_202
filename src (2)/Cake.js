import React, { Component } from 'react'

export class Cake extends Component {

state = {
  price: 10000,
  discountPrice:0,
}

discount = () =>{
this.setState(current =>( //current = this.state
  {discountPrice: current.price * 0.7}
))
}

  render() {
    const {price,discountPrice} = this.state; //구조분해할당
    // 밑에 this.state를 안써도됨 속성이름만으로 사용가능
    return (
      <>
      <div>
        <h1>Cake 가격 : {price}</h1> 
        <h2>할인 가격 :{discountPrice}</h2>
        <button onClick={this.discount}>할인</button>
      </div>
      </>
    )
  }
}

export default Cake