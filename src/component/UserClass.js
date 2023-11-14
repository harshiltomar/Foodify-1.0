import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state= {
        count: 0,
        count2: 2,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component did Mount")
  }

  render() {
    const {name, location}= this.props;
    const {count}= this.state;
    console.log("Child Render");
    
    return (
      <div className="user-card">
        <h1>Founder Name: {name}</h1>
        <button onClick={()=> {
            //Never Update State Variables Directly
            this.setState({
                count: this.state.count+1,
            }); 
        }} 
        className="count-increase">Count++</button>
        <h4>Count: {count}</h4>
        <h4>Location: {location}</h4>
        <h4>Contact: harshiltomar20@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
