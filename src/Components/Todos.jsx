import React from 'react'
import TodoCard from './TodoCard'

export default class Todos extends React.Component{
    render(){
        return(
            <div>
             <h1>Your ToDo Cards Below !</h1>
             <TodoCard />
            <button>Clear All!</button>
            </div>
        )
    }
}