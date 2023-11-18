import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count, setCount]= useState(0);

    useEffect(()=>{
        //Api Calls
    }, []);

    async function getUserInfo() {
        
    }

    return <div className="user-card">
        <h1>Founder Name: {name}</h1>
        <h4>Count: {count}</h4>
        <h4>Location: Dehradun</h4>
        <h4>Contact: harshiltomar20@gmail.com</h4>
    </div>
}

export default User;