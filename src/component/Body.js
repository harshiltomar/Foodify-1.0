import RestrauntCard from "./RestrauntCard";
import { useEffect,useState } from "react";
import Shimmer from "../utils/shimmer";
import { SWIGGY_API_URL } from "../utils/constants";

function filterData(searchText, restaurants) {
    const resFilterData= restaurants.filter(
        (restaurant) => {
            // check for Name 
            const restaurantNameMatch= restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            // check for Cuisine
            const cuisineMatch= restaurant?.info?.cuisines.some(cuisine => cuisine.toLowerCase().includes(searchText.toLowerCase())
            );
            return restaurantNameMatch || cuisineMatch;
        }
    );
    return resFilterData;
}

const Body= () => {

    // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
    const [AllRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setsearchText]= useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // Whenever state variables update, react triggers a reconiliation cycle (re-renders the component)

    // use useEffect for one time call getRestaurants using empty dependency array
    useEffect(() => {
        getResaurants();
    }, []);

    async function getResaurants () {
        const response = await fetch(
          SWIGGY_API_URL
        );
        const json = await response.json();
        

        async function checkJsonData(jsonData) {
            for (let i = 0; i < json?.data?.cards.length; i++) {
    
              // initialize checkData for Swiggy Restaurant data - Optional Chaining
              let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
              // if checkData is not undefined then return it
              if (checkData !== undefined) {
                return checkData;
              }
            }
        }

        const resData = await checkJsonData(json);
    
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
    };
    

    const searchData= (searchText,AllRestaurants)=> {
        if(searchText!=="") {
            const filteredData= filterData(searchText,AllRestaurants);
            setFilteredRestaurants(filteredData);
            setErrorMessage("");
            if(filteredData?.length===0) {
                setErrorMessage("No matches Found !");
            }
        }
        else {
            setErrorMessage("");
            setFilteredRestaurants(AllRestaurants);
        }
    }

    if(!AllRestaurants) return null;
    //Conditional Rendering
    
    return AllRestaurants.length === 0 ? <Shimmer/>: (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    placeholder="Search for Restaurant/cusinines" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button onClick={()=> {
                        //Fliter Logic
                        searchData(searchText, AllRestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=>{
                    const FilteredRestaurants= AllRestaurants.filter(
                        (resData) => resData.info.avgRating >= 4.5
                    )
                    setFilteredRestaurants(FilteredRestaurants);
                }}>
                    Top Rated
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => <RestrauntCard key={restaurant.info.id} {...restaurant.info}/>)
                }
            </div>           
        </div>
    );
};

export default Body;