import React from 'react'

class toDoCard extends React.Component{
    render(){
        return(
            <div className='cardContainer'>
                <h1>Here Goes the Todo title</h1>
                <h3>Here Goes the Description of the Todo Item</h3>
                <footer>Here Goes the Date informations</footer>
            </div>
        )
    }
};

export default toDoCard