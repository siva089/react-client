import React, { Component } from "react";
const axios = require("axios");

export default class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      data: [],
      toggle:false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
     const data = {
      title: this.state.title,
      description: this.state.description
    };
   
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    axios.post("http://localhost:4000", { data, config }).then(res=>{
      console.log(res);
      this.setState((prevState)=>{
        
      })
      
    })

  };

  componentDidMount() {
    axios.get("http://localhost:4000").then(res => {
        this.setState(()=>({
        data: res.data
      }));

    });
    
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
      console.log("runned")
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
     {this.state.data.length>0&&this.state.data.map(a=>(
         <div>
         <h4>{a.title}</h4>
         <p>{a.description}</p>
         </div>
     ))}
       
      </div>
    );
  }
}
