import React,{Component,Fragment} from 'react'

export default class CompleteTodo extends Component{
  constructor(props){
    super(props);
    this.completeDel=this.completeDel.bind(this);
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
      <img src="../src/img/minus.png" onClick={this.completeDel} style={{width:"30px",height:"30px",float:"right",marginRight:"10px"}}/>       
    </Fragment>
    )
  }

 
  completeDel(){
    let {completeDel,index}=this.props;
    completeDel(index)
  }
}