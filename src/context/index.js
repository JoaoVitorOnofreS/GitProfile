import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [userFollowers, setUserFollowers] = useState([]);
    const [userFollowings, setUserFollowings] = useState([]);

    return (
        <context.Provider
            value={{
                userData,
                userRepos,
                setUserRepos,
                setUserData,
                userFollowers,
                setUserFollowers,
                userFollowings,
                setUserFollowings,
            }}
        >
            {props.children}
        </context.Provider>
    );
};
