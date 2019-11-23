import React from 'react'

function TodoCard(props) {
    const footer = new Date();
        return(
            <div className = "TodoCard">
                <h1> Title</h1>
                <hr className = "hrLine"/>
                <h4>{props.title}</h4>
                <hr className = "hrLine"/>
                <footer>{props.Description}</footer>
            </div>
        )
    }



export default TodoCard