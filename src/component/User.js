import { useState } from "react";

const User = ({name}) => {
    const [count, setCount]= useState(0);
    const [count2, setCount2]= useState(5);

    return <div className="user-card">
        <h1>Founder Name: {name}</h1>
        <h4>Count: {count}</h4>
        <h4>Count2: {count2}</h4>
        <h4>Location: Dehradun</h4>
        <h4>Contact: harshiltomar20@gmail.com</h4>
    </div>
}

export default User;