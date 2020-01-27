import React,{Component,Fragment} from 'react'
import TodoList from './todoList.jsx'
import CompleteTodo from './complete.jsx'

let styles={
  input:{width:"50%",height:"40px",fontSize:"18px",border:"1px solid blue",marginTop:"50px"},
  addAndDel:{width:"30px",height:"30px",float:"right",marginRight:"10px"},
  btn:{width:"10%",height:"44px",fontSize:"15px",border:"1px solid blue"},
  showDiv:{width:"45%",height:"800px",marginTop:"10px",float:"left",marginLeft:"30px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee "},
  showUl:{listStyleType:"none"},
  showLi:{boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",margin:"15px 40px 0 0"},
  completeDiv:{width:"45%",height:"800px",float:"right",marginTop:"10px",marginRight:"30px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee "},
  completeUl:{width:"45%",float:"right"},
  label:{margin:"0 23px",color:"green",fontSize:"28px"},
};

class Input extends Component{
  constructor(props){
    super(props);
    this.state={
      inputVal:'',
      displayList:[],
      completeList:[],
      addToCompleteIndex:null,
    };
    
    this.valChange=this.valChange.bind(this);
    this.addVal=this.addVal.bind(this);
  }

  render(){
    return(
      <Fragment>
      <label htmlFor="input" style={styles.label}>Dolphin</label>
      <input id="input"
        type="text" 
        value={this.state.inputVal}
        placeholder="Please enter text" 
        style={styles.input} 
        onChange={this.valChange}
      />
      <button type="submit" onClick={this.addVal}  style={styles.btn} >Submit</button>
      <div style={styles.showDiv}>
        <h3>Incomplete Box</h3>
{/*----------------------incomplete list--------------------*/}      
        <ul style={styles.showUl}>
          {                
            this.state.displayList.map((item,index)=>{
            return <li key={index} style={styles.showLi}>
            <TodoList 
              del={this.del.bind(this)} 
              item={item} 
              completeAdd={this.completeAdd.bind(this)}
              index={index}
             />
            </li>
            })
          }
        </ul>
      </div>
{/*---------------------Complete list---------------------*/}
      <div style={styles.completeDiv}>
      <h3>Complete Box</h3>
      <ul style={styles.showUl}>
        {                 
          this.state.completeList.map((item,index)=>{
          return <li key={index} style={styles.showLi}>
              <CompleteTodo 
              item={item} index={index} 
              completeDel={this.completeDel.bind(this)}
              />
            </li>
          })
        }
      </ul>
    </div>
    </Fragment>
    )
  }
//-----------------------------Method---------------------------->
  addVal(){
    if(this.state.inputVal===''){
      alert("Are you kidding me?")
    }else{this.setState({
      displayList:[this.state.inputVal,...this.state.displayList],
      inputVal:''
    })};
  }

  valChange(e){
    this.setState({
      inputVal:e.target.value
    })
  }

  del(index){
    let list=[...this.state.displayList];
    list.splice(index,1)
    this.setState({
      displayList:list
    })
  }

  completeAdd(index){
    this.setState({
      completeList:[this.state.displayList[index],...this.state.completeList],
    })
    this.del(index);
  }

  completeDel(index){
    let list=[...this.state.completeList];
    list.splice(index,1)
    this.setState({
      completeList:list
    })
  }
}

export default Input;
