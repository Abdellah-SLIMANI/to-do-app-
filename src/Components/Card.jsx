import React , {Component} from 'react'

export default class Card extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>Title goes here</h1>
                <h4>Detail Goes here</h4>
                <footer>Date info Goes here</footer>
            </div>
        )
    }
}