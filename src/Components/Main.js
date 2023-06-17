import {Component} from "react"

class Main extends Component{
    constructor(props){
        super(props)
        this.state={disp_count:""}
    }

    Calculatecount=(event)=>{
        let text=event.target.value;
        let count=
        text.split(' ').filter(function(num) 
        {
            return num !==''
           }).length;
        if(text===''){
            count=0
        }


        if(count!==0){
            this.setState(
                {
                disp_count : "Word count: "+count
            }
               
            )
        }
        else{
            this.setState(
                {
                disp_count : ""
            }  
            )
        }

  

    }
    render(){
        return(
            <div className="row m-5">
                <span className="col-sm"></span>
                <span className="col-sm-5">
                <h1 className="font-weight-bold text-center" >Responsive Paragraph Word Counter</h1>
                <textarea className="form-control  my-5" rows="5" cols="40" placeholder="place text here" onInput={this.Calculatecount}></textarea>
                <p>{this.state.disp_count}</p>

                </span>
                <span className="col-sm"></span>
            </div>
        )
    }
}

export default Main
