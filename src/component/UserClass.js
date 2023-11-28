import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // Local State Variable
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "DummyL",
        avatar_url: "https://DummyA",
      },
    };
  }

  // Making an API call in class-based component
  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/harshiltomar");
      const json = await data.json();
      console.log(json);

      // Update state with fetched data
      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  handleCountIncrease = () => {
    // Never update state variables directly; instead, use this.setState to perform an update
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count, userInfo } = this.state;
    const { avatar_url, name, location } = userInfo;

    console.log(location. name);

    return (
      <div className="user-card">
        <img src={avatar_url} className="about-img"></img>
        <h1>Founder Name: {name}</h1>
        {/* <button onClick={this.handleCountIncrease} className="count-increase">
          Count++
        </button> */}
        {/* <h4>Count: {count}</h4> */}
        <h4>Location: {location}</h4>
        <ul><h4>Connect with Me:</h4>
          <li>
            <h4><a href="mailto:harshiltomar20@gmail.com">GMAIL</a></h4>
          </li>
          <li>
           <h4><a href="https://github.com/harshiltomar/Foodify-1.0">GITHUB</a></h4>
          </li>
          <li>
            <h4><a href="https://www.linkedin.com/in/harshiltomar/">LINKEDIN</a></h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserClass;


/*
MOUTNING LIFECYCLE:
- Constructor (dummy)
- Render (dummy data)
- HTML Dummy
- ComponentDidMount
- API Call
- this.setState

UPDATE CYCLE BEGINS:
- Render (API Data)
- DOM Updated
- HTMl (new API Data)
- Component Did Update
*/