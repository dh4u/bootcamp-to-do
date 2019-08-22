import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from './Header.js';
import AddForm from './AddForm.js';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            counter: 1
            ,listItems: []
            ,
        };
        this.addItem = this.addItem.bind(this);
        // create a reference to pass down to the input form
        this.textInputRef = React.createRef();
        this.emptyVar = "";
    }

    shouldComponentUpdate(){
        //console.log("shouldComponentUpdate");
        //console.log(this.state.listItems);
        return true;
    }

    addItem(){
        // get the value from the input and add it to the state.listItems array
        // also increment state.counter
        let value = this.textInputRef.current.value;
        //console.log('adding: ' + value);
        this.setState(state => {
            const listItems = state.listItems.concat(value);
            const counter = state.counter + 1;
            return {
                counter
                ,listItems
            };
        })
        this.textInputRef.current.value = "";
    }

    removeItem = function(index){

        if(window.confirm("Are you sure you want to delete this task?")){
            // if there is only one item
            if( this.state.listItems.length === 1 ){
                this.setState({listItems: []}); // update the array in state
                this.setState({counter: 1}); // update the counter
            }else{
                var array = [...this.state.listItems]; // make a separate copy of the array
                var count = this.state.counter; // make a separate copy of the count
                if (index !== -1) {
                    array.splice(index, 1); // remove the item from the array
                    this.setState({listItems: array}); // update the array in state
                    this.setState({counter: count - 1}); // update the counter in state
                }
            }
        }
        
    } 

    render(){
        // need to do this because performing map on this.state.listItems after it becomes empty throws an error
        const array = this.state.listItems.length ? this.state.listItems : [];
        return(
            <>
            <Header />
            <ListGroup>
                
                {array.map((item, index, state) => {
                    
                    return(
                        <ListGroup.Item key={index}>
                            <span style={{float: 'left'}} className="col-9">{item}</span>
                            <span style={{float: 'right'}} className="col-3">
                                <Button variant="danger" value={index} onClick={() => this.removeItem(index)}>Delete</Button>
                            </span>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
            <br />
            <AddForm counter={this.state.counter} useRef={this.textInputRef} onClick={() => this.addItem()} value={this.emptyVar} />
            </>
        )

    }

}
export default List;