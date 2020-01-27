import React,{Component,Fragment} from 'react'

export default class TodoList extends Component{
  constructor(props){
    super(props);
    this.del=this.del.bind(this);
    this.completeAdd=this.completeAdd.bind(this);
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.item!==this.props.item){
      return true;
    }else{
      return false
    }
  }

  render(){
    //console.log("slow")
    let {item}= this.props;
    return(
    <Fragment>
      {item}
      <img src="../src/img/add.png" onClick={this.completeAdd} style={{width:"30px",height:"30px",float:"right",marginRight:"10px"}}/>
      <img src="../src/img/minus.png" onClick={this.del} style={{width:"30px",height:"30px",float:"right",marginRight:"10px"}}/>       
    </Fragment>
    )
  }

  del(){
    let {del,index}=this.props;
    del(index);
  }

  completeAdd(){
    let {completeAdd,index}=this.props;
    completeAdd(index);
    this.del();
  }

}