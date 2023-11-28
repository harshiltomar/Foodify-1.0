import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import User from "./User";
import UserClass from "./UserClass"
import React from "react";

//First Constructor will be called, then render will be called and then componentdidmount will be called
//componentdidmount is used   

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  //
  componentDidMount() {
  }

  render () {

    return (
      <div className="about-container">
        <div className="about-left">
          <div>
            {/* <UserContext.Consumer>
              {({loggedInUser})=> <h1>{loggedInUser}</h1>}
            </UserContext.Consumer> */}
          </div>
          <h1>
            Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
          Foodify is an Indian online food ordering and delivery platform. Founded in 2014, Foodify is headquartered in Bangalore and operates in more than 500 Indian cities as of September 2021. Besides food delivery, the platform also provides on-demand grocery deliveries under the name Instamart, and same-day package delivery service called Foodify Genie.
          </h4>
          <UserClass name={"Harshil Tomar"} location={"Dehradun"}/>
        </div>
        <div className="about-right">
          <img src={LOGO_URL} alt="Food Image" />
        </div>
      </div>
    );
  }
}

export default About;