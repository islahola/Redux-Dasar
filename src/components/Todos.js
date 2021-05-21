import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {del} from "../store/action/listAction"

const Todos = () => {
    const todos = useSelector(state=>state.lists.todos)
    console.log(todos)
    const dispatch = useDispatch()
    const delData = id =>{
        dispatch(del(id))
    }
    return (
        <ul>
           {todos.map(item=> 
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => delData(item.id)}>x</button>
                </li>
            )} 
        </ul>
    )
}

export default Todos
