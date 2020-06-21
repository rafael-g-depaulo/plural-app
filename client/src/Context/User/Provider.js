import React, { useState, useEffect } from "react";
import { UserContext } from "./index.js";
import { getCurrentUser } from "../../api";

export function UserProvider(props) {
  const [isLoading, setIsLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    let didCancel = false;

    async function fetchUserData() {
      !didCancel && setIsLoading(true);

      try {
        const response = await getCurrentUser();

        !didCancel && setCurrentUser(response.data.current_user);

        console.log(
          "Successfully fetched current user.",
          response.data.current_user
        );
      } catch (error) {
        !didCancel && setCurrentUser(null);
        !didCancel && setError(error.data?.status);

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

  return isLoading === true ? (
    <h1>Loading</h1>
  ) : (
    <UserContext.Provider value={currentUser}>
      {isLoading === true ? <h1>Loading...</h1> : props.children}
    </UserContext.Provider>
  );
}
