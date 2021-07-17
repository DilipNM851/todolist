
  
import React from 'react';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;console.log(newItem);
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  
  
 render(){
  return (
  
    <div>
         <nav class="navbar" style={{"background":"tomato"}}>
          <a class="navbar-brand"  style={{"color":"white","font-size":"xx-large","font-weight":"600"}}>To-Do list</a>
        </nav>

        <div className="App br-5">
        
          <header>
            <form id="to-do-form" onSubmit={this.addItem}>
            
              <div className="input-group mb-3 pa-5">
                  <input type="text" className="form-control" value= {this.state.currentItem.text} onChange={this.handleInput}
                  placeholder="Enter task" />
                  <div className="input-group-append">
                    <button className="btn btn-warning" style={{"color":"white"}} type="submit" id="button-addon2">Add</button>
                  </div>
              </div>
            </form>     
            <div style={{"padding":"3%"}}>      
              <ListItems items={this.state.items}  /> 
            </div>       
          </header>
        </div>

    </div>
  );
 }
}


export default App;
