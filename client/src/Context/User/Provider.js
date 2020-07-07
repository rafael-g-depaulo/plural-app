import React, { useState, useEffect } from "react";
import { UserContext } from "./index.js";
import { getCurrentUser } from "Api/User";

import Loading from "Pages/Loading";

export function UserProvider(props) {
  const [isLoading, setIsLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(undefined);

  const [error, setError] = useState(null);

  useEffect(() => {
    let didCancel = false;

    async function fetchUserData() {
      !didCancel && setIsLoading(true);
      
      try {
        const response = await getCurrentUser();

        !didCancel && setCurrentUser(response.data.current_user);

        // console.log(
        //   "Successfully fetched current user.",
        //   response.data.current_user
        // );
      } catch (err) {
        !didCancel && setCurrentUser(null);
        !didCancel && setError(err.data?.status);

        console.log("An error occured while fetching current user.");

        // Insert error treatment here.
      } finally {
        !didCancel && setIsLoading(false);
      }
    }

    fetchUserData();

    return () => {
      didCancel = true;
    };
  }, []);

  if (error) console.warn("UserProvider Error:", error);

  useEffect(() => { if (process.env.NODE_ENV !== "production") console.log("current user", currentUser) }, [currentUser])

  return isLoading === true ? (
    <Loading />
  ) : (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser: (user) => setCurrentUser(user) }}
    >
      {isLoading === true ? <Loading /> : props.children}
    </UserContext.Provider>
  );
}
