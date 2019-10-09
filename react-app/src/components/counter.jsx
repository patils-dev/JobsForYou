import React, { Component } from 'react';
class Counter extends Component {
    state={
        count:0,
        imgageUrl:'https://picsum.photos/200',
       tags:[]
    };
    styles={
        fontSize:20,
        fontWeight:"bold"
    }
    // constructor(){
    //     super();
    //     this.handleClick=this.handleClick.bind(this);
    //     // console.log("Increment Clicked", this);
    // }
    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags</p>;
        
        return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>;

    }
    handleClick=()=>
    {
        // console.log("button clicked", this)
        //update state
        this.state.count++;
        this.setState();
    }
    render() {
        // return <div>
        //     {this.state.tags.length===0 && "Please create a new tag! "}
        // {this.renderTags()}
        // </div>;
        return(
        <React.Fragment>
             {/* <img src={this.state.imgageUrl} alt="not uploaded"></img> */}
             <span style={this.styles} className={this.getStyle()}>{this.formatCount()}</span>
            <button onClick={this.handleClick} className="btn btn-secondary btn-sm">Incremet</button>

 
         </React.Fragment> 
        )
    }

    getStyle() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;