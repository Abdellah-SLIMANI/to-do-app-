import React , {Component} from 'react';
import Todos from './Components/Todos'
import TodoCard from './Components/TodoCard';
import NavBar from './Components/NavBar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: '',
      currentItem : [
        this.title =  '',
        this.Description = '',
        this.key = '',
        this.isCompleted = ''
      ]
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(event){
    this.setState({
      currentItem:{
        title : document.getElementById('tit').value,
        Description : document.getElementById('des').value,
        key: Date.now()
      }
    })
  };

  addItem(event){
    event.preventDefault();
    const newItem = this.state.currentItem.title;
    console.log(this.state.currentItem)
  }

  render(){
    return(
      <div className = "App">
        <NavBar />
        <form >
                    <input type="text" placeholder = "Add A Todo Item" id='tit' value1={this.state.currentItem.title} onChange = {this.handleInput}/>
                    <input type="text" placeholder = "Be More Specific" id ='des' value2 = {this.state.currentItem.Description} onChange = {this.handleInput}/>
                    <button onClick = {this.addItem}>Add To List!</button>
                    {console.log(this.state.currentItem)}
                </form>
        <Todos />
      </div>
    )
  }
}

export default App