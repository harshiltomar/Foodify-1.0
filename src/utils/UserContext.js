import { createContext } from "react";

const UserContext= createContext({
    loggedInUser: "Default User",
    SetUserName: () => {},
});

export default UserContext;