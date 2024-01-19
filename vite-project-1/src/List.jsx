import React from 'react'

const List = () => {

    const fruits = [{id: 1,name: 'apple', calories: 95}, 
                    {id: 2,name: 'orange', calories: 45}, 
                    {id: 3,name: 'banana', calories: 105}, 
                    {id: 4,name: 'coconut', calories: 159}, 
                    {id: 5,name: 'pineapple', calories: 37}]

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                <b>{fruit.calories} <span>calories</span></b></li>)

  return (<ul>{listItems}</ul>)
}

export default List