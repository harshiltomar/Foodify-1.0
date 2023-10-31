import { LOGO_URL } from "../utils/constants";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
        Foodify is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is headquartered in Bangalore and operates in more than 500 Indian cities as of September 2021. Besides food delivery, the platform also provides on-demand grocery deliveries under the name Instamart, and same-day package delivery service called Swiggy Genie.
        </h4>
      </div>
      <div className="about-right">
        <img src={LOGO_URL} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;