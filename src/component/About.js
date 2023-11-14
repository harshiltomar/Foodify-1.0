import { LOGO_URL } from "../utils/constants";
import User from "./User";
import UserClass from "./UserClass"
import React from "react";

//First Constructor will be called, then render will be called and then componentdidmount will be called

class About extends React.Component {

  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  //
  componentDidMount() {
    console.log("Parent Component did Mount");
  }

  render () {
    console.log("Parent Render");

    return (
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
          Foodify is an Indian online food ordering and delivery platform. Founded in 2014, Foodify is headquartered in Bangalore and operates in more than 500 Indian cities as of September 2021. Besides food delivery, the platform also provides on-demand grocery deliveries under the name Instamart, and same-day package delivery service called Foodify Genie.
          </h4>
          <UserClass name={"Harshil Tomar(class)"} location={"Dehradun Class"}/>
        </div>
        <div className="about-right">
          <img src={LOGO_URL} alt="Food Image" />
        </div>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about-container">
//       <div className="about-left">
//         <h1>
//           Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
//         </h1>
//         <h4>
//         Foodify is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is headquartered in Bangalore and operates in more than 500 Indian cities as of September 2021. Besides food delivery, the platform also provides on-demand grocery deliveries under the name Instamart, and same-day package delivery service called Foodify Genie.
//         </h4>
//         <UserClass name={"Harshil Tomar(class)"} location={"Dehradun Class"}/>
//       </div>
//       <div className="about-right">
//         <img src={LOGO_URL} alt="Food Image" />
//       </div>
//     </div>
//   );
// };

export default About;