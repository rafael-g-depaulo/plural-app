import React, { useState, useEffect } from "react";
import { UserContext } from "./index.js";
import { getCurrentUser } from "Api/User";
import { useHistory } from "react-router-dom";

import Loading from "Pages/Loading";

export function UserProvider(props) {
  const [isLoading, setIsLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(undefined);

  const [error, setError] = useState(null);

  const history = useHistory();

  /*
    Each time the current user gets updated, check if:
      - Is active
      - Is LGBTQ
      - Has filled the mapping form 
  */
  useEffect(() => {
    if (currentUser !== undefined && currentUser !== null) {
      if (currentUser.providerId !== null && currentUser.name === null) {
        history.push({
          pathname: "/signup",
          state: { userFromProvider: true },
        });
      } else if (currentUser.active === false) {
        console.log("Redirecting to email confirmation.");

        history.push("/confirmation");
      } else if (currentUser.isLgbtq === null) {
        console.log("Redirecting to is LGBTQ+?");

        history.push("/areyouLGBTQIA");
      } else if (
        currentUser.isLgbtq === true &&
        currentUser.isMappingParticipant === null &&
        currentUser.mapping === null
      ) {
        console.log("Redirecting to mapping question.");

        history.push("/participar-mapeamento");
      } else if (
        currentUser.isMappingParticipant === true &&
        (currentUser.mapping === null || currentUser.mapping === undefined)
      ) {
        console.log("Redirecting to mapping");

        history.push("/mapping");
      } else {
        console.log("Redirecting to .");

        history.push("/");
      }
    }
  }, [currentUser, history]);

  useEffect(() => {
    let didCancel = false;

    async function fetchUserData() {
      !didCancel && setIsLoading(true);

      console.log("Fetching current user...");

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
