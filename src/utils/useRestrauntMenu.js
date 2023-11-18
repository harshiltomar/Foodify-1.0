import { useEffect } from "react";
import { useState } from "react";
import { SWIGGY_API_MENU_URL } from "./constants";

const useRestrauntMeu= (resId)=> {

    //Local Variable for Info
    const [resInfo, setResInfo] = useState(null);
    
    //fecth data
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        try {
            const data = await fetch(
            SWIGGY_API_MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
            );

            const json = await data.json();

            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    return resInfo;
}

export default useRestrauntMeu;