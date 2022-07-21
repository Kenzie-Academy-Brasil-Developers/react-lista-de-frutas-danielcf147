import { useState } from "react"

const RedFruits = ({fruits, isTrue}) =>{ 
    const filterColor = fruits.filter((item,index) => item.color == "red")
    const filterPrice = fruits.map((item) => item.price)
    const count = filterPrice.reduce((previousValue, currentValue) => previousValue + currentValue,0)
    const filterColorPrice = filterColor.map((item) => item.price)
    const countColor = filterColorPrice.reduce((previousValue, currentValue) => previousValue + currentValue,0)
    return <div>
                <div>
                    {isTrue?
                    <p>Preço total = {count}</p>
                    :
                    <p>Preço total = {countColor}</p>
                    }
                </div>
                <div>
                {isTrue?
                fruits.map((item,index) => (<ul> <li  key={index}>{item.name}</li></ul>))
                :
                filterColor.map((item,index) => <p key={index}> {item.name} </p>)}
                </div>
             </div>
}
export default RedFruits