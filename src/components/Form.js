import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {add} from "../store/action/listAction"

const Form = () => {
    const [text,setText] = useState("")
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        // untuk pake action
        dispatch(add(text))
        setText("")
    }
    return (
        <form onSubmit={submit}>
            <input type="text" value={text} placeholder="enter new text" onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}

export default Form
