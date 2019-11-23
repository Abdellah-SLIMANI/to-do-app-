import React from 'react'

class Inputs extends React.Component{
    render(){
        return(
            <div className = "inputs">
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder = "Add A Todo Item" value1={props.currentItem.title}/>
                    <input type="text" placeholder = "Be More Specific" value2/>
                    <button>Add To List!</button>
                </form>
            </div>
        )
    }
}

export default Inputs