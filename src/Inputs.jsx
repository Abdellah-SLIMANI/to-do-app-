import React from 'react'

class Inputs extends React.Component{
    constructor(){
        super();
        this.state = {
            todoThing :'',
            todoDetails : ''
        }
       this.getData = this.getData.bind(this)
    }

    getData(){
        this.setState({
            todoThing : document.getElementById('todoThing'),
            todoDetails : document.getElementById('todoDetails')
        })
    }

    render(){
        return(
            <div className = 'inputs'>
                <ul>
                    <li><input placeholder= 'What Do You Want To Do?' type="text" id= 'todoThing'/><br/></li>
                    <li><input placeholder = 'More Details' type="text" id='todoDetails'/></li>
                    <li><button onClick = {this.getData}>Add To List</button></li>
                    <p>{console.log(this.state.todoThing.value)}</p>
                </ul>
            </div>
        )
    }
};

export default Inputs



