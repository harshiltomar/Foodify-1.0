import { useEffect, useState } from "react";

//React custom hook
const useOnlineStatus=()=> {

    const [onlineStatus,setOnlinestatus]= useState(true);
    //check if online
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlinestatus(false);
        })

        window.addEventListener("online", ()=>{
            setOnlinestatus(true);
        })
    },[])

    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;